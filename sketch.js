
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, ground, stone, boy, boyimg;
var mango1, mango2, mango3, mango4, mango5;
var mango6, mango7, launcher;

function preload() {
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(775, 375, 425, 300);
	ground = new Ground(500, 595, 1000, 10);
	boy = Bodies.rectangle(250, 515, 175, 300);
	stone = new Stone(190, 440, 50, 50);
	mango1 = new Mango(800, 300, 45, 50);
	mango2 = new Mango(750, 275, 50, 55);
	mango3 = new Mango(825, 250, 50, 55);
	mango4 = new Mango(700, 300, 60, 65);
	mango5 = new Mango(650, 250, 50, 50);
	mango6 = new Mango(875, 300, 50, 50);
	mango7 = new Mango(800, 200, 50, 50);
	launcher = new Launcher(stone.body, {x: 200, y: 450});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  stroke(0, 120, 220);
  fill(0, 120, 220);
  textSize(20);
  text("Press Space To Try Again!", 450, 50);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcher.display();
  imageMode(CENTER);
  image(boyimg, boy.position.x, boy.position.y, 175, 300);
  stone.display();
  detectCollision(mango1, stone);
  detectCollision(mango2, stone);
  detectCollision(mango3, stone);
  detectCollision(mango4, stone);
  detectCollision(mango5, stone);
  detectCollision(mango6, stone);
  detectCollision(mango7, stone);
    
  drawSprites();
}
function mouseDragged() {
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased() {
	launcher.fly();
}
function detectCollision(lmango, lstone) {
	var MangoPosition = lmango.body.position;
	var StonePosition = lstone.body.position;
	var Distance = dist(StonePosition.x, StonePosition.y, MangoPosition.x, MangoPosition.y);
	if(Distance <= lmango.radius + lstone.diameter) {
		Body.setStatic(lmango.body, false);
	}
}
function keyPressed() {
	if(keyCode === 32 ) {
		Body.setPosition(stone.body, {x: 190, y: 440});
		launcher.attach(stone.body);
	}
}


