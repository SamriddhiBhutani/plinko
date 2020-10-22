class Particle{
    constructor(x,y){
        var options = {
            restitution: 0.4,
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS);
        fill (this.color)
        ellipse(0,0,this.radius,this.radius);
        pop ()
    }
}