// console.log("This is wall clock section:");
// function updateClock(){ 
// let date =new Date()
// //year, month, day, hours, minutes, seconds, milliseconds
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// // This is line of code  is required for converting Am/pm
//  let str ="AM";
// if (hours > 12){
//      str ="PM";
// }
// // This code is used for adding 0 before second or minutes end when minutes and second is less than 10:
// if(minutes < 10){
//     minutes = "0" + minutes ;
// }
// if(seconds < 10 ){
//     seconds  = "0" + seconds
// }
// // This code is used for converting Train time to wall clock
// if(hours > 12){
//     hours = hours -12
// }
// if(hours == 0){
//     hours =12
// }


// let showTime = document.getElementById('showTime');
// let time1 =`<h1>${hours}:${minutes}:${seconds} ${str}</h1>`;
// showTime.innerHTML = time1;

// }
// setInterval(() => {
//   updateClock();
// }, 1000);




console.log("This is wall clock section:");
function updateClock(){ 
let date =new Date()
//year, month, day, hours, minutes, seconds, milliseconds
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// This is line of code  is required for converting Am/pm
  timeday = hours > 12 ? "PM" : "AM";

// This code is used for adding 0 before second or minutes end when minutes and second is less than 10:
  minutes = (minutes < 10 ? "0": "") + minutes ;

  seconds = (seconds < 10 ? "0": "") + seconds ;
// This code is used for converting Train time to wall clock
  hours = hours > 12 ? hours -12 : hours ;
  hours = hours == 0 ? 12 : hours;


let showTime = document.getElementById('showTime');
let time1 =`<h3>${hours}:${minutes}:${seconds}  ${timeday}</h3>`;
showTime.innerHTML = time1;

}

// This setInterval function is run each times after 1 second and runs the updateclock funciton
setInterval(() => {
  updateClock();
}, 1000);
