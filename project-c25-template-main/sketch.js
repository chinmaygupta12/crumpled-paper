
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	papr = new paper(510,100,30,30) 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  fill("black")
  textSize(20)
  text("press up and then down",800,350)
 
    if(keyCode=== DOWN_ARROW){
      Matter.Body.applyForce(papr.body,papr.body.position,{x:0,y:0})
    }
  

  groundObject.display();
  dustbinObj.display();
  papr.display();
  papr.key();
}


