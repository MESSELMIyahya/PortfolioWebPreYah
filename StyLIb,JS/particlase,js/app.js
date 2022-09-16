/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 190,
        "density": {
          "enable": true,
          "value_area": 900
        }
      },
      "color": {
        "value": "#f2c45b"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#00000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 60,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable":true,
        "distance": 100,
        "color": "#f8d878",
        "opacity": 0.8,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight":false ,
        "out_mode": "out",
        "attract": {
          "enable":false,
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
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 80,
          "duration": 2,
          "opacity": 8,
          "speed": 4
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);