const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;

var particles = [];
var divisionHeight = 300;
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,595,1000,20)

  div1 = new Divisions(10,500,10,200);
  div2 = new Divisions(100,500,10,200);
  div3 = new Divisions(200,500,10,200);
  div4 = new Divisions(300,500,10,200);
  div5 = new Divisions(400,500,10,200);
  div6 = new Divisions(500,500,10,200);
  div7 = new Divisions(600,500,10,200);
  div8 = new Divisions(700,500,10,200);
  div9 = new Divisions(790,500,10,200);

  plinko1 = new Plinko(50,50);
  plinko2 = new Plinko(100,50);
  plinko3 = new Plinko(150,50);
  plinko4 = new Plinko(200,50);
  plinko5 = new Plinko(250,50);
  plinko6 = new Plinko(300,50);
  plinko7 = new Plinko(350,50);
  plinko8 = new Plinko(400,50);
  plinko9 = new Plinko(450,50);
  plinko10 = new Plinko(500,50);
  plinko11 = new Plinko(550,50);
  plinko12 = new Plinko(600,50);
  plinko13 = new Plinko(650,50);  
  plinko14 = new Plinko(700,50); 
  plinko15 = new Plinko(750,50); 

  plinko16 = new Plinko(75,100); 
  plinko17 = new Plinko(125,100); 
  plinko18 = new Plinko(175,100); 
  plinko19 = new Plinko(225,100); 
  plinko20 = new Plinko(275,100); 
  plinko21 = new Plinko(325,100); 
  plinko22 = new Plinko(375,100); 
  plinko23 = new Plinko(425,100); 
  plinko24 = new Plinko(475,100); 
  plinko25 = new Plinko(525,100); 
  plinko26 = new Plinko(575,100); 
  plinko27 = new Plinko(625,100); 
  plinko28 = new Plinko(675,100);
  plinko29 = new Plinko(725,100);

  plinko30 = new Plinko(50,150);
  plinko31 = new Plinko(100,150);
  plinko32 = new Plinko(150,150);
  plinko33 = new Plinko(200,150);
  plinko34 = new Plinko(250,150);
  plinko35 = new Plinko(300,150);
  plinko36 = new Plinko(350,150);
  plinko37 = new Plinko(400,150);
  plinko38 = new Plinko(450,150);
  plinko39 = new Plinko(500,150);
  plinko40 = new Plinko(550,150);
  plinko41 = new Plinko(600,150);
  plinko42 = new Plinko(650,150);  
  plinko43 = new Plinko(700,150); 
  plinko44 = new Plinko(750,150); 

  plinko45 = new Plinko(75,200); 
  plinko46 = new Plinko(125,200); 
  plinko47 = new Plinko(175,200); 
  plinko48 = new Plinko(225,200); 
  plinko49 = new Plinko(275,200); 
  plinko50 = new Plinko(325,200); 
  plinko51 = new Plinko(375,200); 
  plinko52 = new Plinko(425,200); 
  plinko53 = new Plinko(475,200); 
  plinko54 = new Plinko(525,200); 
  plinko55 = new Plinko(575,200); 
  plinko56 = new Plinko(625,200); 
  plinko57 = new Plinko(675,200);
  plinko58 = new Plinko(725,200);

  plinko59 = new Plinko(50,250);
  plinko60 = new Plinko(100,250);
  plinko61 = new Plinko(150,250);
  plinko62 = new Plinko(200,250);
  plinko63 = new Plinko(250,250);
  plinko64 = new Plinko(300,250);
  plinko65 = new Plinko(350,250);
  plinko66 = new Plinko(400,250);
  plinko67 = new Plinko(450,250);
  plinko68 = new Plinko(500,250);
  plinko69 = new Plinko(550,250);
  plinko70 = new Plinko(600,250);
  plinko71 = new Plinko(650,250);  
  plinko72 = new Plinko(700,250); 
  plinko73 = new Plinko(750,250); 
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();
  div9.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();
  plinko54.display();
  plinko55.display();
  plinko56.display();
  plinko57.display();
  plinko58.display();
  plinko59.display();
  plinko60.display();
  plinko61.display();
  plinko62.display();
  plinko63.display();
  plinko64.display();
  plinko65.display();
  plinko66.display();
  plinko67.display();
  plinko68.display();
  plinko69.display();
  plinko70.display();
  plinko71.display();
  plinko72.display();
  plinko73.display();
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-50, width/2+50),10)) 
  }
    for (var j = 0; j < particles.length; j++) {
   particles[j].display();
    }  
        
  drawSprites();
}