var car;
var speed;
var wall;
var weigth;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="red";
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor="white";

}

function draw() {
  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deferm=0.5*weight*speed*speed/22500
    if (deferm>180){
      car.shapeColor="yellow";
    }
    if(deferm<180 && deferm>80){
      car.shapeColor="green";
    }
    if(deferm<80){
      car.shapeColor="orange";
    }
  }
  
  drawSprites();
}