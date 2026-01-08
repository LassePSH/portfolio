(function () {
  const steps = document.querySelectorAll(".step");
  const vis = document.getElementById("vis"); // your LP.png will be here

  if (!steps.length || !vis) return;

  const scroller = scrollama();

  function handleStepEnter(response) {
    const step = response.element.dataset.step;

    switch (step) {
      case "1":
        vis.style.opacity = 0;
        vis.style.transform = "translateY(50px) scale(1)";
        break;
      case "2":
        vis.src = "/images/LP.png";
        vis.style.opacity = 1;
        vis.style.transform = "translateY(0px) scale(1)";
        break;
      case "3":
        vis.style.opacity = 1;
        vis.style.transform = "translateY(-30px) scale(1.05)";
        break;
      case "4":
        vis.style.opacity = 0;
        vis.style.transform = "translateY(-50px) scale(0.9)";
        break;
    }
  }

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  window.addEventListener("resize", () => scroller.resize());
})();
