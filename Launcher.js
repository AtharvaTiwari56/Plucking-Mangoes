class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004
        }
        this.pointB = pointB;
        this.launcher = Matter.Constraint.create(options);
        World.add(world, this.launcher);
    }
    display() {
      if(this.launcher.bodyA) {  
        var PointA = this.launcher.bodyA.position;
        var PointB = this.pointB;
        strokeWeight(10);
        stroke("fuchsia");
        line(PointA.x, PointA.y, PointB.x, PointB.y);
     }
    }
    fly() {
        this.launcher.bodyA = null;
    }
    attach(object) {
        this.launcher.bodyA = object;
    }
}