class Slingshot {
   constructor(bA,bB){
    var options={
        bodyA:bA,
        pointB:bB,
        stiffness:1.5,
      length:60
    
        }
        this.pointB=bB
        this.slingshot=Constraint.create(options)
        World.add(world,this.slingshot)

   }
fly(){
this.slingshot.bodyA=null
}
 display(){
 if(this.slingshot.bodyA){


 
    line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y)
    
 }
 }



}