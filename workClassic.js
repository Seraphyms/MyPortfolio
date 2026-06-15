let targetScroll = window.scrollY;
let currentScroll = window.scrollY;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

window.addEventListener("wheel", (e) => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  targetScroll += e.deltaY;
  targetScroll = clamp(targetScroll, 0, maxScroll);
});

function animate() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  targetScroll = clamp(targetScroll, 0, maxScroll);

  currentScroll += (targetScroll - currentScroll) * 0.1;

  window.scrollTo(0, currentScroll);

  requestAnimationFrame(animate);
}

animate();