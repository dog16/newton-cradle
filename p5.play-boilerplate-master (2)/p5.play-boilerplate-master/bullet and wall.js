var wall, bullet,thickness;
var speed = 1;
var weight = 1;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = false;
  wall.setCollider("circle",10,10,4);

  bullet = createSprite(50, 200,200,10);
  bullet.shapeColor = "white";
  bullet.debug = false;
  bullet.velocityX = 2;
    
  speed = random(223,231);
  weight = random(30,52);
  thickness = random(22,83)

  console.log(bullet.x);
  
}


function draw() {

  background(0,0,255)

  speed = random(55,90);
  weight = random(400,1500);

 if (touching(bullet,wall)) 
 {
  
   bullet.velocityX = 0;
   var damage = 0.5 * speed * speed* weight /(thickness * thickness * thickness)

   if(damage>10)
   {
      wall.shapeColor = "red";
   }
  
    else  (damage<10)
   {

     wall.shapeColor = "green";
   }
   }


  drawSprites();
}

function touching(bullet,wall)
{
   
  if (wall.x-bullet.x < bullet.width - wall.width || bullet.y - wall.y === bullet.width + wall.width)

 {
     return true;}

     else
     {
        return false;
     }
    }
      //bullet.velocityX = speed;
     
