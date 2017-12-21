const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(100,100,10,"#0000FF");
var B = new Point(200,200,10,"#FF0000");
var P = new Point(300,300,10,"#00FF00");

P.drag();

A.drag();
B.drag();

var l = new Line();
var Pe = new Perpendicular(P.x,P.y);

function loop(){
  context.clearRect(0,0,800,450);
  l.letTwoPointDefineLine(A,B);
    l.draw(0,800);
  Pe.calcSlope(A,B,P);
    Pe.draw(0,800,P.x,P.y);
  A.draw();
  B.draw();
  P.draw();
}

setInterval(loop,1);
