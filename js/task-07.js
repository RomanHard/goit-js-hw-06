const inputEl = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

const fontSizeOn = (event) => {
  spanEL.style.fontSize = String(event.currentTarget.value) + "px";
};

inputEl.addEventListener("input", fontSizeOn);
