// util.js

export const getElementFromTemplate = (template) => {

  const domParser = new DOMParser();
  return domParser.parseFromString(template, `text/html`).body.firstElementChild;

};

const mainElement = document.querySelector(`section.main`);

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const showScreen = (template, events) => {
  const element = getElementFromTemplate(template);
  changeScreen(element);

  if (typeof events !== `undefined`) {
    events();
  }
};
