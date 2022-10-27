const body = document.body;
const btnColor = body.querySelector(".change-color");
const spanEL = body.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnColor.addEventListener("click", onClickBtnChangeColor);

function onClickBtnChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanEL.textContent = body.style.backgroundColor;
}
