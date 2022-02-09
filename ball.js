var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");


function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymin = 300;

  if(reverse){
    positionX = positionX - velocity;
    
  }
  else{
    positionX = positionX + velocity;
    positionY = positionY + velocity; 
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }
  if(positionX>Xmax ||
  positionX===Xmin||
  positionY > Ymax||
  positionY===Ymin
  ){
    reverse = !reverse;
  }
  
}
var velocity2 = 7;
var positionX2 = 2;
var positionY2 = 4;
var ball 2 = document.getElementById('ball2');

function moveBall2(){
  var Xmin = 50;
  var Xmax = 200;
  var Ymin = 50;
  var Ymax = 200;
  
  if(reverse){
    positionX2 = positionX2 - velocity2;
    positionY2 = positionY2 - velocity2;
    ball.style.left = positionX + "px";
    ball.style.top =  positionY + "px";
      }
  if(positionX2>Xmax ||
  positionX2===Xmin||
  positionY2 > Ymax||
  positionY2===Ymin
  ){
    reverse = !reverse;
  }
    
    
    
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
