-- Backfilled from the live database (applied directly, not via this repo).
-- Eén rij per leerling/admin, gekoppeld aan Supabase's ingebouwde
-- inlogsysteem (auth.users regelt het wachtwoord zelf, veilig gehasht).
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  gebruikersnaam text unique not null,
  rol text not null default 'leerling' check (rol in ('leerling','admin')),
  status text not null default 'actief' check (status in ('actief','geblokkeerd')),
  aangemaakt_op timestamptz not null default now(),
  laatst_actief timestamptz
);

alter table public.profiles enable row level security;

create policy "eigen profiel lezen" on public.profiles
  for select using (auth.uid() = id);

create policy "eigen profiel bijwerken" on public.profiles
  for update using (auth.uid() = id);

create policy "admin leest alle profielen" on public.profiles
  for select using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.rol = 'admin')
  );

create policy "admin werkt profielen bij" on public.profiles
  for update using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.rol = 'admin')
  );

create policy "admin verwijdert profielen" on public.profiles
  for delete using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.rol = 'admin')
  );

-- Nieuw account -> automatisch een profiel-rij aanmaken.
create function public.nieuw_profiel_aanmaken()
returns trigger as $$
begin
  insert into public.profiles (id, gebruikersnaam)
  values (new.id, new.raw_user_meta_data->>'gebruikersnaam');
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.nieuw_profiel_aanmaken();
