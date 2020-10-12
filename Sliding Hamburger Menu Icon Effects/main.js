document.querySelector(".bars").addEventListener("click", function () {
  document.querySelector(".close").style.top = "50%";
  document.querySelector(".bars").style.top = "-100%";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".close").style.top = "200%";
  document.querySelector(".bars").style.top = "50%";
});
