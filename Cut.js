class Cut{
  constructor(color){
    this.color = color || "#000000";
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
  //Bl = yIntercept line1
  //Bm = yIntercept line2
  //Al = slope line1
  //Am = slope line2
  calcPos(Bl,Bm,Al,Am){
    this.x = (-Bl+Bm)/(Al-Am);
    this.y = Am*this.x+Bm;
  }
}
