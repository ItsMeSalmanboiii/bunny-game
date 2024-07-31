const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world;
var ball, rope, ground, fruit, fruit_con;
var bgImage, food, rabbit, bunny, button


function preload(){
  bgImage=loadImage("images/background.png")
  food=loadImage("images/melon.png")
  rabbit=loadImage("images/Rabbit-01.png")
}

function setup(){
  createCanvas(500,700);
  frameRate(80)
  engine = Engine.create();
  world = engine.world;
bunny=createSprite(250,650,100,100)
bunny.addImage("Rabbit-01.png",rabbit )
bunny.scale=0.2 
button=createImg("cut_btn.png")
button.position(20,30)
button.size(50,50)
button.mouseClicked(drop)



  ground= new Ground(200,690,600,20);
  //ball = new Ball(200, 200, 80, 80);
  rope = new Rope(7, { x: 245, y: 30 });
  fruit = Bodies.circle(300,300,20)
  Matter.Composite.add(rope.body,fruit)
  fruit_con=new Link(rope,fruit)

rectMode(CENTER)
ellipseMode(RADIUS)

 
}

/*function mouseDragged (){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}*/



function draw(){
  background(51);
  image(bgImage,0,0,displayWidth+80,displayHeight);
  Engine.update(engine)
  ground.show();
  rope.show();
  //ball.display();
  fruit_con.show();
  addImage(food,fruit.position.x,fruit.position.y,60,60)

ellipse(fruit.position.x,fruit.position.y,15,15)

  drawSprites();
  }

  function drop(){
rope.break()
fruit_con.detach()
  fruit_con=null
  }