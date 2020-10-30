let eye = document.querySelectorAll(".eye");
document.querySelector("body").addEventListener("mousemove", eyeBall);

function eyeBall(e) {
  eye.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = rad * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotation}deg)`;
  });
}
