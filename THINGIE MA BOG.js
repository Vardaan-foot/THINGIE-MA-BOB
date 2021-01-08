var fixedBlock,MovingBlock




function setup() {
  createCanvas(1200,800);
  fixedBlock=createSprite(400, 200, 50, 50);
  fixedBlock.shapeColor="Red"
  MovingBlock=createSprite(600, 200, 50, 50);
  MovingBlock.shapeColor="Red"
MovingBlock.velocityX=-4
fixedBlock.velocityX=4
}

function draw() {
  background(0);  
  
//MovingBlock.x=mouseX
//MovingBlock.y=mouseY

if(MovingBlock.x-fixedBlock.x<MovingBlock.width/2+fixedBlock.width/2
  &&fixedBlock.x-MovingBlock.x<MovingBlock.width/2+fixedBlock.width/2
  &&MovingBlock.y-fixedBlock.y<MovingBlock.height/2+fixedBlock.height/2
  &&fixedBlock.y-MovingBlock.y<MovingBlock.height/2+fixedBlock.height/2){
  MovingBlock.shapeColor="Green"
  fixedBlock.shapeColor="green"
  

}

if(MovingBlock.x-fixedBlock.x<MovingBlock.width/2+fixedBlock.width/2
  &&fixedBlock.x-MovingBlock.x<MovingBlock.width/2+fixedBlock.width/2){
 MovingBlock.velocityX=MovingBlock.velocityX*(-1)
 fixedBlock.velocityX=fixedBlock.velocityX*(-1)

}


if(MovingBlock.y-fixedBlock.y<MovingBlock.height/2+fixedBlock.height/2
  &&fixedBlock.y-MovingBlock.y<MovingBlock.height/2+fixedBlock.height/2){

    MovingBlock.velocityY=MovingBlock.velocityY*(-1)
    fixedBlock.velocityY=fixedBlock.velocityY*(-1)



}

  drawSprites();





}