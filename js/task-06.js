const validationInput = document.querySelector("#validation-input");

const addRemovePassword = (add, remove) => {
  validationInput.classList.add(`${add}`);
  validationInput.classList.remove(`${remove}`);
};
const inputPassword = (e) => {
  const input = e.currentTarget.value.length;
  const validInputLength = Number(validationInput.dataset.length);
  if (input === validInputLength) {
    addRemovePassword("valid", "invalid");
  } else addRemovePassword("invalid", "valid");
};
validationInput.addEventListener("blur", inputPassword);
