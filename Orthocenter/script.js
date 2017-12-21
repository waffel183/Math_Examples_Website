const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(100,100,10,"#0000FF");
var B = new Point(200,200,10,"#FF0000");
var C = new Point(250, 193,10,"#00FF00");

//realpoints
A.drag();
B.drag();
C.drag();

//lines between the realpoints
var ab = new Line();
var ac = new Line();
var bc = new Line();

//perpendicular lines
var perA = new Perpendicular(A.x,A.y);
var perB = new Perpendicular(B.x,B.y);
var perC = new Perpendicular(C.x,C.y);

//median Point
var med = new Cut();

function loop(){
  context.clearRect(0,0,800,450);
  ab.letTwoPointDefineLine(A,B);
    ab.draw(0,800);

  ac.letTwoPointDefineLine(A,C);
    ac.draw(0,800);

  bc.letTwoPointDefineLine(B,C);
    bc.draw(0,800);

  perA.calcSlope(B,C,A);
    perA.draw(0,800,A.x,A.y);
  perB.calcSlope(A,C,B);
      perB.draw(0,800,B.x,B.y);
  perC.calcSlope(A,B,C);
      perC.draw(0,800,C.x,C.y);

  A.draw();
  B.draw();
  C.draw();

  med.calcPos(perB.yIntercept,perA.yIntercept,perB.slope,perA.slope);
  med.draw();
}

setInterval(loop,1);
