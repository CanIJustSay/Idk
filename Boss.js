var Boss = function(x,y){
    this.x=x;
    this.y=y;
}
Boss.prototype.draw = function(){
noStroke();
push();
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
    ) - 0.4) * j - (0) /70 / 
    75 * j * j,j - j / 3 * (0) /70 - abs(i) * 2 + 2  // y
);
            }
            endShape();
        }
    };