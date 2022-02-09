
var maxWidth = 1000;
var ballRadius = 25;

// Ball 1
var velocity = 7;
var position = 0;
var ball = document.getElementById('ball');

function moveBall() {
  position = position + velocity;
  ball.style.left = position + 'px';
  if(position >= maxWidth || position <= 0) velocity=velocity*-1;
  checkCollision(ball);
}

setInterval(moveBall, 10);

// Ball 2
var velocity2 = 5;
var position2 = 0;
var ball2 = document.getElementById('ball2');

function moveBall2() {
  position2 = position2 + velocity2;
  ball2.style.left = position2 + 'px';
  if(position2 >= maxWidth || position2 <= 0) velocity2=velocity2*-1;
  checkCollision(ball2);
}

setInterval(moveBall2, 10);

// Ball 3
var velocity3 = 4;
var position3 = 0;
var ball3 = document.getElementById('ball3');

function moveBall3() {
  position3 = position3 + velocity3;
  ball3.style.left = position3 + 'px';
  if(position3 >= maxWidth || position3 <= 0) velocity3=velocity3*-1;
  checkCollision(ball3);
}

setInterval(moveBall3, 10);










