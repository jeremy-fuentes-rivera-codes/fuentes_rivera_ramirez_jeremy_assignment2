document.addEventListener("DOMContentLoaded", () => {
    currentState = 0; // Keeps current position within the story
    welcomeReference = document.getElementById("welcome-screen");

    document.getElementById("start-btn").addEventListener("click", () => {
        welcomeReference.classList.add("hidden");
    });

    function renderQuestion() {
        if (currentState == 0) {
            referenceOne.classList.remove("hidden");
        }
    }
});