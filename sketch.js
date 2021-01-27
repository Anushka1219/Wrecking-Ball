const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var ball, sling;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    b1 = new Box(700,380,50,50);
    b2 = new Box(750,380,50,50);
    b3 = new Box(800,380,50,50);
    b4 = new Box(700,330,50,50);
    b5 = new Box(750,330,50,50);
    b6 = new Box(800,330,50,50);
    b7 = new Box(700,280,50,50);
    b8 = new Box(750,280,50,50);
    b9 = new Box(800,280,50,50); 
    b10 = new Box(700,230,50,50);
    b11 = new Box(750,230,50,50);
    b12 = new Box(800,230,50,50); 
    b13 = new Box(700,180,50,50);
    b14 = new Box(750,180,50,50);
    b15 = new Box(800,180,50,50); 
    ball = new Ball(500,300,50);
    sling=new SlingShot(ball.body,{x:500,y:80})
    
    
    
}

function draw(){
    background(mouseX,mouseY,120);
    Engine.update(engine)
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    ball.display();
    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}




