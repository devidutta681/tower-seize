class slingshot{
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:15
        }
    this.sling = Constraint.create(options)
    this.pointB = pointB
    World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body
    }
    display(){
        if(this.sling.bodyA !== null){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push()
            
        }
    }
}