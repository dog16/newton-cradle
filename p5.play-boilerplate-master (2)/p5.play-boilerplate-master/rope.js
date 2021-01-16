class Rope {

    constructor (body1,body2, offsetX, offsetY){
    
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
    bodyA : body1,
    bodyB : body2,
    pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    display (){
    var posA = this.rope.bodyA.position
    var posB = this.rope.bodyB.position

    var Point1X = posA.x 
    var Point1Y = posA.y 

    var Point2X = posB.x+ this.offsetX
    var Point2Y = posB.y+ this.offsetY
    strokeWeight(4);
    line(Point1X,Point1Y,Point2X,Point2Y);
    }
    }