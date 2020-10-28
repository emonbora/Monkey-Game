
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  score = 0
  bananaGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
  background("white");
 // console.log(monkey.y)
  if(keyDown("space")&&monkey.y>=235){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY+ 0.8
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnBanana();
  spawnObstacle()
 
  
  monkey.collide(ground);
  drawSprites();
   if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0
    monkey.velocityY = 0
    obstacleGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    console.log(banana.velocityX)
    obstacleGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
  }
  score = Math.ceil(frameCount/frameRate())
  text("survivaltime : "+score,100,50)
}
function spawnBanana(){
 if(frameCount % 80 === 0){
   banana = createSprite(600,250,40,10);
   banana.y = Math.round(random(120, 200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
   bananaGroup.add(banana)
   banana.lifetime = 300
 } 
}
function spawnObstacle(){
  if(frameCount % 300 ===0){
    obstacle = createSprite(800,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX=-3;
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 300
  }
}






