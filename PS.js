var Particle = function(position, velocity) {
  this.acceleration = createVector(0, 0.01);
  this.velocity = createVector(random(-0.8, 0.8), random(-0.8, 0.8));
  this.velocity.limit(velocity);
  this.position = position.copy();
  this.timeToLive = 255;
};

Particle.prototype.run = function() {
this.update();
this.display();
};
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.velocity.mult(this.timeToLive / 255 * 0.1 + 0.9);
  this.position.add(this.velocity);
  this.timeToLive -= 1;
};

Particle.prototype.display = function() {
stroke(255, 255, 255,this.timeToLive);
fill(210, 210, 255, this.timeToLive);
ellipse(this.position.x, this.position.y, 15,15);
};

Particle.prototype.isDead = function() {
if (this.timeToLive < 0) {
    return true;
} else {
    return false;
}
};