class Stone {
    constructor(x, y, diameter){
        this.diameter = diameter;
        this.body = Bodies.circle(x, y, (diameter/2)-5, {isStatic:false, density:0.5});
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    } 
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.diameter, this.diameter);
        pop();
    }
}