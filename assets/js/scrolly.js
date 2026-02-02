document.addEventListener("DOMContentLoaded", () => {
  const vis = document.getElementById("vis");
  const steps = document.querySelectorAll(".step");

  if (!vis || steps.length === 0) return;

  // Show the first image immediately so the graphic panel isn't empty
  const firstImg = steps[0].dataset.img;
  if (firstImg) {
    vis.src = firstImg;
    vis.classList.add("is-visible");
  }

  let currentSrc = firstImg || "";

  const scroller = scrollama();

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: false
    })
    .onStepEnter((response) => {
      const el = response.element;
      const img = el.dataset.img;

      // Mark active step
      steps.forEach((s) => s.classList.remove("is-active"));
      el.classList.add("is-active");

      // Crossfade to new image if it changed
      if (img && img !== currentSrc) {
        vis.classList.remove("is-visible");

        // Wait for fade-out, then swap source and fade in
        setTimeout(() => {
          vis.src = img;
          vis.onload = () => {
            vis.classList.add("is-visible");
          };
          // Fallback in case onload already fired (cached image)
          if (vis.complete) {
            vis.classList.add("is-visible");
          }
        }, 300);

        currentSrc = img;
      } else {
        // Same image, ensure it's visible
        vis.classList.add("is-visible");
      }
    })
    .onStepExit((response) => {
      response.element.classList.remove("is-active");
    });

  // Handle resize
  window.addEventListener("resize", scroller.resize);
});
