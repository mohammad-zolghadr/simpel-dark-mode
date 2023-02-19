const checkBox = document.querySelector("#toggle");
let htmlElement = document.documentElement;

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
  }
});
