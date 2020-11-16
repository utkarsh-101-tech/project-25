class Ball{
      constructor(x,y,radius){
            var ballOptions = {
                  isStatic:false,
                  restitution:0.3,
                  friction:0.5,
                  density: 1.2
            }
            this.body = Bodies.circle(x,y,radius,ballOptions)
             this.radius=radius;
             this.image= loadImage("paper.png")
            
            World.add(world,this.body)
       
         
      }
      display(){
    var pos =this.body.position;
    
    push();
   // fill(255);
    translate(pos.x,pos.y);
    //ellipseMode(CENTER);
   // ellipse(0, 0, this.radius);
    imageMode(CENTER);
    image(this.image, 0, 0 ,170,170);
    pop();
  }
       
};