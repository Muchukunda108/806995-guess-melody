'use strict';

const TEMPLATE = document.querySelector(`template`).content;
const SECTION_MAIN = document.querySelector(`section.main`);

const DOM_SCREENS_LINKS = [
  {screenName: `welcome`,
    screenNumber: 0,
    screenLink: TEMPLATE.querySelector(`.main--welcome`)},
  {screenName: `genre`,
    screenNumber: 1,
    screenLink: TEMPLATE.querySelector(`.main--level-genre`)},
  {screenName: `level-artist`,
    screenNumber: 2,
    screenLink: TEMPLATE.querySelector(`.main--level-artist`)},
  {screenName: `result`,
    screenNumber: 3,
    screenLink: TEMPLATE.querySelector(`.main--result`)}
];

{
  const arrowsWrapHTML = [
    `<style>`,
    `.arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }`,
    `.arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }`,
    `</style>`,
    `<button class="arrows__btn"><-</button>`,
    `<button class="arrows__btn">-></button>`
  ].join(``);

  const arrowsWrapDiv = document.createElement(`div`);
  arrowsWrapDiv.setAttribute(`class`, `arrows__wrap`);
  arrowsWrapDiv.innerHTML = arrowsWrapHTML;
  document.querySelector(`div.app`).appendChild(arrowsWrapDiv);
}

let currentScreen = 0;

const ShowScreen = (numScr) => {
  const elem = SECTION_MAIN.querySelector(`section`);
  const newElem = DOM_SCREENS_LINKS[numScr].screenLink.cloneNode(true);

  if (elem !== null) {
    SECTION_MAIN.replaceChild(newElem, elem);
  }
  SECTION_MAIN.appendChild(newElem);
};

ShowScreen(0);

const NextScreen = () => ShowScreen(++currentScreen);
const LastScreen = () => ShowScreen(--currentScreen);

document.onkeydown = function(e) {
  if (e.keyCode === 37 && currentScreen > 0 && currentScreen <= 3) {
    LastScreen();
  }
  if (e.keyCode === 39 && currentScreen >= 0 && currentScreen < 3) {
    NextScreen();
  }
};

const arrowsWrap = document.getElementsByClassName(`arrows__btn`);
const arrowLast= arrowsWrap[0];
const arrowNext= arrowsWrap[1];

arrowLast.onclick = function(e) {
  if (currentScreen > 0 && currentScreen <= 3) LastScreen();
};

arrowNext.onclick = function(e) {
  if (currentScreen >= 0 && currentScreen < 3) NextScreen();
};
