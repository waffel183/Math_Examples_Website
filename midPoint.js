class midPoint{
  constructor(color){
    this.color = color || "red";
  };
  draw(canvas){
    context.beginPath();
    context.fillStyle = this.color;
    context.fillWidth = 10;
    context.arc(this.x,this.y,5,0, Math.PI*2);
    context.stroke();
    context.fill();
    context.closePath();
  }
  calcXandY(a, b){
    this.x = (b.x+a.x)/2;
    this.y = (b.y+a.y)/2;
  }
}
