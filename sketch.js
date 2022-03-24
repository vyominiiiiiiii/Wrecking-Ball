const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, ground;
var cart, rope;


function  preload(){
  bgImg = loadImage("images/shop-bg.png");
  boyImg = loadImage("images/boy.png");
  cartImg = loadImage("images/cart.png");
}


function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 390, 1800, 20);
  Matter.Body.setStatic(ground.body,true);

  cart = new Ball(100,370,80);

  boy = new Box(200, 230, 70, 180);
  rope = new Rope(boy.body, cart.body);

}

function draw() {
  background("grey");
  Engine.update(engine);
  ground.display();
  cart.display();
  boy.display();

 }


function keyPressed() {
  if(keyCode === RIGHT_ARROW)
  Matter.Body.setPosition(boy.body, { x: boy.body.position.x+50, y: boy.body.position.y });

  if(keyCode == LEFT_ARROW)
  Matter.Body.setPosition(boy.body, { x: boy.body.position.x-50, y: boy.body.position.y });

}

