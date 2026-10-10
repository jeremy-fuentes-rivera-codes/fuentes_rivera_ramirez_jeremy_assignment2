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

            // Adding option buttons
            addAnswerButton("Full Stack", 2, 1);
            addAnswerButton("Data Analyst", 2, 2);
            addAnswerButton("DevOps", 2, 3);

        } else if (currentState == 2 && chosenPath == 1) {
            // This shows the full stack path

            document.getElementById("question").textContent = "Two days before a big launch, the checkout page crashes whenever more than 50 users are online. How do you solve it?";

            // Adding option buttons
            addAnswerButton("Optimize the database queries and add caching", 3, 1);
            addAnswerButton("Rewrite the checkout page with a lighter front-end", 3, 2);

        } else if (currentState == 2 && chosenPath == 2) {
            // This shows the data analyst path

            document.getElementById("question").textContent = "The sales dashboard shows numbers that do not match the finance report, and the executives meet tomorrow. How do you solve it?";

            // Adding option buttons
            addAnswerButton("Audit the data pipeline to find the source of the error", 3, 1);
            addAnswerButton("Build a new validated dashboard from raw data", 3, 2);

        } else if (currentState == 2 && chosenPath == 3) {
            // This shows the DevOps path

            document.getElementById("question").textContent = "At 3 AM the production servers go down and customers cannot log in. How do you solve it?";

            // Adding option buttons
            addAnswerButton("Roll back to the last stable release", 3, 1);
            addAnswerButton("Find the root cause and deploy a hotfix", 3, 2);
        } else if (currentState == 3) {
            // Reconverge point: Career Success
            document.getElementById("question").textContent = "Career Success! Your solution worked and your career takes off. Years pass and it is time to think about retirement.";

            // Addting option button
            addAnswerButton("Retire", 4, 1)
        } else if (currentState == 4) {
            // This shows the retiring path

            document.getElementById("question").textContent = "You have retired after a long and successful career. How do you want to spend your retirement?";

            // Adding option buttons
            addAnswerButton("Become a volunteer teacher for people in need", 5, 1);
            addAnswerButton("Travel the world", 5, 2);
        } else if (currentState == 5) {
            // Reconverge point: The Legacy 
            document.getElementById("question").textContent = "Congratulations! You built a successful career and left a lasting legacy for future generations.";

            /* Displaying congratulations image*/
            document.getElementById("congrats-img").classList.remove("hidden");
        }
    }

    function addAnswerButton(buttonInformation, newState, newPath) {
        const newButton = document.createElement("button");
        newButton.textContent = buttonInformation;

        newButton.addEventListener("click", () => {
            currentState = newState;
            chosenPath = newPath;
            renderQuestion();
        });

        const listElements = document.createElement("li");
        listElements.appendChild(newButton);

        document.getElementById("answers").appendChild(listElements);
    }
});