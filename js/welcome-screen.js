// welcome-screen.js
import {showScreen} from './util.js';
import {default as levelArtist, addEvents as addEventArtists} from './level-artists.js';

const template = `<!-- Приветствие -->
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>`;

export const addEvent = () => {
  const mainPlay = document.querySelector(`.main-play`);
  mainPlay.addEventListener(`click`, () => {
    showScreen(levelArtist, addEventArtists);
  });
};

export default template;

