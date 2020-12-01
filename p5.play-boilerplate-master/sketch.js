var bullet, wall, speed, weight, deformation, thickness;





function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  bullet = createSprite(50, 200,30, 20);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2)
  speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  wall.shapeColor = color(80, 80, 80)
  bullet.velocityX = speed;
  isCollided();
  
}
function isCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){

    return true

  }
  return false
 if(hasCollided(bullet, wall)){

  var damage = 0.5 * weight * speed *speed/(thickness * thickness* thickness);
  
  if(damage>10){
    wall.shapeColor = color(255, 0, 0);
  }

  if(damage<10){
    wall.shapeColor=color(0, 255, 0);
  }
 }




}