const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground,ground2;

function preload() {
  bg = loadImage("11968192-terreno-en-pendiente-en-el-fondo-los-árboles-soleado-día-de-otoño.webp ");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 400000, 20);
  ground2 = new Ground(1700,400,40,9000000)

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1500,10,222);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
      Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }
  function keyPressed() {
       rope.attach(hero.body);
       World.add(world, this.body);
    }

 
