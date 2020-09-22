
var car,car1,car2,wall;
var speed,weight;
//var deformation;


function setup() {
  
  //creating canvas
  createCanvas(1600,800);
  
  //random to speed and weight
  speed = random(10,50);
  weight = random(40,150);
  deformation = 0.5 * weight * speed * speed
  //road stripes // frist line
  rd = createSprite(300,150,70,30)
  rd2 = createSprite(600,150,70,30)
  rd3 = createSprite(900,150,70,30)
  rd4 = createSprite(1200,150,70,30)
  //second line
  rd5 = createSprite(300,400,70,30)
  rd6 = createSprite(600,400,70,30)
  rd7 = createSprite(900,400,70,30)
  rd8 = createSprite(1200,400,70,30)
  //third line
  rd9 = createSprite(300,650,70,30)
  rd10 = createSprite(600,650,70,30)
  rd11 = createSprite(900,650,70,30)
  rd12 = createSprite(1200,650,70,30)
  //road stripe color
  rd.shapeColor = "yellow";
  rd2.shapeColor = "yellow";
  rd3.shapeColor = "yellow";
  rd4.shapeColor = "yellow";
  rd5.shapeColor = "yellow";
  rd6.shapeColor = "yellow";
  rd7.shapeColor = "yellow";
  rd8.shapeColor = "yellow";
  rd9.shapeColor = "yellow";
  rd10.shapeColor = "yellow";
  rd11.shapeColor = "yellow";
  rd12.shapeColor = "yellow";
  
  // car
  car = createSprite(60,150,60,60);
  car1 = createSprite(60,400,60,60);
  car2 = createSprite(60,650,60,60);

  //walls
  wall = createSprite(0,270,16000,30);
  wall2 = createSprite(0,550,16000,30);



  // color to wall
  wall.shapeColor = "white";
  wall2.shapeColor = "white";
  //car color
  car.shapeColor = "blue";
  //car.shapeColor = color(230,230,0);
  car1.shapeColor = "blue";
  car2.shapeColor = "blue";

  //car velocity
  car.velocityX = speed;
  car1.velocityX = speed;
  car2.velocityX = speed;
}

function draw() {
  background("black");  
  drawSprites();


if(car.x>1600)
{
car.x = 0; 
}
if(car2.x>1600)
{
car2.x = 0; 
}
if(car1.x>1600)
{
car1.x = 0; 
}

if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX = speed;
car1.velocityX = speed;
car2.velocityX = speed;

var deformation = 0.5 * weight * speed * speed
if (deformation>180)
{
car.shapeColor = color(255,0,0);
car1.shapeColor = color(255,0,0);
car2.shapeColor = color(255,0,0);
}
if(deformation<180 && deformation > 100)
{
car.shapeColor = color(230,230,0);
car1.shapeColor = color(230,230,0);
car2.shapeColor = color(230,230,0);
}
if(deformation<100)
{
car.shapeColor = color(0,255,0);
car1.shapeColor = color(0,255,0);
car2.shapeColor = color(0,255,0);
}






}



}
    
    
    
    
    
