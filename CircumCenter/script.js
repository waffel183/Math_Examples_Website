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

//midpints of the lines
var midAB = new midPoint();
var midAC = new midPoint();
var midBC = new midPoint();

//perpendicular lines through the midpoints and the same line
var perMidAB = new Perpendicular();
var perMidAC = new Perpendicular();
var perMidBC = new Perpendicular();

//median Point
var med = new Cut();

function loop(){
  context.clearRect(0,0,800,450);
  ab.letTwoPointDefineLine(A,B);
  midAB.calcXandY(A,B);
  perMidAB.calcSlope(A,B,midAB);
    ab.draw(0,800);
    perMidAB.draw(0,800,midAC.x,midAC.y);
    midAB.draw();

  ac.letTwoPointDefineLine(A,C);
  midAC.calcXandY(A,C);
  perMidAC.calcSlope(A,C,midAC);
    ac.draw(0,800);
    perMidAC.draw(0,800,midAC.x,midAC.y);
    midAC.draw();

  bc.letTwoPointDefineLine(B,C);
  midBC.calcXandY(B,C);
  perMidBC.calcSlope(B,C,midBC);
    bc.draw(0,800);
    perMidBC.draw(0,800,midBC.x,midBC.y);
    midBC.draw();

  A.draw();
  B.draw();
  C.draw();

  med.calcPos(perMidBC.yIntercept,perMidAB.yIntercept,perMidBC.slope,perMidAB.slope);
  med.draw();

  drawCircle(med, calcRadius(med,A));
}

setInterval(loop,1);

//calculate distance of midpoint to a realpoint and make it the radius of the circle

function calcRadius(P,A){
  var rx = P.x-A.x;
  var ry = P.y-A.y;
  var radius = Math.sqrt(rx*rx+ry*ry);
  return radius;
}

function drawCircle(P, radius){
  context.beginPath();
  context.fillWidth = 5;
  context.arc(P.x,P.y,radius,0, Math.PI*2);
  context.stroke();
  context.closePath();
}
