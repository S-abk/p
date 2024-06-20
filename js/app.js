let particles = [];
let worm;

function setup() {
  createCanvas(windowWidth, windowHeight);
  worm = new Worm();
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (worm.eat(particles[i])) {
      particles.splice(i, 1);
      particles.push(new Particle(random(width), random(height)));
    }
  }

  worm.update();
  worm.show();
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.r = 4;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(255, 165, 0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

class Worm {
  constructor() {
    this.body = [];
    this.body.push(createVector(width / 2, height / 2));
    this.len = 1;
    this.size = 20;
  }

  update() {
    let head = this.body[0].copy();
    let newHead = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(newHead, head);
    dir.setMag(this.size);
    head.add(dir);
    this.body.unshift(head);

    if (this.body.length > this.len) {
      this.body.pop();
    }
  }

  show() {
    fill(255, 0, 0);
    for (let i = 0; i < this.body.length; i++) {
      ellipse(this.body[i].x, this.body[i].y, this.size, this.size);
    }
  }

  eat(particle) {
    let head = this.body[0];
    let d = dist(head.x, head.y, particle.pos.x, particle.pos.y);
    if (d < this.size / 2 + particle.r) {
      this.len++;
      return true;
    }
    return false;
  }
}
