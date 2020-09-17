class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true          
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, (width/2)-100, (height/2)-150, options);
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.width);
        pop();
    }
}