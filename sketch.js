const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var monkey;

var sline;

var orb;

var bouncepad;

var monkey3Image;
var monkey4Image;
var monkey5Image;
var monkey6Image;
var monkey7Image;
var monkey8Image;

var treeImage;

function preload(){
    monkey3Image = loadImage("images/3.png");
    monkey4Image = loadImage("images/4.png");
    monkey5Image = loadImage("images/5.png");
    monkey6Image = loadImage("images/6.png");
    monkey7Image = loadImage("images/7.png");
    monkey8Image = loadImage("images/8.png");

    treeImage = loadImage("images/Cartoon_Forest_BG_03.png")
}

function setup(){
    createCanvas(1200,600);

 engine = Engine.create();
 world = engine.world;
}

function draw(){
    background(treeImage);
    Engine.update(engine);

}






















