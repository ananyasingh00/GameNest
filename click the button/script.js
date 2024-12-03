let timeLeft = 10;
let score = 0;
let countdownInterval;

const clickButton = document.getElementById('click-button');
const timeLeftSpan = document.getElementById('time-left');
const scoreSpan = document.getElementById('score');
const startButton = document.getElementById('start-button');

clickButton.addEventListener('click', () => {
  score++;
  scoreSpan.textContent = score;
});

startButton.addEventListener('click', startGame);

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreSpan.textContent = score;
  timeLeftSpan.textContent = timeLeft;
  clickButton.style.display = 'inline-block';
  startButton.disabled = true;


// Function to redirect to homepage
function exitToHome() {
  window.location.href = "file:///C:/Users/ANANYA%20SINGH/OneDrive/Desktop/gamenest/index.html"; // Replace "index.html" with the actual path to your homepage
}

// Add event listener for the Exit button
document.getElementById("exitButton").addEventListener("click", exitToHome);

  countdownInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timeLeftSpan.textContent = timeLeft;
    } else {
      clearInterval(countdownInterval);
      clickButton.style.display = 'none';
      startButton.disabled = false;
      alert(`Time's up! Your score is ${score}`);
    }

  }, 1000);
}
