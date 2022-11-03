// =============================
// const inputElm = document.querySelector("#validation-input");
// inputElm.addEventListener("blur", onBlur);
// function onBlur(event) {
//   const input = event.currentTarget;
//   const inputLength = Number(input.dataset.length);
//   if (input.value.length === inputLength) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// }

const inputEl = document.querySelector("#validation-input");
const onCheckInputContent = (event) => {
  event.currentTarget.classList.remove("invalid");
  if (
    event.currentTarget.value.trim().length < event.currentTarget.dataset.length
  ) {
    event.currentTarget.classList.add("invalid");
  }
  event.currentTarget.classList.add("valid");
};
inputEl.addEventListener("blur", onCheckInputContent);
