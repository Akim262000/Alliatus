const toggler = document.querySelector(".navbar-toggler");
const overlay = document.querySelector(".overlay");

toggler.addEventListener("click", function () {
  this.classList.toggle("open");
  overlay.classList.toggle("show");
});
