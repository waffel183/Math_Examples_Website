const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

//line1 points
var A = new Point(100,100,10,"#0000FF");
var B = new Point(200,200,10,"#FF0000");

//line2 points
var C = new Point(100,50,10,"#000000");
var D = new Point(50,100,10,"#FFFFFF");

//intercept point
var S = new Cut("#00FF00");

A.drag();
B.drag();

C.drag();
D.drag();

var line1 = new Line();

var line2 = new Line();

function loop(){
  context.clearRect(0,0,800,450);
  line1.letTwoPointDefineLine(A,B);
    line1.draw(0,800);
  line2.letTwoPointDefineLine(C,D);
    line2.draw(0,800);
  A.draw();
  B.draw();
  C.draw();
  D.draw();
  S.calcPos(line1.yIntercept, line2.yIntercept, line1.slope, line2.slope);
  S.draw();
}

setInterval(loop,1);
