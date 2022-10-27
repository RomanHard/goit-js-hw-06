function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn = document.querySelector("[daa-create]");
destroyBtn = document.querySelector("[data-destroy");
input = document.querySelector("input");
box = document.querySelector("boxes");
