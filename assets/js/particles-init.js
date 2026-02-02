/* Initialize particles.js on the homepage */
particlesJS("particles-js", {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 800 } },
    color: { value: "#999999" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#999999",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.6 } }
    }
  },
  retina_detect: true
});
