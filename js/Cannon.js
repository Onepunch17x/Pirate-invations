class Cannon{


constructor(x,y,width,height,angle){

    this.height=height
    this.width=width
   
    this.x=x
    this.y=y
    this.angle=angle

}
display(){
    fill ("#676e6a")
    push ()
    translate(this.x,this.y)
    rotate(this.angle)
rect(-10,-20,this.width,this.height);
pop ()
arc(this.x-30,this.y+90,180,230,PI,TWO_PI)
   
}
}