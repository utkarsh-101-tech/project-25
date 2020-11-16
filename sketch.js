
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3;
var ground;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);

	engine = Engine.create();
	world = engine.world;

	
	push();

	
    pop();

    
	//Create the Bodies Here.
    side1 = new Dustbin(1500,590,25,150);
	side2 = new Dustbin(1300,590,25,150);
	side3 = new Dustbin(1400,653,175,25);

	ball1 = new Ball(350,350,70);

    ground = Bodies.rectangle(width/2, 675, 1600, 10 , {isStatic:true} );
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
	background(250);

  fill("yellow");  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,1600,20);
 
  console.log(side1.height)

  side1.display();
side2.display();
side3.display();
ball1.display();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:1120,y:-1100})
	}
}
