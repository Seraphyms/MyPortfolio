/*const workButton = document.getElementById("work-button");

const notification = document.getElementById("notification-section");

const closeButton = document.querySelector(".close-btn");

workButton.addEventListener("click", () => {
    notification.classList.remove("hidden");
});
console.log("workButton:", workButton);

closeButton.addEventListener("click", () => {
    notification.classList.add("hidden");
});*/


const workButton = document.getElementById("work-button");
const notification = document.getElementById("notification-section");
const closeButton = document.querySelector(".close-btn");

console.log({ workButton, notification, closeButton });

if (workButton && notification) {
    workButton.addEventListener("click", () => {
        notification.classList.remove("hidden");
    });
}

if (closeButton && notification) {
    closeButton.addEventListener("click", () => {
        notification.classList.add("hidden");
    });
}