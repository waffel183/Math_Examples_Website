class Perpendicular{
  constructor(Ax, Ay,slope,yIntercept){
    this.Ax = Ax;
    this.Ay = Ay;
    this.slope = -1 / slope || 0;
    this.yIntercept = yIntercept || 0;
    this.color = "#00FFFF";
  }

  calcPeY(Px, Py, x){
    return this.slope*x+this.yIntercept; //y-(Ay) = -1/S(x-(Ax))
  }
  draw(x0,x1,Px,Py){
    context.beginPath();
    context.strokeStyle = this.color
    context.moveTo(x0,this.calcPeY(Px,Py,x0));
    context.lineTo(x1,this.calcPeY(Px,Py,x1));
    context.stroke();
    context.closePath();
  }
  calcSlope(A,B,P){
    let dx = B.x - A.x;
    let dy = B.y - A.y;
    this.slope = -1/(dy/dx);
    this.yIntercept = this.calcIntercept(P.x, P.y);
  }
  calcIntercept(x, y){
    return y-this.slope*x
  }
}
