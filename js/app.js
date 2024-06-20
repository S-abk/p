// Initialize particles.js with the given configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160, // Adjusted number for visibility
      "density": {
        "enable": true, // Enable density to control particle spread
        "value_area": 800 // Area over which particles are spread
      }
    },
    "color": {
      "value": "#FFA500" // Single warm color for simplicity
    },
    "shape": {
      "type": ["circle", "polygon", "triangle"], // Include polygon shapes
      "stroke": {
        "width": 0, // No border around particles
        "color": "#000000" // Color of the border if width > 0
      },
      "polygon": {
        "nb_sides": 16 // Number of sides for the polygon shape
      }
    },
    "opacity": {
      "value": 0.6, // Base opacity of particles
      "random": true, // Randomize opacity
      "anim": {
        "enable": true, // Enable opacity animation
        "speed": 1, // Speed of opacity animation
        "opacity_min": 0.1, // Minimum opacity value during animation
        "sync": false // Do not synchronize opacity animation
      }
    },
    "size": {
      "value": 3, // Base size of particles
      "random": true, // Randomize size
      "anim": {
        "enable": true, // Enable size animation
        "speed": 3, // Speed of size animation
        "size_min": 0.1, // Minimum size value during animation
        "sync": false // Do not synchronize size animation
      }
    },
    "line_linked": {
      "enable": false, // Disable lines between particles
    },
    "move": {
      "enable": true, // Enable particle movement
      "speed": 1, // Speed of particle movement
      "direction": "none", // Random direction
      "random": true, // Randomize movement direction
      "straight": false, // Particles do not move in straight lines
      "out_mode": "out", // Particles disappear when they reach the edge
      "bounce": false, // Particles do not bounce off edges
      "attract": {
        "enable": false, // Disable attraction effect
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas", // Interactivity detected on canvas
    "events": {
      "onhover": {
        "enable": false, // Disable interaction on hover
      },
      "onclick": {
        "enable": false, // Disable interaction on click
      },
      "resize": true // Adjust particles on window resize
    }
  },
  "retina_detect": true // Enable retina display support
});

// Create worm object
class Worm {
  constructor() {
    this.segments = [{x: 100, y: 100}]; // Initial position
    this.direction = {x: 1, y: 0}; // Initial direction
    this.speed = 4; // Worm speed, increased for visibility
    this.size = 20; // Size of worm segments, increased for visibility
  }

  // Update worm position
  update() {
    // Move worm head
    let head = {
      x: this.segments[0].x + this.direction.x * this.speed,
      y: this.segments[0].y + this.direction.y * this.speed
    };

    // Ensure the worm stays within the canvas
    head.x = (head.x + canvas.width) % canvas.width;
    head.y = (head.y + canvas.height) % canvas.height;

    this.segments.unshift(head);

    // Remove tail segment if the worm is too long
    if (this.segments.length > 20) {
      this.segments.pop();
    }
  }

  // Draw worm
  draw(ctx) {
    console.log("Drawing worm at segments:", this.segments); // Debugging log
    ctx.fillStyle = 'red'; // Red color for the worm
    for (let segment of this.segments) {
      ctx.fillRect(segment.x, segment.y, this.size, this.size); // Size of worm segments
    }
  }

  // Change direction
  changeDirection(newDirection) {
    this.direction = newDirection;
  }

  // Grow worm
  grow() {
    let tail = this.segments[this.segments.length - 1];
    this.segments.push({x: tail.x, y: tail.y});
  }

  // Move towards the nearest particle
  moveToNearestParticle(particles) {
    if (particles.length === 0) return;

    let head = this.segments[0];
    let nearestParticle = particles[0];
    let minDist = Math.sqrt((head.x - nearestParticle.x) ** 2 + (head.y - nearestParticle.y) ** 2);

    for (let particle of particles) {
      let dist = Math.sqrt((head.x - particle.x) ** 2 + (head.y - particle.y) ** 2);
      if (dist < minDist) {
        minDist = dist;
        nearestParticle = particle;
      }
    }

    let dx = nearestParticle.x - head.x;
    let dy = nearestParticle.y - head.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      this.direction = {x: dx > 0 ? 1 : -1, y: 0};
    } else {
      this.direction = {x: 0, y: dy > 0 ? 1 : -1};
    }
  }
}

// Initialize canvas and worm
let canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '10'; // Ensure the canvas is on top
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let worm = new Worm();

// Main animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
    window.pJSDom[0].pJS.fn.particlesDraw();
  }

  // Update and draw worm
  worm.update();
  worm.draw(ctx);

  // Move worm towards nearest particle
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && window.pJSDom[0].pJS.particles) {
    worm.moveToNearestParticle(window.pJSDom[0].pJS.particles.array);
  }

  // Check for collisions with particles
  let particlesArray = window.pJSDom[0].pJS.particles.array;
  for (let i = particlesArray.length - 1; i >= 0; i--) {
    let particle = particlesArray[i];
    let dx = worm.segments[0].x - particle.x;
    let dy = worm.segments[0].y - particle.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < worm.size / 2) { // Collision detected
      particlesArray.splice(i, 1); // Remove particle
      worm.grow(); // Grow worm
    }
  }

  requestAnimationFrame(animate);
}

// Start the animation
animate();
