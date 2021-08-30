class Ball {
    constructor(x, y, r) {
  
      this.body = Bodies.ellipse(x, y, r);
      this.r = r
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      fill("white");
      ellipseMode(CENTER);
      ellipse(0, 0, this.w, this.h);
      noStroke();
      pop();
    }
  }