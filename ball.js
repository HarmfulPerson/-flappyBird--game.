class Ball{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;

  }
  show(){

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke()
    ctx.closePath();
}
  move(){
    this.y = this.y-30*gravity;
   if(this.y<0){
      this.y = 0 +this.r;
      gravity = 0;
      obstacleMove = 0;
      ballUp = 0;
      $("#result").html("YOU LOST !");

    }
  }
  gravity(){
    this.y=this.y + gravity;
    if(this.y>c.height-this.r){
      this.y = c.height-this.r;
      obstacleMove = 0;
      ballUp = 0;
      gravity = 0;
      $("#result").html("YOU LOST !");
    }
}
  ballYs(){
    return this.y;
  }
  ballXs(){
    return this.x;
  }

}
