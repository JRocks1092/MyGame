class Game {

    constructor() {

        this.form = new Form();         
    }

    createGameObjects() {

        this.player = new Player(600, 100, 10);        
        this.p1 = new Platform(875, 800, 1750);        
    }

    start() {

        this.gameState = 0;
    }

    gameManager(){

        if(gameState === 1){

            this.play();
        }
    }

    display() {

        background(255, 255, 255);        
        
        this.p1.display();       
        this.player.display();
        
        
        console.log(this.player.body.position.y);
        
    }
    play() {
        /*
        if(!this.player.x-displayWidth/2 < 0){

            camera.position.x = this.player.body.position.x;

        }

        if(!this.player.y-displayHeight/2 < 0){

            camera.position.y = this.player.body.position.y;

        }*/

        
        
        
        this.player.move();
        this.display();
        this.player.rotateArm();

    }

}