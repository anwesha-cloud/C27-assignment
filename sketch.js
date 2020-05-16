const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall;
var pendulum;
var gr;
var chain;



function setup() {
  var Canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

 wall = new Wall(400,20,250,20)
 pendulum= new Pendulum(100,100,50);
 gr= new Ground(400,380,800,10)
 chain=new Chain(wall.body,pendulum.body)

}

function draw() {
  background(0);  
  Engine.update(engine);
  strokeWeight(4);

  wall.display();
  pendulum.display();
  gr.display();
  chain.display();
  

}