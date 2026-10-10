document.addEventListener("DOMContentLoaded", () => {
    let currentState = 0; // Keeps current position within the story
    let chosenPath = 0; // Stores the user's chosen path
    const welcomeReference = document.getElementById("welcome-screen");
    const startBtn = document.getElementById("start-btn");

    // Starts the game
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            if (welcomeReference) {
                welcomeReference.classList.add("hidden");
            }
            currentState++;
            renderQuestion();
        });
    }

    function renderQuestion() {
        // Clear previous buttons 
        document.getElementById("answers").innerHTML = "";

        if (currentState == 1) {
            document.getElementById("question").textContent = "Welcome to the Career Path Selector! Please choose a path to explore:";

            // Adding buttons
            addAnswerButton("Full Stack", 2, 1);
            addAnswerButton("Data Analyst", 2, 2);
            addAnswerButton("DevOps", 2, 3);

        } else if (currentState == 2 && chosenPath == 1) {
            document.getElementById("question").textContent = "You have selected Full Stack! Two days before a big launch, the checkout page crashes whenever more than 50 users are online. How do you solve it?";
            // Answers will be displayed here

        } else if (currentState == 2 && chosenPath == 2) {
            document.getElementById("question").textContent = "You have selected Data Analyst! The sales dashboard shows numbers that do not match the finance report, and the executives meet tomorrow. How do you solve it?";
            // Answers will be displayed here

        } else if (currentState == 2 && chosenPath == 3) {
            document.getElementById("question").textContent = "You have selected DevOps! At 3 AM the production servers go down and customers cannot log in. How do you solve it?";
            // Answers will be displayed here
        }
    }

    function addAnswerButton(buttonInformation, new_state, newPath) {
        const newButton = document.createElement("button");
        newButton.textContent = buttonInformation;

        newButton.addEventListener("click", () => {
            currentState = new_state;
            chosenPath = newPath;
            renderQuestion();
        });

        document.getElementById("answers").appendChild(newButton);
    }
});