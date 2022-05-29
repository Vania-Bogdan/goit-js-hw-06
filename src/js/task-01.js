const categoriesEl = document.querySelectorAll(".item")
console.log(`Number of categories: ${categoriesEl.length}`)

const categoriesItems = categories.querySelectorAll(".item");
[...categoriesItems].map((item) => {
  console.log();
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});