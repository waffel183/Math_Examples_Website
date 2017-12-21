const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(100,100,10,"#0000FF");
var B = new Point(200,200,10,"#FF0000");

A.drag();
B.drag();

var l = new Line();

function loop(){
  context.clearRect(0,0,800,450);
  l.letTwoPointDefineLine(A,B);
    l.draw(0,800);
  A.draw();
  B.draw();
}

setInterval(loop,1);
