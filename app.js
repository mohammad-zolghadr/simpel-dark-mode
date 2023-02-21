const toggle = document.querySelector("#toggle");
const htmlElement = document.documentElement;

toggle.addEventListener("click", (e) => {
  if (e.target.checked) htmlElement.setAttribute("data-theme", "dark");
  else htmlElement.setAttribute("data-theme", "light");
});
