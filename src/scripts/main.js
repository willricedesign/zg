//= include components/sample.js


//---------------------------------------------------
// ##Floating bull
//---------------------------------------------------


// Random Number with range
function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// Floating Bull
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
//change this to the width of the 
var bullRadius = 80;
var width = canvas.width = window.innerWidth - 0;
var height = canvas.height = window.innerHeight - 0;
var x = random(0, width);
var y = random(0, height);
var dx = 0.1;
var dy = -0.1;
var imageObj = new Image();

//Onload may be needed (or wrap it in window.onLoad) — test live
//imageObj.onload = function() {
//  ctx.drawImage(imageObj, x, y);
//};
//imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';

function drawBull() {
  ctx.drawImage(imageObj, x, y);
  imageObj.src = '../images/icons/thebull.svg';
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBull();
  if (x + dx > canvas.width - bullRadius || x + dx < bullRadius) {
      dx = -dx;
  }
  if (y + dy > canvas.height - bullRadius || y + dy < bullRadius) {
      dy = -dy;
  }
  x += dx;
  y += dy;
}

setInterval(draw, 10);


//---------------------------------------------------
// ##Smooth scroll to top
//---------------------------------------------------

$(function() {
  $('#footer__arrow').click(function() {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      return false;
  });
});
