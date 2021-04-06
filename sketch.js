var house1, house2, house3, house4;
var p1, p2, p3, p4, p5, p6, p7, p8;

function setup() {
  createCanvas(800,400);
 house1 = createSprite(100, 50, 200, 100);
 house1.shapeColor = "white";
 house2 = createSprite(700, 50, 200, 100);
 house2.shapeColor = "white";
 house3 = createSprite(100, 350, 200, 100);
 house3.shapeColor = "white";
 house4 = createSprite(700, 350, 200, 100);
 house4.shapeColor = "white";
 p1 = createSprite(80, 50, 20, 20);
 p1.shapeColor = "green";
 p2 = createSprite(130, 50, 20, 20);
 p2.shapeColor = "green";
 p3 = createSprite(680, 50, 20, 20);
 p3.shapeColor = "green";
 p4 = createSprite(730, 50, 20, 20);
 p4.shapeColor = "green";
 p5 = createSprite(80, 350, 20, 20);
 p5.shapeColor = "green";
 p6 = createSprite(130, 350, 20, 20);
 p6.shapeColor = "green";
 p7 = createSprite(680, 350, 20, 20);
 p7.shapeColor = "green";
 p8 = createSprite(730, 350, 20, 20);
 p8.shapeColor = "green";
}
function draw() {
  background(0);  
  drawSprites();
}