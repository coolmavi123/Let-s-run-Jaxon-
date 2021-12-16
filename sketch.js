var track, invisibleTrack,invisibleTrack, trackImage;
var jake, jake_running;
function preload(){
  //pre-load images
  jake_running= loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  trackImage=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //create a jake sprite
  jake= createSprite(180,340,30,30);
  jake.addAnimation("running", jake_running);
  jake.scale=0.5;
  //Moving background
  track=createSprite(200,200,400,20);
  track.addImage("track",trackImage);
  track.velocityY=4;
  track.scale=1.2;
  track.y=height/2;
    invisibleTrack=createSprite(33,400,20,800);
    invisibleTrack.visible=false;
    invisibleTrack=createSprite(370,40,20,800);
    invisibleTrack.visible=false; 
  

}

function draw() {
  console.log(jake.x);
  if (track.y>400){
    track.y=height/2;
  }
  if(keyDown("MouseX")){
    jake.velocityX=-10;
    //jake.velocityX= 10;

  }
  jake.collide(invisibleTrack);
  background(0);
  drawSprites();

}
