/* Release history, shown to students in the "Wat is er nieuw?" sheet.

   When you deploy something students will notice, add an entry at the TOP of
   CHANGELOG and set APP_VERSION to the same number. Two other files carry the
   same version and have to be bumped with it -- `version` in package.json, and
   APP_VERSION in public/sw.js, which is what makes the browser notice a deploy
   at all. `tests/changelog.test.js` fails when the three drift apart.

   The version is also what decides whether the sheet opens by itself: the
   number of the last version a student saw is kept in localStorage, and
   anything newer is shown once on the home screen.

   The entries are Dutch because students read them. Keep the lines short and
   concrete: what can you do now that you could not do yesterday? */

export const APP_VERSION = '2.5.0';

export const CHANGELOG = [
  {
    version: '2.5.0',
    date: '2026-08-30',
    title: 'Inloggen is nu verplicht',
    changes: [
      'Je logt voortaan eerst in, daarna kom je pas op de site. Zo staat je voortgang in je eigen account en niet alleen op dit apparaat.',
      'Nog geen account? Vraag je docent om een uitnodigingscode. Daarmee maak je er zelf een.',
      'Werk dat je zonder account op dit apparaat deed, blijft gewoon staan.',
    ],
  },
  {
    version: '2.4.0',
    date: '2026-08-30',
    title: 'Blijf ingelogd op je eigen telefoon',
    changes: [
      'Vink bij het inloggen "Blijf ingelogd op dit apparaat" aan, dan hoef je je wachtwoord niet elke keer opnieuw in te typen.',
      'Doe dat alleen op je eigen telefoon of laptop. Op een computer van school laat je het uit: dan ben je uitgelogd zodra je het tabblad sluit.',
      'Uitloggen zet het altijd weer uit, ook voor de volgende die de computer gebruikt.',
    ],
  },
  {
    version: '2.3.2',
    date: '2026-08-30',
    title: 'Samenvattingen passen weer op je scherm',
    changes: [
      'In sommige samenvattingen viel de tekst rechts van het scherm af. Nu loopt hij netjes door op de volgende regel.',
      'De tekentjes in de knoppen en de tips zien er op elke telefoon hetzelfde uit.',
    ],
  },
  {
    version: '2.3.1',
    date: '2026-08-30',
    title: 'Kleine fouten weg',
    changes: [
      'De menuknop bleef na het sluiten een stukje omlaag staan. Nu blijft hij netjes op zijn plek.',
      'De knop Verder bij het begin sprong naar rechts, over Overslaan heen.',
      'Het kruisje om een venster te sluiten scrolde mee naar beneden. Nu blijft het bovenaan staan.',
    ],
  },
  {
    version: '2.3.0',
    date: '2026-08-30',
    title: 'Gemaakt voor je telefoon',
    changes: [
      'De hele site is opnieuw ingedeeld voor een klein scherm: minder lege ruimte, dus je ziet meer in één blik.',
      'Knoppen, sterretjes en antwoorden zijn groter, zodat je ze in één keer raakt.',
      'Zoeken, Uitleg en Favorieten schuiven nu van onderen omhoog. Je bedient ze met je duim.',
      'Op de startpagina veeg je door de snelknoppen heen, zodat je de vakken meteen ziet.',
      'Typen in een invoervak zoomt niet meer per ongeluk in.',
      'De app zegt het voortaan zelf als er een nieuwe versie klaarstaat.',
    ],
  },
  {
    version: '2.2.0',
    date: '2026-08-30',
    title: 'Vijf nieuwe soorten oefeningen',
    changes: [
      'Nieuw in het Oefenspel: vul het gat in, sorteer, quizvraag, waar of niet waar, en welke hoort er niet bij.',
      'Samen met de oude zijn dat negen soorten oefeningen, dus een level lijkt nooit op het vorige.',
      'Je voortgang staat nu ook in je account. Log je op een andere telefoon in, dan staat alles er gewoon.',
    ],
  },
  {
    version: '2.1.0',
    date: '2026-08-29',
    title: 'Het Oefenspel',
    changes: [
      'Elk hoofdstuk heeft een pad met levels. Haal je een level, dan wordt hij groen en gaat de volgende open.',
      'Je verdient XP en ziet per vak je level op je personagekaart.',
      'Verbind, typ, kies en volgorde: vier manieren om dezelfde stof te oefenen.',
      'Teamchat: je klasgenoten vragen zonder de site te verlaten.',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-08-28',
    title: 'De site opnieuw opgebouwd',
    changes: [
      'Alles is sneller en werkt nu ook zonder internet, nadat je de site één keer geopend hebt.',
      'Je kunt de site op je beginscherm zetten en als app gebruiken.',
      'Eigen account met voortgang, favorieten en notities.',
    ],
  },
];

/* Compare two "1.2.3" strings. Returns true when `candidate` comes after
   `reference`. Anything unparseable counts as 0, so a broken value never
   throws. */
export function isNewerVersion(candidate, reference) {
  const a = String(candidate == null ? '' : candidate).split('.');
  const b = String(reference == null ? '' : reference).split('.');
  for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
    const left = Number(a[i]) || 0;
    const right = Number(b[i]) || 0;
    if (left !== right) return left > right;
  }
  return false;
}

/* The entries a student has not seen yet. Pass the last version they saw;
   pass nothing and you get the whole history (that is what the menu does). */
export function entriesSince(version) {
  if (!version) return CHANGELOG;
  return CHANGELOG.filter((entry) => isNewerVersion(entry.version, version));
}
