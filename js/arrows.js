// arrows

const arrowsWrapHTML = `
  <style>
    .arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
`;

const arrowsWrapDiv = document.createElement(`div`);
arrowsWrapDiv.setAttribute(`class`, `arrows__wrap`);
arrowsWrapDiv.innerHTML = arrowsWrapHTML;
document.querySelector(`div.app`).appendChild(arrowsWrapDiv);
