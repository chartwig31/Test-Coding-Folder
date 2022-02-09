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
function moveBall2(){
  var Xmin = 50;
  var Xmax = 200;
  var Ymin = 50;
  var Ymax = 200;
  
  if(reverse){
    positionX = position X - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top =  positionY + "px";
      }
  if(positionX>Xmax ||
  positionX===Xmin||
  positionY > Ymax||
  positionY===Ymin
  ){
    reverse = !reverse;
  }
    
    
    
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
