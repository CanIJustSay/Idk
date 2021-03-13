/** IDEAS:
 * Create database to store coins and other customizations
 * Create a streetwalkers you can possess to add more fun
 * In the daylight you can upgrade your ghost, speed and scare level etc.
 * For breaking toilets, maybe make is so you can overflow it, or break water pipes, causing water to go everywhere
Basic concepts:
 * Add a scare level for each of the NPCs
 * Add randomness to each of the movements
 * If knocking, use a switch case maybe(???) for whoever goes to the door
Doesn't Work:
 * noScare and brokeTimer doesn't work.
 */
//house data
var boy = new Boy(594,511);
var ghost = new Player(500,500);
var k =[];
var particles = [];
var x = 200;
var y = 200;
var reachedDoor = false;
var gameState = "nothingBroke";
var direction= "down";
var knockTimer = 200;
var isOvenBroke = false;
var isFridgeBroke = false;
var isSinkBroke = false;
var isFridgeBroke = false;
var isToiletBroke = false;
var isCarpetBroke = false;
var boyScareLvl = 0;
var noScare = true;
var brokeTimer = 201;


function isTouching(obj1, obj2) {
   
  return  obj1.x - obj2.x < obj2.w &&
      obj2.x - obj1.x < obj1.w &&
      obj1.y - obj2.y < obj2.h &&
      obj2.y - obj1.y < obj1.h;
}
//camera stuff
{
  var Camera = function() {
      this.x = 0;
      this.y = 0;
      this.xfocus = 0;
      this.yfocus = 0;
      
      Camera.prototype.focus = function(value, axis) {
          return -(value-axis/2);
      };
      Camera.prototype.follow = function(value,find,cushion) {
          value += (find-value)/cushion;
          return value;
      };
  };
  Camera.prototype.setView = function(x, y, lag) {
      this.xfocus = this.focus(x, width);
      this.yfocus = this.focus(y, height);
      this.x = this.follow(this.x, this.xfocus, lag);
      this.y = this.follow(this.y, this.yfocus, lag);
      push();
      translate(this.x, this.y);
  };
  Camera.prototype.endView = function() {
      pop();
  };
} 
var cam = new Camera;
  //controls
{

  
  keyPressed = function(){
      k[keyCode]=true;
  };
  keyReleased = function(){
      k[keyCode]=false;
  };
}
 
function setup() {
  createCanvas(windowWidth,windowHeight);
ghostVel = createVector(5,5);

}


