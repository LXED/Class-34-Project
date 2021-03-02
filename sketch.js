const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImage;


function preload() {
//preload the images here
backImage = loadImage("GamingBackground.png");





}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
engine = Engine.create();
world = engine.world

block1 = new Block(600,400,40,40);
block2 = new Block(600,360,40,40);
block3 = new Block(600,310,40,40);
block4 = new Block(600,270,40,40);
block5 = new Block(600,220,40,40);
block6 = new Block(600,180,40,40);
block7 = new Block(600,140,40,40);
block8 = new Block(600,100,40,40);

block1a = new Block(650,400,40,40);
block2a = new Block(650,360,40,40);
block3a = new Block(650,310,40,40);
block4a = new Block(650,270,40,40);
block5a = new Block(650,220,40,40);
block6a = new Block(650,180,40,40);
block7a = new Block(650,140,40,40);
block8a = new Block(650,100,40,40);

block1aa = new Block(700,400,40,40);
block2aa = new Block(700,360,40,40);
block3aa = new Block(700,310,40,40);
block4aa = new Block(700,270,40,40);
block5aa = new Block(700,220,40,40);
block6aa = new Block(700,180,40,40);
block7aa = new Block(700,140,40,40);
block8aa = new Block(700,100,40,40);

Ground1 = new ground(750,600,650,10);

Hero = new hero(310,170,300,200);

Fly = new fly(Hero.body, {x:310,y:170})

Alien = new Monster(1000,500,200,200);




}

function draw() {
  
  background(backImage);
  Engine.update(engine);

  Ground1.display();
  Hero.display();
  
  Alien.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block1a.display();
  block2a.display();
  block3a.display();
  block4a.display();
  block5a.display();
  block6a.display();
  block7a.display();
  block8a.display();

  block1aa.display();
  block2aa.display();
  block3aa.display();
  block4aa.display();
  block5aa.display();
  block6aa.display();
  block7aa.display();
  block8aa.display();

  
  


  

}

function mouseDragged(){
Matter.Body.setPosition(Hero.body, {x: mouseX, y: mouseY});
}

