class ObstaclesUp{

  constructor(x,random){
    this.x = x;
    this.random = random
  }

  create(){
    ctx.beginPath()
    ctx.rect(this.x,0,30,this.random);
    ctx.stroke();
    ctx.fill();
    ctx.closePath()
  }
  move(arr,i){
    this.x = this.x-obstacleMove;
    if(this.x<-ballR){
      arr.splice(i,1);
    }
  }
  collision(ballY){
    if(((this.x<=ballX+ballR) && this.x>=(ballX-(ballR/2)-30))){
      if((ballY-ballR)<=this.random){
        gravity = 0;
        obstacleMove = 0;
        ballUp = 0;
        $("#result").html("YOU LOST !");
      }
    }
  }
  score(){
    if((this.x <=152 && this.x>=148)&& obstacleMove !=0){
      score++;
      $("#score1").html(score);
    }
  }
  }
