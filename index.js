const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    // Activer la scène de crash
    document.body.classList.add("crash-mode");

    // Petit flash pour tension
    setTimeout(() => {
        document.body.classList.add("flash");
    }, 200);

    // Apparition du crash
    setTimeout(() => {
        document.body.classList.remove("flash");
        document.body.classList.add("crash-active");
    }, 800);

    // Écran noir total après le crash
    setTimeout(() => {
        document.body.classList.add("blackout");
    }, 2000);

    // Redirection finale
    setTimeout(() => {
        window.location.href = "home.html";
    }, 4000);
});