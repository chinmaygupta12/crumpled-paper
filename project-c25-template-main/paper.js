class paper{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.2,
            friction:0,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
       key(){
        if (keyCode === UP_ARROW){
          Matter.Body.applyForce(papr.body,papr.body.position,{x:3,y:-3})
        }
        
    }
  
  }