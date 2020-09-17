class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, (radius-20)/2, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        //ellipse( 0,0, this.radius, this.radius);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}