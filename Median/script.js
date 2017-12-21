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

//lines thought the midpoint and the realpoints
var mABc = new Line(0,0,"#00FFFF");
var mACb = new Line(0,0,"#00FFFF");
var mBCa = new Line(0,0,"#00FFFF");

//median Point
var med = new Cut();

function loop(){
  context.clearRect(0,0,800,450);
  ab.letTwoPointDefineLine(A,B);
  mABc.letTwoPointDefineLine(midAB,C);
  midAB.calcXandY(A,B);
    ab.draw(0,800);
    mABc.draw(0,800);
    midAB.draw();

  ac.letTwoPointDefineLine(A,C);
  midAC.calcXandY(A,C);
  mACb.letTwoPointDefineLine(midAC,B);
    ac.draw(0,800);
    mACb.draw(0,800);
    midAC.draw();

  bc.letTwoPointDefineLine(B,C);
  midBC.calcXandY(B,C);
  mBCa.letTwoPointDefineLine(midBC,A);
    bc.draw(0,800);
    mBCa.draw(0,800);
    midBC.draw();

  A.draw();
  B.draw();
  C.draw();

  med.calcPos(mBCa.yIntercept,mABc.yIntercept,mBCa.slope,mABc.slope);
  med.draw();
}

setInterval(loop,1);
