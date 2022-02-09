

function moveBall() {

var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");
 
 var Xmin = 0;
 var Xmax = 300;
 var Ymin = 0;
 var Ymin = 300;

 if(reverse){
   positionX = positionX - velocity;
   positionY = positionY - velocity;
   ball.style.left = positionX + "px";
   ball.style.top =  positionY + "px";
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
 positionY===Ymin)
 {
   reverse = !reverse;
 }
}

function moveBall2() {

var positionX2 = 30;
var positionY2 = 40;
var velocity2 = 50;
var reverse2 = false;
var ball2 = document.getElementById("ball2");
 
 var Xmin2 = 50;
 var Xmax2 = 200;
 var Ymin2 = 20;
 var Ymin2 = 500;

 if(reverse){
   positionX2 = positionX2 - velocity2;
   positionY2 = positionY2 - velocity2;
   ball2.style.left = positionX2 + "px";
   ball2.style.top =  positionY2 + "px";
 }


 else{
   positionX2 = positionX2 + velocity2;
   positionY2 = positionY2 + velocity2;
   ball2.style.left = positionX2 + "px";
   ball2.style.top = positionY2 + "px";
 }


 if(positionX2>Xmax2 ||
 positionX2===Xmin2||
 positionY2 > Ymax2||
 positionY2===Ymin2)
 {
   reverse2 = !reverse2;
 }
}





// This call the moveBall function every 100ms


setInterval(moveBall, 100);

