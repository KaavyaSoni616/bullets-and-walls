var zenia;
var tourus
var cyclab;
var wall1;
var wall2;
function setup() {
  createCanvas(400,400);
 zenia = createSprite(100, 100, 50, 50);
 zenia.shapeColor = "black";
 zenia.velocityX = 6;

  wall1 = createSprite(50, 250, 10, 400);
  wall1.shapeColor = "black";

  wall2 = createSprite(400,200,30,400);
  wall2.shapeColor = "black";

 tourus = createSprite(200, 300, 50, 50);
 tourus.shapeColor = "black";
 tourus.velocityX = 5;

 cyclab = createSprite(300, 400, 50, 50);
 cyclab.shapeColor = "black";
 cyclab.velocityX = 4;
}

function draw() {
  background(255,255,255);
  
  if(isTouching(zenia, wall2)){
  zenia.shapeColor = "red";
  }
 
  if(isTouching(tourus, wall2)){
    tourus.shapeColor = "red";
    }
   
    if(isTouching(cyclab, wall2)){
      cyclab.shapeColor = "red";
      }
    
  drawSprites();
}