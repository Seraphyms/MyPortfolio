const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    // Remplacement du contenu
    document.body.innerHTML = `
        <div class="container creepy">
            <button class="glitch" data-text="I see you">I see you</button>
        </div>

        <div id="crash">
            <h1>FATAL ERROR</h1>
            <p>System failure detected</p>
        </div>
    `;

    // 💥 Crash après 2s
    setTimeout(() => {
        document.body.classList.add("crash-active");
        document.getElementById("crash").classList.add("active");
    }, 2000);

    // 🕳️ Écran noir
    setTimeout(() => {
        document.body.innerHTML = "";
        document.body.style.background = "black";
    }, 5000);

    // 🔁 Redirection finale
    setTimeout(() => {
        window.location.href = "home.html";
    }, 6000);
});