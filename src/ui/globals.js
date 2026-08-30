/* Bridge between the ES modules and the inline `onclick="..."` handlers in
   index.html and in the HTML templates the UI modules generate.

   Every function that inline markup may call is listed here explicitly and
   installed on `window` once at startup. `tests/inline-handlers.test.js`
   verifies that every handler used in markup is present in this list. */
import { go } from './navigation.js';
import { toggleRadialMenu, closeRadialMenu } from './radialMenu.js';
import { toggleDyslexia, toggleLightMode, cycleTextSize } from './preferences.js';
import { togglePomodoro, cyclePomodoroDuration } from './pomodoro.js';
import { openExam, closeExam, startExam, answerExamQuestion, renderExamStart } from './exam.js';
import { advanceIntro } from './intro.js';
import { chooseSubject } from './home.js';
import { chooseLevel, chooseYear } from './level.js';
import { openChapter, setTab } from './chapter.js';
import { toggleSq3r, sq3rNext, sq3rPrevious } from './summary.js';
import { saveSq3rQuestion, saveSq3rRecite } from '../state/notes.js';
import {
  toggleCardGrouping, resetCards, showUnknownCards, showDueCards, flipCard, toggleCheck, markCard, toggleCardFavorite,
} from './flashcards.js';
import {
  openLevel, closeLevel, gameTile, gameCheck, gameReveal, gameChoose,
  gamePickWord, gameUnpickWord, gameSortPick, gameSortDrop, gameNext,
} from './game.js';
import { answerQuestion, resetQuiz, toggleMistakeMode } from './quiz.js';
import { toggleTermGrouping, toggleTermFavorite } from './glossary.js';
import { updateNoteField, addNoteRow, removeNoteRow, saveNoteSummary, clearNotes } from './notes.js';
import { openSearch, closeSearch, onSearchInput, openSearchResult } from './search.js';
import { openFavorites, closeFavorites, openFavorite, removeFavorite } from './favorites.js';
import { openHelp, closeHelp, goToSlide, nextSlide, previousSlide } from './help.js';
import { openWhatsNew, closeWhatsNew } from './whatsNew.js';
import { applyUpdate, dismissUpdate } from './appUpdate.js';
import { toggleProfileMenu, closeProfileMenu, logout, submitLogin, submitRegistration, showRegistration } from './account.js';
import {
  adminResetPassword, adminToggleStatus, adminToggleMute, adminDeleteUser,
  adminCreateInvites, adminDeleteInvite, adminCopyInvite,
  adminClearChat, adminCleanUpInvites, adminClearStudentMessages,
} from './admin.js';
import {
  adminToggleProgress, adminClearLevelProgress, adminClearChapterProgress, adminClearAllProgress,
} from './adminProgress.js';
import {
  submitUsernameChange, submitPasswordChange,
  settingsCycleTextSize, settingsToggleDyslexia, settingsResetProgress,
  settingsClearOwnMessages, settingsLogoutEverywhere, submitAccountDeletion,
} from './settings.js';
import { submitChatMessage, chatToggleMute, chatDeleteMessage } from './chat.js';

export const globalHandlers = {
  go,
  toggleRadialMenu, closeRadialMenu,
  toggleDyslexia, toggleLightMode, cycleTextSize,
  togglePomodoro, cyclePomodoroDuration,
  openExam, closeExam, startExam, answerExamQuestion, renderExamStart,
  advanceIntro,
  chooseSubject, chooseLevel, chooseYear,
  openChapter, setTab,
  toggleSq3r, sq3rNext, sq3rPrevious, saveSq3rQuestion, saveSq3rRecite,
  toggleCardGrouping, resetCards, showUnknownCards, showDueCards, flipCard, toggleCheck, markCard, toggleCardFavorite,
  openLevel, closeLevel, gameTile, gameCheck, gameReveal, gameChoose,
  gamePickWord, gameUnpickWord, gameSortPick, gameSortDrop, gameNext,
  answerQuestion, resetQuiz, toggleMistakeMode,
  toggleTermGrouping, toggleTermFavorite,
  updateNoteField, addNoteRow, removeNoteRow, saveNoteSummary, clearNotes,
  openSearch, closeSearch, onSearchInput, openSearchResult,
  openFavorites, closeFavorites, openFavorite, removeFavorite,
  openHelp, closeHelp, goToSlide, nextSlide, previousSlide,
  openWhatsNew, closeWhatsNew, applyUpdate, dismissUpdate,
  toggleProfileMenu, closeProfileMenu, logout, submitLogin, submitRegistration, showRegistration,
  adminResetPassword, adminToggleStatus, adminToggleMute, adminDeleteUser,
  adminCreateInvites, adminDeleteInvite, adminCopyInvite,
  adminClearChat, adminCleanUpInvites, adminClearStudentMessages,
  adminToggleProgress, adminClearLevelProgress, adminClearChapterProgress, adminClearAllProgress,
  submitUsernameChange, submitPasswordChange,
  settingsCycleTextSize, settingsToggleDyslexia, settingsResetProgress,
  settingsClearOwnMessages, settingsLogoutEverywhere, submitAccountDeletion,
  submitChatMessage, chatToggleMute, chatDeleteMessage,
};

export function installGlobals() {
  Object.assign(window, globalHandlers);
}
