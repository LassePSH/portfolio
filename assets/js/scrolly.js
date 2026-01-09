document.addEventListener("DOMContentLoaded", () => {
  const vis = document.getElementById("vis");
  const steps = document.querySelectorAll(".step");

  if (!vis || steps.length === 0) return;

  const scroller = scrollama();

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: true // set false when done
    })
    .onStepEnter((response) => {
      const el = response.element;
      const img = el.dataset.img;

      // change image if defined
      if (img) {
        vis.src = img;
      }

      // simple animation: fade in when entering
      vis.style.opacity = 1;
      vis.style.transform = "translateY(0) scale(1)";
    })
    .onStepExit((response) => {
      // hide on leave
      vis.style.opacity = 0;
      vis.style.transform = "translateY(50px) scale(1)";
    });
});