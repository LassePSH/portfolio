// assets/js/scrolly.js

(function () {
  // Exit early if no scrolly steps on the page
  const steps = document.querySelectorAll(".step");
  if (!steps.length) return;

  // Initialize scrollama
  const scroller = scrollama();

  function handleStepEnter(response) {
    const step = response.element.dataset.step;
    updateGraphic(step);
  }

  function handleResize() {
    scroller.resize();
  }

  function updateGraphic(step) {
    // 🔁 Replace this switch with real logic later
    switch (step) {
      case "1":
        console.log("Step 1 entered");
        break;
      case "2":
        console.log("Step 2 entered");
        break;
      default:
        console.log("Step", step);
    }
  }

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  window.addEventListener("resize", handleResize);
})();
