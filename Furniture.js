var Furniture = function(x,y,w,h){
    this.x=x;
    this.y=y;

    this.w=w;
    this.h=h;
}
Furniture.prototype.couch = function(){
    strokeWeight(2);
    stroke("black");
    //main seat

    rect(this.x,this.y,170,170,10);
    //left arm rest
    rect(this.x+70,this.y+30,60,130,10);
        //right arm rest
        rect(this.x-70,this.y+30,60,130,10);
            //back rest
    rect(this.x,this.y-50,150,70,10);
    noFill();
    noStroke();
};
Furniture.prototype.carpet = function(){
    rect(this.x,this.y,this.w,this.h,10);
    noFill();
    strokeWeight(5);
    stroke("white");
    rect(this.x,this.y,this.w/1.5,this.h/1.5);
    rect(this.x,this.y,this.w/2.5,this.h/2.5);

};
Furniture.prototype.bed = function(){
    rect(this.x,this.y,this.w,this.h,10);
    fill("white");
    stroke("")
    rect(this.x-(this.w/4),this.y+(this.h/3),150,80,20);
    rect(this.x+(this.w/4),this.y+(this.h/3),150,80,20);

}