let userScore = 0;
let compScore = 0;

// DOM Elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// Load sound files
const clickSound = new Audio("click.mp3"); // Replace with your click sound file
const winSound = new Audio("win.mp3");     // Replace with your win sound file
const backgroundMusic = new Audio("background.mp3"); // Replace with your background music file

// Function to play click sound
function playClickSound() {
    clickSound.play();
}

// Function to play win sound
function playWinSound() {
    winSound.play();
}

// Function to start background music
function playBackgroundMusic() {
    backgroundMusic.loop = true; // Enable looping for background music
    backgroundMusic.play();
}

// Function to stop background music
function stopBackgroundMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset to the beginning of the track
}

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Draw game
const drawGame = () => {
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "black";
};

// Show winner and update scores
const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        playWinSound(); // Play win sound
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

// Main game logic
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

// Add click event listeners for choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playClickSound(); // Play click sound
        playGame(userChoice);
    });
});

// Redirect to home page
function exitToHome() {
    window.location.href = "file:///C:/Users/ANANYA%20SINGH/OneDrive/Desktop/gamenest/index.html"; // Redirects to the homepage
}

// Function to redirect to homepage
function exitToHome() {
    window.location.href = "file:///C:/Users/ANANYA%20SINGH/OneDrive/Desktop/gamenest/index.html"; // Replace "index.html" with the actual path to your homepage
}

// Add event listener for the Exit button
document.getElementById("exitButton").addEventListener("click", exitToHome);


// Optional: Event listeners for background music buttons
document.getElementById("startMusicButton").addEventListener("click", playBackgroundMusic);
document.getElementById("stopMusicButton").addEventListener("click", stopBackgroundMusic);
