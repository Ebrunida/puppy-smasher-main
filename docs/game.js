// Initialize variables
let score = 0;
let hopInterval = 2000; // milliseconds
let bugTimer;
const gameArea = document.getElementById("game-area");
const bug = document.getElementById("bug");
const scoreDisplay = document.getElementById("score-display");
const intervalDisplay = document.getElementById("interval-display");
const resetScoreBtn = document.getElementById("reset-score-btn");
const resetSpeedBtn = document.getElementById("reset-speed-btn");

// Function to start the bug timer
function startBugTimer() {
  bugTimer = setInterval(moveBug, hopInterval);
}

// Function to move the bug to a random location
function moveBug() {
  let x = Math.floor(Math.random() * (gameArea.offsetWidth - bug.offsetWidth));
  let y = Math.floor(Math.random() * (gameArea.offsetHeight - bug.offsetHeight));
  bug.style.left = x + "px";
  bug.style.top = y + "px";
}

// Function to handle clicking on the bug
function clickBug() {
  score++;
  scoreDisplay.textContent = "Score: " + score;
  hopInterval -= 50;
  if (hopInterval < 500) {
    hopInterval = 500;
  }
  intervalDisplay.textContent = "Interval: " + hopInterval + "ms";
}

// Function to reset the game speed
function resetSpeed() {
  hopInterval = 2000;
  intervalDisplay.textContent = "Interval: " + hopInterval + "ms";
}

function updateSpeed() {
  if (speed > 200) {
    document.getElementById('speedTXT').innerHTML = 'Speed: ' + (Math.round(speed / 10) / 100) + ' seconds';
  } else {
    document.getElementById('speedTXT').innerHTML = 'Speed: MAX Speed';
  }
}
// Function to reset the game score
function resetScore() {
  score = 0;
  scoreDisplay.textContent = "Score: " + score;
}

// Event listeners for clicking on the bug and buttons
bug.addEventListener("click", clickBug);
resetSpeedBtn.addEventListener("click", resetSpeed);
resetScoreBtn.addEventListener("click", resetScore);

// Start the game
startBugTimer();
