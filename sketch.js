var fixedRect,movingRect;
var gameObject1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1 = createSprite(500,200,50,50);
  gameObject1.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
} else {
  movingRect.shapeColor="green";
 gameObject1.shapeColor="green";
}

  drawSprites();
}

