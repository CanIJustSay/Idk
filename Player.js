var Player = function(x,y){
    this.x = x;
    this.y = y;
};
Player.prototype.draw = function(){
    
  noStroke();
  push();
           translate(this.x,this.y);
             noiseDetail(4, 0.5);
          for (var i = 0, d = 50; i <= 1; i += 1/30, d = 70 + pow(i, 1.5) * 400 - noise(frameCount / 16) * 30) {
              fill(255, 6 - i * 5);
              ellipse(0, 0, d, d);
          }
          noiseDetail(3, 0.5);
          noFill();
          strokeWeight(8);
          stroke(255, 200);
          for (var i = -1; i <= 1; i += 2 / 6) {
              beginShape();
              for (var j = 0;
                j < 85 + cos(i * 40) * 17 - noise(i) * 20;
                j += 8) {
                    
  vertex(
      i * (j / 4 + 8) +           
      (noise(i * 2,
          j / 40 -                  
          1 / 300 - 
          frameCount/100          
      ) - 0.4) * j - (ghostVel.x) /70 / 
      75 * j * j,j - j / 3 * (ghostVel.y) /70 - abs(i) * 2 + 2  // y
  );
              }
              endShape();
          }
     
         strokeWeight(12);
          stroke(255, 225);
          if(direction==="up"||direction==="down"){
          line(16, -2, 20, 16);
          line(-16, -2, -20, 16);
  
          }
          // Head
          noStroke();
          fill(255, 225);
          ellipse(0, -25, 50, 50);
          fill(179, 179, 179);
          if(direction==="down"){
                       strokeWeight(2);
              stroke(9, 0, 255,70);
          ellipse(10,-20,10,10);
   ellipse(-10,-20,10,10);
   noStroke();
          }
          if(direction==="left"){
                       strokeWeight(2);
               stroke(9, 0, 255,70);
              ellipse(-10,-20,10,10);
              noStroke();
          }
  
          if(direction==="right"){
              strokeWeight(2);
                stroke(9, 0, 255,70);
              ellipse(10,-20,10,10);
              noStroke();
          }
          pop();
};