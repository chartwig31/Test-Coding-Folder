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
 positionY===Ymin

 ){

   reverse = !reverse;

 }


}

setInterval(moveBall, 100);

var ball2 = document.getElementById("ball2");
function moveBall2() {
 var Xmin2 = 50;
 var Xmax2 = 200;
 var Ymin2 = 50;
 var Ymin2 = 200;
 if(reverse){
   positionX2 = positionX2 - velocity2;
   positionY2 = positionY2 - velocity2;
   ball2.style.left = positionX2 + "px";
   ball2.style.top =  positionY2 + "px";
 }
 else{
   positionX2 = positionX2 + velocity2;
   positionY2 = positionY2 + velocity2;
   ball2.style.left = positionX + "px";
   ball2.style.top = positionY + "px";
 }
 if(positionX2>Xmax2 ||
 positionX2===Xmin2||
 positionY2 > Ymax2||
 positionY2===Ymin2)
 {
   reverse = !reverse;
 }
}
setInterval(moveBall2, 500);
