document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".btn").classList.add("subscribed");
  document.querySelector(".btn").innerHTML =
    'Subscribed  &nbsp;  <i class="far fa-check-circle"></i>';
});
