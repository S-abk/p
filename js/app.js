// Initialize particles.js with the given configuration for particles
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

// Initialize particles.js with the given configuration for worms
particlesJS("worms-js", {
  "particles": {
    "number": {
      "value": 10, // Number of worms
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00FF00" // Green worms
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 10, // Size of the worms
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 50,
      "color": "#00FF00",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});
