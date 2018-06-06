// util.js
import welcomeScreen from './welcome-screen.js';
import genre from './genre.js';
import levelArtist from './level-artists.js';
import resultWin from './result-win.js';
import resultAttemptsEnd from './result-attemptsend.js';
import resultTimeOver from './result-timeover.js';
import modalError from './modal-error.js';
import modalConfirm from './modal-confirm.js';

// import './arrows.js';

export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainElement = document.querySelector(`section.main`);
/* const arrowsWrap = document.getElementsByClassName(`arrows__btn`);
const arrowLast = arrowsWrap[0];
const arrowNext = arrowsWrap[1]; */

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const screensNames = [
  welcomeScreen,
  genre,
  levelArtist,
  resultWin,
  resultTimeOver,
  resultAttemptsEnd,
  modalConfirm,
  modalError
];

// let currentScreen = 0;

export const showScreen = (numScr) => {
  const element = getElementFromTemplate(screensNames[numScr]);
  changeScreen(element);

  const lastScreen = function () {
    showScreen(+numScr - 1);
  };

  const nextScreen = function () {
    showScreen(+numScr + 1);
  };

  /* if (numScr === 0) {
    arrowLast.onclick = null;
    arrowNext.onclick = nextScreen;
  } else if (numScr === screensNames.length) {
    arrowLast.onclick = lastScreen;
    arrowNext.onclick = null;
  } else {
    arrowLast.onclick = lastScreen;
    arrowNext.onclick = nextScreen;
  }
 */
  document.onkeydown = function (e) {
    if (e.keyCode === 37 && numScr > 0 && numScr <= screensNames.length) {
      lastScreen();
    }
    if (e.keyCode === 39 && numScr >= 0 && numScr < screensNames.length) {
      nextScreen();
    }
  };
};
