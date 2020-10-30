document.querySelector(".btn").addEventListener("click", onClick);
let spanBG = document.querySelector("span");
function onClick(e) {
  console.log(e.offsetY, e.offsetX);
  spanBG.style.top = `${e.offsetY}px`;
  spanBG.style.left = `${e.offsetX}px`;
  setTimeout(() => {
    spanBG.style.transform = `translate(-50%,-50%)scale(1)`;
  },500)
  spanBG.style.transform = `translate(-50%,-50%)scale(0)`;
}
