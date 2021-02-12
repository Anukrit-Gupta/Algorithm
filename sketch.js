var fixedRect,movingRect;
var object1,object2;

function setup() {
  createCanvas(1600,800);
  fixedRect = createSprite(800,400,50,80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  object1 = createSprite(400,200,50,50);
  object2 = createSprite(600,200,50,50);
  object1.shapeColor = "green";
  object2.shapeColor = "green";

  //fixedRect.debug=true;
  //movingRect.debug=true;
}

function draw() {
  background(0);  
 
 movingRect.x=mouseX;
 movingRect.y=mouseY;

  if(isTouching(fixedRect,movingRect)) {
    fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

  }
  else {
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }
 drawSprites();
 
}


