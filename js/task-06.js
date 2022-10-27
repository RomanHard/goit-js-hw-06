const inputEL = document.querySelector("#validation-input");
const chekOn = (event) => {
  event.currentTarget.classList.remove("invalid");
  if (
    event.currentTarget.value.trim().length < event.currentTarget.dataset.length
  ) {
    event.currentTarget.classList.add("invalid");
  }
  event.currentTarget.classList.add("valid");
};
inputEL.addEventListener("blur", chekOn);
