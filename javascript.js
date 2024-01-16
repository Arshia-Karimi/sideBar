const ctrlBtn = document.querySelector(".ctrlBtn");
const sideBar = document.querySelector(".sideBar");

ctrlBtn.addEventListener("click", () => {
  ctrlBtn.classList.toggle("open");
  sideBar.classList.toggle("show");
});
