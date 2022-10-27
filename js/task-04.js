let counterValue = 0;
const minBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

minBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

plusBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
