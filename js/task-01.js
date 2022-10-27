const categories = document.querySelectorAll(".item");

console.log("Number of categories: " + categories.length);

categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listEL = item.lastElementChild;
  console.log(`Elements: ${listEL.children.length}`);
  console.log("");
});
