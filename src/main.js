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
import { initSearch } from './ui/search.js';
import { initFavorites } from './ui/favorites.js';
import { initChat, renderChat } from './ui/chat.js';
import { initAccountMenu, renderAccount } from './ui/account.js';
import { renderSubjectGrid, initCardSpotlight } from './ui/home.js';
import { renderLevel } from './ui/level.js';
import { renderBook } from './ui/book.js';
import { renderChapter } from './ui/chapter.js';
import { renderCharacterCards } from './ui/character.js';
import { renderSettings } from './ui/settings.js';
import { renderAdmin } from './ui/admin.js';
import { registerServiceWorker } from './ui/serviceWorker.js';

registerScreen(SCREENS.level, renderLevel);
registerScreen(SCREENS.book, renderBook);
registerScreen(SCREENS.chapter, renderChapter);
registerScreen(SCREENS.character, renderCharacterCards);
registerScreen(SCREENS.account, renderAccount);
registerScreen(SCREENS.settings, renderSettings);
registerScreen(SCREENS.admin, renderAdmin);
registerScreen(SCREENS.chat, renderChat);

installGlobals();
initSparkles();
initRadialMenu();
initPreferences();
initPomodoro();
initHelp();
initSearch();
initFavorites();
initChat();
initAccountMenu();
initCardSpotlight();
renderSubjectGrid();
initIntro();
registerServiceWorker();
