var path,boy,coin1,coin2,coin3,bomb1,bomb2 ,bomb3,leftBoundary,rightBoundary;
var pathImage,boyImage,coin1Image,coin2Image,coin3Image,bomb1Image,bomb2Image,bomb3Image, CoinSound,bombSound; 

var count = 0;
var gameState="restart";

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  boyImage=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  coin1Image = loadImage("coin.png");
  coin2Image = loadImage("coin.png");
  coin3Image = loadImage("coin.png");
  bomb1Image = loadImage("bomb.png");
  bomb2Image = loadImage("bomb.png");
  bomb3Image = loadImage("bomb.png");
  CoinSound = loadSound("CoinSound.mp3");
  bombSound = loadSound("bombSound.mp3");
  }

function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale=1.0;
  //create sprites here

  boy = createSprite(200,330,30,30);
  boy.addAnimation("JakeRunning",boyImage);
  boy.scale=0.8;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;

  coin1 = createSprite(300,-100,10,10);
  coin1.addAnimation("coinMoving",coin1Image);
  coin1.scale = 0.3;
  coin1.velocityY=4;

  coin2 = createSprite(200,-1100,10,10);
  coin2.addAnimation("coinMoving",coin2Image);
  coin2.scale = 0.3;
  coin2.velocityY=4;

  coin3 = createSprite(100,-2000,10,10);
  coin3.addAnimation("coinMoving",coin3Image);
  coin3.scale = 0.3;
  coin3.velocityY=4;

  bomb1 = createSprite(100,-1000,10,10);
  bomb1.addAnimation("BombMoving",bomb1Image);
  bomb1.scale = 0.09;
  bomb1.velocityY=4;

  bomb2 = createSprite(200,-1500,10,10);
  bomb2.addAnimation("BombMoving",bomb2Image);
  bomb2.scale = 0.09;
  bomb2.velocityY=4;

  bomb3 = createSprite(300,-2500,10,10);
  bomb3.addAnimation("BombMoving",bomb3Image);
  bomb3.scale = 0.09;
  bomb3.velocityY=4;

  invisibleBoundary1=createSprite(65,200,10,400);
  invisibleBoundary1.visible = false;

  invisibleBoundary2=createSprite(335,200,10,400);
  invisibleBoundary2.visible = false;
}

function draw() {
  background(0);

  path.velocityY = 4;

  boy.x = World.mouseX;

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400 ){
  path.y = height/2;
  }

  if(boy.isTouching(coin1)){
  coin1.x=300;
  coin1.y=-100;
  coin1.velocityY=4;
  count = count+1;
  CoinSound.setVolume(0.8);
  CoinSound.play();
  }

  if(coin1.y>400){
  coin1.x=300;
  coin1.y=-100;
  coin1.velocityY=4;
    }

  if(boy.isTouching(coin2)){
  coin2.x=200;
  coin2.y=-500;
  coin2.velocityY=4;
  count = count+1;
  CoinSound.setVolume(0.8);
  CoinSound.play();
  }

  if(coin2.y>400){
  coin2.x=200;
  coin2.y=-900;
  coin2.velocityY=4;
  }

  if(boy.isTouching(coin3)){
  coin3.x=100;
  coin3.y=-100;
  coin3.velocityY=4;
  count = count+1;
  CoinSound.setVolume(0.8);
  CoinSound.play();
  }

  if(coin3.y>400){
  coin3.x=100;
  coin3.y=-100;
  coin3.velocityY=4;
  }


  if(boy.isTouching(bomb1)||boy.isTouching(bomb2)||boy.isTouching( bomb3)){
  bombSound.setVolume(0.3);
  bombSound.play();
  gameState= "over";
  fill("yellow");
  textSize(15);
  text("Sorry, you lost.Click the play button to play again",50,200);
  stopAll;
  }

  if(keyDown("r")&&gameState==="over"){
  gameState="restart";
  }

  if(bomb1.y>400){
  bomb1.x = 100;
  bomb1.y = -200;
  bomb1.velocityY = 4;
  }

  if(bomb2.y>400){
  bomb2.x = 200;
  bomb2.y = -400;
  bomb2.velocityY = 4;
  }

  if(bomb3.y>400){
  bomb3.x = 300;
  bomb3.y = -600;
  bomb3.velocityY = 4;
  }

  boy.collide(invisibleBoundary1);
  boy.collide(invisibleBoundary2);
  drawSprites();

  text("Coins Collected: "+ count, 5, 10);
}