let Hrs = document.getElementById("time-hours");
let Min = document.getElementById("time-minutes");
let Sec = document.getElementById("time-seconds");
let am_pm = document.getElementById("time-lapse");

setInterval(showTime, 1000);

function showTime() {
  let a = new Date();

  let h = a.getHours(); // getting hours
  let m = a.getMinutes(); // getting minutes
  let s = a.getSeconds(); // getting seconds

  // for maintaining digits in a clock
  h = h < 10 ? "0" + h : h; // for two digit showing 0 - 9 -=> 00-09
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (h > 12) {
    am_pm.innerHTML = "PM";
  }
  if (h == 0) {
    am_pm.innerHTML = "AM";
  }
  // displaying on the respective para tag
  Hrs.innerHTML = h;
  Min.innerHTML = m;
  Sec.innerHTML = s;
}
showTime();


// foot color
var foot = document.getElementById("footer");
// console.log(foot);

// generating different rgb code 
function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function ChangeCol() {
  let ranCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  foot.style.color = ranCol;
}

function change_back(){
    let ranCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background = ranCol;
}
setInterval(ChangeCol, 500);
setInterval(change_back,600);




