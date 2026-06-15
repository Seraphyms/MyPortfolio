const wworkButton = document.getElementById("wwork-btn")
const workButton = document.getElementById("work-btn");
const notification = document.getElementById("notification-section");
const closeButton = document.querySelector(".close-btn");

console.log({ workButton, notification, closeButton });

if (workButton && notification){
    workButton.addEventListener("click", () => {
        notification.classList.remove("hidden");
    });
}

if(wworkButton && notification){
    wworkButton.addEventListener("click", () => {
        notification.classList.remove("hidden");
    });
}

if (closeButton && notification) {
    closeButton.addEventListener("click", () => {
        notification.classList.add("hidden");
    });
}

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