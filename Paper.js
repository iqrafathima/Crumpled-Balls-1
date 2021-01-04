class Paper {
  constructor(x,y,width,height){
    var options = {
       isStatic : false,
       'restitution':0.3,
       'friction':0.5,
       'density':1.2
    }
    this.body = Bodies.circles(x,y,radius,options);
    this.radius = radius


    World.add(world,this.body);
  }

display(){
  epilseMode(RADIUS)

  fill("cyan");

  circle(this.body.position.x, this.body.position.y, this.radius);
  }



}