
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var sand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	ground = new Ground(300,695,1000,10);
	hammer = new Hammer(200,200,100,30);
	stone = new Stone(200,600,100,100);
	rubber = new Rubber(360,600,20);
	sand1 = new Sand(400,600,5);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("lightblue");
  drawSprites();
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
}