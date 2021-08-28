var scissImg, sciss;
var rockImg, rock;
var paperImg, paper;
var inv;

function preload()
{
  scissImg = loadImage("Scissors.png");
  rockImg = loadImage("Rock.png");
  paperImg = loadImage("Paper.png");
}
function setup() {
  createCanvas(400, 400);
  inv = createSprite();
  //invSprite.visible = false;
  
}

function draw() {
  background(220);
  
  /*if(keyDown(UP_ARROW))
    {
     invSprite.addAnimation("Scissors",scissImg); 
     invSprite.changeAnimation("Scissors"); 
    }
  if(keyDown(DOWN_ARROW))
    {
      invSprite.addAnimation("Rock", rockImg);
      invSprite.changeAnimation("Rock");
    }
  if(keyDown(LEFT_ARROW))
    {
      invSprite.addAnimation("Paper", paperImg);
      invSprite.changeAnimation("Paper");
    }*/
  
  drawSprites();
  
  
  
}