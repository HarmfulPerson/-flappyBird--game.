
class ObstaclesDown{

  constructor(x,y,random){
    this.x = x;
    this.y = y;
    this.random = random;
  }

  create(){
    ctx.rect(this.x,this.y,30,this.random*(-1));
    ctx.fill()
    ctx.stroke();
  }
  move(arr,i){
    this.x = this.x-obstacleMove;
    if(this.x<-ballR){
      arr.splice(i,1);
    }
  }
  collision(ballY,heightie){
    if(this.x<ballX+ballR && this.x>ballX-ballR-30){
      if((heightie - ballY)-ballR<this.random){
        gravity = 0;
        obstacleMove = 0;
        ballUp = 0;
        $("#result").html("YOU LOST !");
      }
    }
  }

}
