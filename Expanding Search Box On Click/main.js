document.querySelector(".icon").addEventListener("click", function () {
  document.querySelector(".search").classList.toggle("active");
  document.querySelector(".icon").classList.toggle("left");
  document.querySelector(".fas").classList.toggle("fa-times");
});
