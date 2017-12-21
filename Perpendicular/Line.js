class Line{
  constructor(slope, yIntercept,color){
    this.color = color || "red";
    this.slope = slope || 0;
    this.yIntercept = yIntercept || 0;
  }
  calcY(x){
    return x*this.slope + this.yIntercept;
  }

  draw(x0,x1){
    context.beginPath();
    context.strokeStyle = this.color
    context.moveTo(x0,this.calcY(x0));
    context.lineTo(x1,this.calcY(x1));
    context.stroke();
    context.closePath();
  }

  letTwoPointDefineLine(A,B){
    let dx = B.x - A.x;
    let dy = B.y - A.y;
    this.slope = dy/dx;
    this.yIntercept = this.calcIntercept(A.x, A.y);
  }

  calcIntercept(x, y){
    return y-this.slope*x
  }
}
