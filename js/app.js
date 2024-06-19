// Initialize particles.js with the given configuration
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 800, // Adjusted number for visibility
        "density": {
          "enable": true, // Enable density to control particle spread
          "value_area": 800 // Area over which particles are spread
        }
      },
      "color": {
        "value": "#FFA500" // Single warm color for simplicity
      },
      "shape": {
        "type": "circle", // Single shape for simplicity
        "stroke": {
          "width": 0, // No border around particles
          "color": "#000000" // Color of the border if width > 0
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
        "value": 4, // Base size of particles
        "random": true, // Randomize size
        "anim": {
          "enable": true, // Enable size animation
          "speed": 4, // Speed of size animation
          "size_min": 0.1, // Minimum size value during animation
          "sync": false // Do not synchronize size animation
        }
      },
      "line_linked": {
        "enable": true, // Enable lines between particles
        "distance": 150, // Maximum distance for lines to be drawn
        "color": "#FFD700", // Color of lines (warm golden)
        "opacity": 0.4, // Opacity of lines
        "width": 2 // Width of lines
      },
      "move": {
        "enable": true, // Enable particle movement
        "speed": 2, // Speed of particle movement
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
          "enable": true, // Enable interaction on hover
          "mode": "repulse" // Repulse particles from cursor
        },
        "onclick": {
          "enable": true, // Enable interaction on click
          "mode": "push" // Push particles on click
        },
        "resize": true // Adjust particles on window resize
      },
      "modes": {
        "grab": {
          "distance": 140, // Distance for grab effect
          "line_linked": {
            "opacity": 1 // Opacity of lines when particles are grabbed
          }
        },
        "bubble": {
          "distance": 400, // Distance for bubble effect
          "size": 40, // Size of bubbles
          "duration": 2, // Duration of bubble effect
          "opacity": 8, // Opacity of bubbles
          "speed": 2 // Speed of bubble effect
        },
        "repulse": {
          "distance": 200, // Distance for repulse effect
          "duration": 0.4 // Duration of repulse effect
        },
        "push": {
          "particles_nb": 4 // Number of particles added on click
        },
        "remove": {
          "particles_nb": 2 // Number of particles removed on click
        },
        "attract": {
          "distance": 200, // Distance for attract effect
          "duration": 0.4 // Duration of attract effect
        }
      }
    },
    "retina_detect": true // Enable retina display support
  });
  