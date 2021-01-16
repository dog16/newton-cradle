const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bobDiameter1 = 40;
	bobDiameter2 = 40;
    bobDiameter3 = 40;
    bobDiameter4 = 40;
    bobDiameter5 = 40;


	bob1 = new Bob(200,600,80);
	bob2 = new Bob(280,600,80);
	bob3 = new Bob(360,600,80);
	bob4 = new Bob(440,600,80);
	bob5 = new Bob(520,600,80);

	roof = new Roof(360,100,400,20);

	rope1 = new Rope(bob1.body,roof.body, -150,0)
	rope2 = new Rope(bob2.body,roof.body, -bobDiameter2*2,0)
	rope3 = new Rope(bob3.body,roof.body, 0,0)
	rope4 = new Rope(bob4.body,roof.body, bobDiameter4*2,0)
	rope5 = new Rope(bob5.body,roof.body, 150,0)

}


function draw() {
  background(250);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:0.1,y:-1});
	  
	  
	}
	}

