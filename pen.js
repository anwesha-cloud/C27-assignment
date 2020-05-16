class Pendulum{
    constructor(x,y,r) {
        var options = {
          restitution:0.4,
          density:1.0,
          friction:0.02          
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x, pos.y, this.r,this.r);
      }
    };