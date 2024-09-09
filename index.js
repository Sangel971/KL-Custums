const sideBar = document.getElementById("side-bar");
const bugger = document.querySelector(".toggle-btn");

bugger.addEventListener("click", () => {
  sideBar.classList.toggle("side-bar");
});
