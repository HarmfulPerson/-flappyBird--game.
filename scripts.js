let dpi = window.devicePixelRatio;
fix_dpi();
var gravity = 2;
let fps = 0;
var obstacleMove = 4;
var ballUp = 60;
var ballX = 150;
var score = 0;
var ballY = 300;
var ballR = 20;
var c = document.getElementById("gameScreen");
var ctx = c.getContext("2d");
var obstaclesUp = [];
var obstaclesDown = [];
setup();
window.requestAnimationFrame(draw);
function fix_dpi() {
let style_height = +getComputedStyle(gameScreen).getPropertyValue("height").slice(0, -2);
//get CSS width
let style_width = +getComputedStyle(gameScreen).getPropertyValue("width").slice(0, -2);
//scale the canvas
gameScreen.setAttribute('height', style_height * dpi);
gameScreen.setAttribute('width', style_width * dpi);
}
$("#score1").html(score);
var ball;
function setup(){
  ball = new Ball(ballX,ballY,ballR);
  let random1 = Math.random()*170+1;
  let random2 = Math.random()*170+1;
  obstaclesUp.push(new ObstaclesUp(c.width,random1));
  obstaclesDown.push(new ObstaclesDown(c.width,c.height,random2));
}
function draw(){
  fps++;
  ball.show();
  ball.gravity();
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        ball.move();
    }
  }
    if(fps == 30){
    var random = Math.random()*220+1;
    var random1 = Math.random()*220+1;
      obstaclesUp.push(new ObstaclesUp(c.width,random));
      obstaclesDown.push(new ObstaclesDown(c.width,c.height,random1));
    fps = 0;
  }
  for(var i = obstaclesUp.length-1 ; i>0 ; i--){
    obstaclesUp[i].create();
    obstaclesUp[i].move(obstaclesUp,i);
    obstaclesUp[i].collision(ball.ballYs());
    obstaclesUp[i].score();
}
for(var i = obstaclesDown.length-1 ; i>0 ; i--){
  obstaclesDown[i].create();
  obstaclesDown[i].move(obstaclesDown,i);
  obstaclesDown[i].collision(ball.ballYs(),c.height);

}

  window.requestAnimationFrame(draw)
}
