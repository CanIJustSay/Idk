class Boy {
constructor(x,y){
    this.x=x;
    this.y=y;
    this.scarelevel=0;
    //this.count =0;
}
display(){
    fill("white");
   this.y--;
   if(this.y<=30){this.y=30; this.x--;}
   if(this.x<=-856){this.x=-856;}
 
console.log(this.scarelevel);
}
breaking(){ 
      fill("white");
    {

if(dist(this.x,this.y,500,54)<=250&&noScare===false){
this.scarelevel+=50;
      }  
if(dist(this.x,this.y,-417,76)<=250&&noScare===false){
  this.scarelevel+=50;
      } 
if(dist(this.x,this.y,-533,76)<=250&&noScare===false){
      this.scarelevel+=50;
      } 
if(dist(this.x,this.y,-673,76)<=250&&noScare===false){
          this.scarelevel+=50;
      } 
       
if(this.scarelevel>=200){this.scarelevel=200;fill("red");}
    rect(this.x,this.y,60,60);


  }
}
}