/* Application entry point: load styles + content, wire up screens and features. */
import './styles/main.css';
import './content/index.js';

import { registerScreen, SCREENS } from './ui/navigation.js';
import { installGlobals } from './ui/globals.js';
import { initSparkles } from './ui/sparkles.js';
import { initRadialMenu } from './ui/radialMenu.js';
import { initPreferences } from './ui/preferences.js';
import { initPomodoro } from './ui/pomodoro.js';
import { initIntro } from './ui/intro.js';
import { initHelp } from './ui/help.js';
import { initWhatsNew } from './ui/whatsNew.js';
import { initSearch } from './ui/search.js';
import { initFavorites } from './ui/favorites.js';
import { renderAgenda, initAgenda } from './ui/agenda.js';
import { initAccountMenu, renderAccount } from './ui/account.js';
import { renderSubjectGrid, initCardSpotlight } from './ui/home.js';
import { renderLevel } from './ui/level.js';
import { renderBook } from './ui/book.js';
import { renderChapter } from './ui/chapter.js';
import { renderCharacterCards } from './ui/character.js';
import { renderSettings } from './ui/settings.js';
import { renderAdmin } from './ui/admin.js';
import { registerServiceWorker } from './ui/serviceWorker.js';
import { initAuthGate } from './ui/authGate.js';

registerScreen(SCREENS.level, renderLevel);
registerScreen(SCREENS.book, renderBook);
registerScreen(SCREENS.chapter, renderChapter);
registerScreen(SCREENS.character, renderCharacterCards);
registerScreen(SCREENS.account, renderAccount);
registerScreen(SCREENS.settings, renderSettings);
registerScreen(SCREENS.admin, renderAdmin);
registerScreen(SCREENS.agenda, renderAgenda);

installGlobals();
initSparkles();
initRadialMenu();
initPreferences();
initPomodoro();
initHelp();
initWhatsNew();
initSearch();
initFavorites();
initAgenda();
initAccountMenu();
initCardSpotlight();
renderSubjectGrid();
initIntro();
registerServiceWorker();
/* Last: closes the site to guests when REQUIRE_LOGIN is on, and decides
   whether the app opens on the welcome or on the login screen. */
initAuthGate();
