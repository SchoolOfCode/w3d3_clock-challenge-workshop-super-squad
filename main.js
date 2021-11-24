const hand = document.querySelector(".hand");
// const hand = document.querySelector(".hour");
// const hand = document.querySelector(".second");
let currentRotation = 0;
// let currentRotationHour = 0;
// let currentRotationMin = 0;

function handClick() {
  hand.style.transform = `rotate(${currentRotation}deg)`;
  currentRotation = currentRotation + 6;
}
// function hourClick() {
//   hour.style.transform = `rotate(${currentRotationHour}deg)`;
//   currentRotationHour = currentRotationHour + 30;
// }
// function minClick() {
//   second.style.transform = `rotate(${currentRotationMin}deg)`;
//   currentRotationMin = currentRotationMin + 6;
// }

//setInterval(minClick, 60000);
//setInterval(hourClick, 3600000);
setInterval(handClick, 1000);

//for (let i = 0; i < a.length; i++) {
//hand.style.transform = `rotate [i](deg)';
//};
