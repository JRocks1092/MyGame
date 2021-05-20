const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState;

function preload() {
    
    

}

function setup() {

    var canvas = createCanvas(10000, 10000);
    engine = Engine.create();
    world = engine.world;

    game = new Game();
    game.createGameObjects();       
    game.start();
}

function draw() {    
    Engine.update(engine);

    game.gameManager();
    
    game.form.display();      
}
function keyPressed() {

}