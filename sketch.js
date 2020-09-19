var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200, 200, 50, 50);
  rect1.shapeColor = "green";
  rect1.velocityX = 3;
  rect2 = createSprite(600, 200, 100, 50);
  rect2.shapeColor = "green";
  rect2.velocityX = -4;
}

function draw() {
  background(0);  

  if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2) {
    rect1.velocityX = rect1.velocityX * (-1);  
    rect2.velocityX = rect1.velocityX * (-1);
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  if (rect1.y - rect1.y < rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2) {
    rect1.velocityY = rect1.velocityY * (-1);
    rect2.velocityY = rect2.velocityY * (-1);
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }

  drawSprites();
}