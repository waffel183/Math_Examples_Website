const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(100,100,10,"#0000FF");
var B = new Point(200,200,10,"#FF0000");
var U = new Point(125,150,10,"#000000");

U.drag();
A.drag();
B.drag();

var l = new Line();

function loop(){
  context.clearRect(0,0,800,450);
  l.letTwoPointDefineLine(A,B);
    l.draw(0,800);
  A.draw();
  B.draw();
  colorSwitch();
  U.draw();
}

function colorSwitch(){
  if (U.y>l.slope * U.x+ l.yIntercept) {
    U.color = "white";
  } else {
    U.color = "black";
  }
}

setInterval(loop,1);
