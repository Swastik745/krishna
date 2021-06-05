class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 9;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,1500), y:random(0,700)})
        }
    }

    showDrop(){
        fill(228,7,168)
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}