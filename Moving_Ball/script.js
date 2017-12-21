const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var circleA = new Point(100,100,20,"#00FFFF");
circleA.draw(canvas);

var circleB = new Point(400,10,10,"#FF0000");
circleB.draw(canvas);

circleA.drag();
circleB.drag();

function loop(){
  context.clearRect(0,0,800,450);
  circleA.draw();
  circleB.draw();
}

setInterval(loop,1);