function draw(){
  {
      var Bluecouch = new Furniture(-600,600);
var Bed = new Furniture(585,560,300,350);
var Bluecouch2 = new Furniture(-600,300);
var Carpet = new Furniture(0,990,200,450);
  }
breakActions();
   background(0, 36, 61); 
   fill("white");
 

  cam.setView(ghost.x,ghost.y,1);
  movements();
  cam.endView;

  //house 1 background
{   
    fill(77, 56, 2);
  rect(14,250,1500,1000);
rect(0,1000,500,500);
}
//couch 1
{
  push();
translate(-1400,350);
rotate(-90);
fill(100,111,135);
Bluecouch.couch();
pop();
}
//bedroom decor
{
  fill(0, 46, 120);
strokeWeight(3);
stroke(255, 255, 255);
Bed.bed();

fill(0, 11, 212);
noStroke();
rect(585,600,298,50,10);
}
{

 fill(189, 187, 108);
 stroke("grey");
 rect(375,-161,220,150,10);
 fill("grey")
 rect(375,-100,220,10,10);

 strokeWeight(3);
stroke("black");
//sink
fill(189,187,108);
rect(670,-170,120,120,10);
strokeWeight(10);
fill("lightgrey");
stroke("grey");
rect(670,-170,70,70,10);
noStroke();
noFill();
}
//couch 2
{
  push();
translate(-550,-320);
rotate(-45);
fill(100,111,135);
Bluecouch2.couch();
noFill();
noStroke();
pop();
}




//house 1 booleans

  // ghost - proximity markers

{

//oven marker
{ 
var oMarker = {x:-530,y:70,w:150,h:150};
if(isOvenBroke===false){
  //oven
{
fill("white");
rect(-530,90,100,100,10);
noStroke();
fill("grey");
ellipse(-550,70,30,30);
ellipse(-510,100,40,40);
fill("black")
rect(-530,135,100,12);
noStroke();
noFill();
}
noFill();
noStroke();
  ellipse(oMarker.x,oMarker.y,oMarker.w,oMarker.h);
} 
 if(dist(ghost.x,ghost.y+20,oMarker.x,oMarker.y)<=(oMarker.w/2)&&isOvenBroke!==true){
    //fill("white");
    //text("Press E to break",ghost.x-200,ghost.y-200);
    if(k[69]){
    isOvenBroke=true;
    }
  }
  if(isOvenBroke===true){
  noStroke();
  push();
  fill("white");
   scale(1.5);
  translate(-380,0);
arc(50,50,40,40,50,1000);
  triangle(70,30,30,30,40,40);
  beginShape();
  vertex(7,46);
  vertex(15,34);
  vertex(23,50);
  vertex(38,58);
  vertex(12,62);
  vertex(07,46);
  endShape();
beginShape();
  vertex(47,71);
  vertex(31,74);
  vertex(46,48);
  vertex(54,66);
endShape();
noFill();
  pop();
  }
}

//fridge marker
{
  var fMarker = {x:-650,y:70,w:150,h:150};
  if(isFridgeBroke===false){
{
//fridge
strokeWeight(3);
fill("white");
rect(-660,90,150,100,10);
noStroke();
fill("grey")
rect(-600,35,19,15,10);
stroke("black");
line(-588,50,-733,50);
noFill();
noStroke();
}
noFill();
noStroke();
ellipse(fMarker.x,fMarker.y,fMarker.w,fMarker.h);
  

  }
  if(dist(ghost.x,ghost.y+20,fMarker.x,fMarker.y)<=(fMarker.w/2)&&isFridgeBroke!==true){
  //text("Press E to break",ghost.x-200,ghost.y-200);
  if(k[69]){ 
     isFridgeBroke = true;
  }
}
if(isFridgeBroke===true){
  {
      noStroke();
  push();
  fill("white");
   scale(1.5);
  translate(-480,0);
arc(50,50,40,40,50,1000);
  triangle(70,30,30,30,40,40);
  beginShape();
  vertex(7,46);
  vertex(15,34);
  vertex(23,50);
  vertex(38,58);
  vertex(12,62);
  vertex(07,46);
  endShape();
beginShape();
  vertex(47,71);
  vertex(31,74);
  vertex(46,48);
  vertex(54,66);
endShape();
noFill();
  pop();
  noStroke();
  strokeWeight(3);
  }

}
}


//sink marker
{

{
  var ksMarker = {x:-420,y:70,w:150,h:150};
  if(isSinkBroke===false){
//sink
{
  fill("white");
rect(-410,80,120,120,10);
strokeWeight(10);
fill("lightgrey");
stroke("grey");
rect(-410,80,70,70,10);
strokeWeight(3);
}

noFill();
noStroke();
ellipse(ksMarker.x,ksMarker.y,ksMarker.w,ksMarker.h);



  }
  if(dist(ghost.x,ghost.y+20,ksMarker.x,ksMarker.y)<=(ksMarker.w/2)&&isSinkBroke!==true){

if(k[69]){
  isSinkBroke = true;
}
}
if(isSinkBroke===true){
  noStroke();
  push();
  fill("white");
   scale(1.5);
  translate(-310,10);
arc(50,50,40,40,50,1000);
  triangle(70,30,30,30,40,40);
  beginShape();
  vertex(7,46);
  vertex(15,34);
  vertex(23,50);
  vertex(38,58);
  vertex(12,62);
  vertex(07,46);
  endShape();
beginShape();
  vertex(47,71);
  vertex(31,74);
  vertex(46,48);
  vertex(54,66);
endShape();
noFill();
  pop();
}
}
}


//toilet marker
{
  var tMarker = {x:680,y:70,w:120,h:120};
  if(isToiletBroke===false){
 //toilet 
{
  strokeWeight(3);
    stroke("black");
  fill("white");
 
 ellipse(670,70,100,70);
 ellipse(670,70,80,50);
 rect(710,70,50,90,10);
}

noFill();
noStroke();
ellipse(tMarker.x,tMarker.y,tMarker.w,tMarker.h);

  }
if(dist(ghost.x,ghost.y+20,tMarker.x,tMarker.y)<=(tMarker.w/2)&&isToiletBroke!==true){
if(k[69]){
  isToiletBroke = true;
    }
  }
if(isToiletBroke===true){
  noStroke();
  push();
  fill("white");
   scale(1.5);
  translate(410,0);
arc(50,50,40,40,50,1000);
  triangle(70,30,30,30,40,40);
  beginShape();
  vertex(7,46);
  vertex(15,34);
  vertex(23,50);
  vertex(38,58);
  vertex(12,62);
  vertex(07,46);
  endShape();
beginShape();
  vertex(47,71);
  vertex(31,74);
  vertex(46,48);
  vertex(54,66);
endShape();
noFill();
  pop();
}
}



//carpet marker
{
  var cMarker = {x:0,y:970,w:400,h:420};
  if(isCarpetBroke===false){
    {
      fill(100, 135, 105);
Carpet.carpet();
  rectMode(CENTER);
    }



noFill();
noStroke();
ellipse(cMarker.x,cMarker.y,cMarker.w,cMarker.h);

 }
if(dist(ghost.x,ghost.y+20,cMarker.x,cMarker.y)<=(cMarker.w/2)&&isCarpetBroke!==true){
if(k[69]){
  isCarpetBroke = true;
    }
  }
  if(isCarpetBroke===true){
{
      stroke(100, 135, 105);
    push();
    translate(0,950);
    scale(1.4);
    
    line(20,20,50,50);
    line(40,40,60,40);
    line(41,3,10,50);
    line(1,0,10,-79);
    line(-20,-20,-20,-74);
    line(-36,12,18,-104);
  
    noFill();
    beginShape();
    vertex(-34,-39);
    vertex(-74,-41);
    vertex(-60,-55);
    vertex(-69,-70);
    vertex(-42,-61);
    vertex(-34,-39);
    endShape();
    
    line(-56,47,-90,29);
    
    beginShape();
    vertex(71-34);
    vertex(21,50)
    endShape();
  
    
    beginShape();
    vertex(-50,93);
    vertex(0,100);
    vertex(0,150);
    vertex(-30,78);
    vertex(-50,93);
    endShape();
    
    line(50,100,50,150);
    
    line(-67,48,14,27);
    pop(); 
}
   
  }
}

}


//door proximity


//NPC - proximity markers
/*
{
boy.y--;
if(boy.y<=-12){boy.y=-12;}
  //bathroom marker
  noFill();
  stroke("white")
  ellipse(500,54,500,500);
if(dist(boy.x,boy.y,500,54)<=250){
  console.log("y");
}
}
*/
//outside pavement stuff.
{
  stroke(89, 94, 102);
  strokeWeight(10);
  fill(142, 153, 171);
  rect(0,1600,300,700);
  noFill();
  fill(142, 153, 171);
  strokeWeight(3);
  rect(0,2000,2500,200)
}

fill(0,0,0,100);
rect(0,0,20000,20000);
ghost.draw();
boy.display();
boy.breaking();
fill("black");
text(ghost.x+","+ghost.y,ghost.x+50,ghost.y+50);
noFill();
//house 1
{
strokeWeight(27);
stroke(107, 74, 22);
line(750,-250,750,750);
line(250,750,750,750);
line(250,750,250,1250);

line(-250,1250,-250,750);
line(-250,750,-750,750);
line(-750,750,-750,-250);
line(-750,-250,750,-250);

line(-250,1250,-150,1250);
line(250,1250,150,1250);
//bar
line(-750,160,-160,160);
//living room/bedroom&bathroom seperater
line(250,378,250,-250);

//bathroom/bedroom seperater
//make doors to br-bd, bd-lr
line(540,140,750,140);

}


//front door proximity
{
{

var FrontDoor = {x:0,y:1200,w:150,h:150};
}
noStroke();
if(dist(ghost.x,ghost.y,FrontDoor.x,FrontDoor.y)<=100){
  
  if(k[69]){
stroke("white");
    }
  }
    //front door
{
    push();
    strokeWeight(3);
//rectMode(CORNER);
fill(117, 90, 14);
rect(0,1250,280,50,10);
pop();
noStroke();
}
}


//bedroom door proximity
{
var BedroomDoor = {x:250,y:555,w:100,h:100};
noStroke();
if(dist(ghost.x,ghost.y,BedroomDoor.x,BedroomDoor.y)<=70){
  if(k[69]){
stroke("white");
  }
}
//bedroom door
{
push();
strokeWeight(3);
fill(117,90,14);
rect(250,555,50,360,10);
pop();

}
  noStroke();
}

//bathroom door proximity
{

var BathroomDoor = {x:403,y:140,w:150,h:150};
noFill();
ellipse(BathroomDoor.x,BathroomDoor.y,BathroomDoor.w,BathroomDoor.h);
noStroke();
if(dist(ghost.x,ghost.y,BathroomDoor.x,BathroomDoor.y)<=100){
  if(k[69]){
stroke("white");
  }
}  
{
    //bathroom door
strokeWeight(3);
fill(117,90,14);
rect(403,140,280,50,10);
noStroke();
}

}

Mov=7;
{
//left most wall
if(ghost.x<=-730&&ghost.x>=-770&&ghost.y<=770&&ghost.y>=-270){Mov=2;}
//right most wall
if(ghost.x>=730&&ghost.x<=770&&ghost.y<=770&&ghost.y>=-270){Mov=2;}
//left,flat, bottom wall
if(ghost.y>=700&&ghost.y<=815&&ghost.x<=-230&&ghost.x>=-800){Mov=2;}
//right,flat, bottom wall
if(ghost.y>=700&&ghost.y<=815&&ghost.x>=230&&ghost.x<=800){Mov=2;}
//left, smaller, straight up wall
if(ghost.x>=-264&&ghost.x<=-230&&ghost.y>=710&&ghost.y<=1260){Mov=2;}
//right,smaller, straight up wall
if(ghost.x>=220&&ghost.x<=280&&ghost.y>=710&&ghost.y<=1260){Mov=2;}
//Flat, top most wall
if(ghost.x>=-750&&ghost.x<=775&&ghost.y>=-300&&ghost.y<=-190){Mov=2;}
//front wall
if(ghost.y<=1324&&ghost.y>=1174&&ghost.x>=-271&&ghost.x<=254){Mov=2;}
//bar
if(ghost.x<=-137&&ghost.x>=-752&&ghost.y>=71&&ghost.y<=219){Mov=2;}
//lr/br&bd seperator
if(ghost.y>=-323&&ghost.y<=731&&ghost.x<=289&&ghost.x>=211){Mov=2;}
//br/bd seperator
if(ghost.x>=231&&ghost.x<=763&&ghost.y>=80&&ghost.y<=200){Mov=2;}
}
//end of draw function 
 }

function movements(){
  ghostVel.mult(0.8);
if(k[87]){  
  ghost.y-=Mov;
  y-=6;
  direction="up";
ghostVel.y-=Mov;
}
if(k[83]){
  ghost.y+=Mov;
y+=6;
direction="down";
ghostVel.y+=Mov;
}
if(k[65]){
  ghost.x-=Mov;
x-=6;
direction="left";
ghostVel.x-=Mov;
}
if(k[68]){
  ghost.x+=Mov;
x+=6;
direction="right";
ghostVel.x+=Mov;
}

}
function breakActions(){
if(isToiletBroke===true){
  brokeTimer--;
}
if(isCarpetBroke===true){
  brokeTimer--;
}
if(isFridgeBroke===true){
  brokeTimer--;
}
if(isSinkBroke===true){
  brokeTimer--;
}
if(isOvenBroke===true){
  brokeTimer--;
}
if(brokeTimer<=0){brokeTimer=0;noScare=true;};
if(brokeTimer<=200&&brokeTimer>0){noScare=false;}

}