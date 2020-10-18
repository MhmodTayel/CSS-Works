const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const digitalClock = document.getElementById("digitalClock");

setInterval(() => {
  let day = new Date();
  let hour = day.getHours();
  let minute = day.getMinutes() * deg;
  let second = day.getSeconds() * deg;
  var ampm = hour/30 >= 12 ? 'pm' : 'am';
  var dhour = hour % 12;
  dhour = dhour ? dhour : 12;
  digitalClock.textContent = `${dhour}:${minute/6}:${second/6} ${ampm}`;
  hr.style.transform = `rotateZ(${hour  * 30 + minute / 12}deg)`;
  min.style.transform = `rotateZ(${minute}deg)`;
  sec.style.transform = `rotateZ(${second}deg)`;
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("light");
});
