var ball,blower,blowerMouth
var button
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball = new Ball(500,100,80,80);
  blower = new Blower(430,60,100,30);
  blowerMouth = new BlowerMouth(490,60,60,60)

  button = createButton("click to blow")
  button.position(width/2,height-100)
  button.class("blowButton")
  button.mousePressed(blow)
  
}

function draw() {
  background(255,255,255);  
  ball.show()
  blower.show()
  blowerMouth.show()
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}