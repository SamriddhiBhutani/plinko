const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;

var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  var ground = createSprite(500,595,1000,20)

  for(a=0; a<=width; a=a+=80){
    division.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight))
  }
 
  for(var b=40; b<=width; b=b+50){
    plinkos.push(new Plinko(b,75))
  }

  for(var b = 15; b<=width; b=b+50){
    plinkos.push(new Plinko(b,175))
  }
  
  for(var b=40; b<=width; b=b+50){
    plinkos.push(new Plinko(b,275))
  }

  for(var b=15; b<=width; b=b+50){
    plinkos.push(new Plinko(b,375))
  }

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10))
  }
  division[a].display();
  plinkos[b].display();
  drawSprites();
}