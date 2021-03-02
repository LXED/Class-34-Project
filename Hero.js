class hero{

    constructor(x,y,width,height){
     var options = {
    frictionAir:0.005,
     density: 1.0
     }
    
     this.body = Bodies.rectangle(x,y,width,height,options)
     this.width = width
     this.height = height
     this.image = loadImage("Superhero-01.png");
    
     World.add(world, this.body);
    }
    
    display(){
    
    var pos = this.body.position
    var angle = this.body.angle
    

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("white");
    image(this.image,-100,-100,this.width,this.height);
    pop()
    }

    }