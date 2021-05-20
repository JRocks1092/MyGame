class Player {

    constructor(x, y) {

        var options = {

            //'isStatic':true

        }

        this.body = Bodies.rectangle(x, y, 20, 130, options);  
        this.hand = new Hand(x , y-30);              
        this.image = loadImage("Images/Character1.png");              
        this.width = 20;
        this.height = 130; 
        this.body.collisionFilter.group = -1;

        
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;

        push();
                
        imageMode(CENTER);
        
        image(this.image, 0,0, 20, 130); 
        //rectMode(CENTER);
        //rect(30, 0, this.width, this.height);
        //console.log(this.image);                                       
        pop();
        
        this.hand.display();        
    }

    rotateArm(){

        this.hand.body.position.x = this.body.position.x;
        this.hand.body.position.y = this.body.position.y -30;

        var slope = (this.hand.body.position.y-mouseY)/(mouseX-this.hand.body.position.x);       
        var angleRadian = Math.atan(slope);
        var angleDegree  = -angleRadian*180/PI;
        //angleDegree-=90;

        Matter.Body.setAngle(this.hand.body, angleDegree);        
    }

    move() {
        if (keyDown(RIGHT_ARROW)) {
            this.moveBody(this.body, 1, "horizontal");
        }

        if (keyDown(LEFT_ARROW)) {
            this.moveBody(this.body, -1, "horizontal");
        }

        if (keyDown(UP_ARROW)) {
            this.moveBody(this.body, -1, "vertical");
        }
    }

    moveBody(body, value, direction) {

        if (direction === "horizontal") {

            body.position.x += value;

        }
        else if (direction === "vertical") {

            body.position.y += value;

        }

    }

}