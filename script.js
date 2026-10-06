document.addEventListener("DOMContentLoaded", () => {
    let currentState = 0; // Keeps current position within the story
    let chosenPath = 0; // Stores the user's chosen path
    const welcomeReference = document.getElementById("welcome-screen");

    renderQuestion()
    function renderQuestion() {
        if (currentState == 0) {
            document.getElementById("start-btn").addEventListener("click", () => {
                welcomeReference.classList.add("hidden");

                currentState++;
                renderQuestion();
            });
        } else {
            addAnswerButtons();
        }
    }

    function addAnswerButtons() {

        // Clearing previous buttons
        document.getElementById("answers").innerHTML = "";


        if (currentState == 1) {
            document.getElementById("context").textContent = "Welcome to the Career Path Selector! Please choose a path to explore:";

            // Button 1 for Full Stack path.
            const newButton = document.createElement("button");
            newButton.textContent = "Full Stack";
            newButton.addEventListener("click", () => {
                currentState++;
                chosenPath = 1; // Represents the Full Stack path
                renderQuestion();
            });
            document.getElementById("answers").appendChild(newButton);

            // Button 2 for Data Analyst path.
            const newButtonTwo = document.createElement("button");
            newButtonTwo.textContent = "Data Analyst";
            newButtonTwo.addEventListener("click", () => {
                currentState++;
                chosenPath = 2; // Represents the Data Analyst path
                renderQuestion();
            });
            document.getElementById("answers").appendChild(newButtonTwo);

            // Button 3 for DevOps path.
            const newButtonThree = document.createElement("button");
            newButtonThree.textContent = "DevOps";
            newButtonThree.addEventListener("click", () => {
                currentState++;
                chosenPath = 3; // Represents the DevOps path
                renderQuestion();
            });
            document.getElementById("answers").appendChild(newButtonThree);

        } else if (currentState == 2 && chosenPath == 1) {
            document.getElementById("context").textContent = "You have selected Full Stack!";
        } else if (currentState == 2 && chosenPath == 2) {
            document.getElementById("context").textContent = "You have selected Data Analyst!";
        } else if (currentState == 2 && chosenPath == 3) {
            document.getElementById("context").textContent = "You have selected DevOps!";
        }
    }
});