document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll(".step");
  const vis = document.getElementById("vis");
  if (!steps.length || !vis) return;

  const scroller = scrollama();

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: true
    })
    .onStepEnter(response => {
      const step = response.element;
      const anim = step.dataset.anim;
      const img = step.dataset.img;

      // Set image dynamically
      if (img) vis.src = img;

      // Apply animation
      if (anim) {
        anim.split(";").forEach(pair => {
          const [key, value] = pair.split(":");
          switch(key) {
            case "opacity":
              vis.style.opacity = value;
              break;
            case "translateY":
              // Preserve scale from previous transform
              const scaleMatch = vis.style.transform.match(/scale\([^)]+\)/);
              const scaleVal = scaleMatch ? scaleMatch[0] : "scale(1)";
              vis.style.transform = `translateY(${value}px) ${scaleVal}`;
              break;
            case "scale":
              const translateMatch = vis.style.transform.match(/translateY\([^)]+\)/);
              const translateVal = translateMatch ? translateMatch[0] : "translateY(0px)";
              vis.style.transform = `${translateVal} scale(${value})`;
              break;
          }
        });
      }
    });

  window.addEventListener("resize", () => scroller.resize());
});
