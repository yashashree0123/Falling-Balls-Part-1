const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var enigne, world ;

var particle1, particle2, particle3, particle4, particle5;
var particle6, particle7, particle8, particle9, particle10;
var rotator1, rotator2, rotator3;
var block1, block2;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
  var canvas = createCanvas(550,600);
  engine = Engine.create();
  world = enigne.world;

  //create plane and block bodies 
  var plane_options={
    isStatic: true
  }

plane = Bodies.rectangle(600,height,1200,20,plane_options);
World.add(world,plane);
block1=Bodies.rectangle(100,400,150,20,plane_options);
World.add(world,block1);
block2=Bodies.rectangle(400,400,150,20,plane_options);
World.add(world.block2);

//created multiple of particle bodies 
var particle_options= {
  restitution:0.4,
  friction:0.02
}

particle1= Bodies.circle(220,10,10,particle_options);
World.add(world,particle1);
particle2= Bodies.circle(220,10,10,particle_options);
World.add(world,particle2);
particle3= Bodies.circle(225,10,10,particle_options);
World.add(world,particle3);
particle4= Bodies.circle(230,10,10,particle_options);
World.add(world,particle4);
particle5= Bodies.circle(230,10,10,particle_options);
World.add(world,particle5);


//creat all three rotater bodies
var rotater_options={
  isStatic:true
};

rotator1 = Bodies.rectangle(250,200,150,20,rotater_options);
World.add(world,rotator1);

rotator2 = Bodies.rectangle(250,200,150,20,rotater_options);
World.add(world,rotator2);

rotator3 = Bodies.rectangle(250,200,150,20,rotater_options);
World.add(world,rotator3);

//styling the bodies here
fill("dark blue");
rectMode(CENTER);
ellipseMode(RADIUS);

}