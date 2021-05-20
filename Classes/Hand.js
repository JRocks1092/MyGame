class Hand{

    constructor(x, y){

        var options = { 
            
            'isNonColliding' : false,
            //'isStatic':true            
        
        }

        this.body = Bodies.rectangle(x, y, 10, 32.5, options);
        this.handImage = loadImage("Images/CharacterStartHand.png");
        this.height = 130;
        this.width = 20;
        this.angle;
        this.body.collisionFilter.group = -1;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        this.angle = this.body.angle;


        push();

        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(this.angle-90);
        image(this.handImage, 0, 32.5, this.width, this.height);
        /*rectMode(CENTER);
        rect(0, 0, 10, 65);*/

        pop();

    }

}