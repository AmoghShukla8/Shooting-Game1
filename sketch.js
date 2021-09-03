var player, playerImg, enemy, enemyImg, bg, bgImg, bullet, bulletImg
var bulletGroup;

function preload(){
bgImg = loadImage("bgImage.jpg");
playerImg = loadAnimation("run/1.png","run/2.png","run/3.png","run/4.png","run/5.png","run/6.png","run/7.png","run/8.png","run/9.png","run/10.png")
playerShot = loadAnimation("shot/1.png","shot/2.png","shot/3.png","shot/4.png","shot/5.png","shot/6.png","shot/7.png")
}

function setup() {
  createCanvas(800,600);
  bg = createSprite(400,200) 
  bg.addImage(bgImg)
  bg.scale = 1.2
  
  ground = createSprite(400,460,800,40)
  ground.shapeColor = "grey"
  
  player = createSprite(200, 380, 50, 50)
  player.shapeColor = "green"
  // player.addAnimation("playerRun", playerImg)
  // player.addAnimation("playerShot",   playerShot)

  enemy = createSprite(width,380,50,50)
  enemy.velocityX = -3
  enemy.shapeColor = "orange"
  // create A ground sprite
 
  
  player.scale = 0.35
 
 
  bulletGroup=createGroup()
}

// https://opengameart.org/sites/default/files/Soldier-Guy-PNG.zip

function draw() {
  background(255,255,255);  
  // controls
  // up arrow
  if(keyDown("up")){
      player.y -= 7
  }
    // down arrow
  if(keyDown("down")){
    player.y += 7
}
 // left 
if(keyDown("left")){
  player.x -= 7
}

  // right
if(keyDown("right")){
  player.x += 7
}
  // junp

  // destroy enemy
  if (bulletGroup.isTouching(enemy)  ){
    enemy.destroy()
  }
  
  if(keyDown("space")){ 
    player.addAnimation("playerShot", playerShot)
    bullet = createSprite(player.x, player.y,10,10)
    bullet.shapeColor = "black"
    bullet.velocityX = 20
    bulletGroup.add(bullet)
  }else{
    player.addAnimation("playerRun", playerImg)
  }


  drawSprites();
}
