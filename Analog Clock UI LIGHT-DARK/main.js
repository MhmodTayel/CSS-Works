const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hour = day.getHours() * 30;
  let minute = day.getMinutes() * deg;
  let second = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  min.style.transform = `rotateZ(${minute}deg)`;
  sec.style.transform = `rotateZ(${second}deg)`;
});


const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("light");
});