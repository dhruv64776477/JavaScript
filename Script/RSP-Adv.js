// Retrieve the score from local storage or initialize it if not present
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Update the score display on the page
updateElem();

let autoPlayCheck = false;
let intervalID;

// Function to handle auto play
function autoPlay() {
  if (!autoPlayCheck) {
    // Start the auto play interval if it is not already running
    intervalID = setInterval(() => {
      const p_move = computer();
      playGame(p_move);
    }, 1000);
    autoPlayCheck = true;
  } else {
    // Clear the auto play interval if it is running
    clearInterval(intervalID);
    autoPlayCheck = false;
  }
}

// Add event listeners for the buttons to play the game
document.querySelector(".rock-button").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".paper-button").addEventListener("click", () => {
  playGame("Paper");
});

document.querySelector(".scissor-button").addEventListener("click", () => {
  playGame("Scissor");
});

document.querySelector(".js-reset").addEventListener("click", () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateElem();
});

document.querySelector(".auto-play").addEventListener("click", () => {
  autoPlay();
  const buttonElem = document.querySelector(".auto-play");
  if (autoPlayCheck) {
    buttonElem.innerHTML = "Stop-Play";
  } else {
    buttonElem.innerHTML = "Resume";
  }
});

// Add event listener for keydown events to play the game with keyboard
document.body.addEventListener("keydown", (event) => {
  if (event.key == "r" || event.key == "R") {
    playGame("Rock");
  } else if (event.key == "p" || event.key == "P") {
    playGame("Paper");
  } else if (event.key == "s" || event.key == "S") {
    playGame("Scissor");
  }
});

// Function to play the game and determine the result
function playGame(p_move) {
  const c_move = computer();

  let result = "";

  if (p_move === "Scissor") {
    if (c_move === "Rock") {
      result = "You lose";
    } else if (c_move === "Paper") {
      result = "You win";
    } else if (c_move === "Scissor") {
      result = "Tie";
    }
  } else if (p_move === "Paper") {
    if (c_move === "Rock") {
      result = "You win";
    } else if (c_move === "Paper") {
      result = "Tie";
    } else if (c_move === "Scissor") {
      result = "You lose";
    }
  } else if (p_move === "Rock") {
    if (c_move === "Rock") {
      result = "Tie";
    } else if (c_move === "Paper") {
      result = "You lose";
    } else if (c_move === "Scissor") {
      result = "You win";
    }
  }

  // Update the score based on the result
  if (result == "You win") {
    score.wins += 1;
  } else if (result == "You lose") {
    score.losses += 1;
  } else if (result == "Tie") {
    score.ties += 1;
  }

  // Store the updated score in local storage
  localStorage.setItem("score", JSON.stringify(score));

  // Update the score display on the page
  updateElem();

  // Display the result and the moves
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-move").innerHTML = `Your
          <img src="../images/${p_move}-emoji.jpg" class="move">
          <img src="../images/${c_move}-emoji.jpg" class="move">
          Comp`;
}

// Function to update the score display on the page
function updateElem() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `WINS: ${score.wins} LOSSES: ${score.losses} TIES: ${score.ties}`;
}

// Function to generate a random computer move
function computer() {
  const random = 3 * Math.random();

  let c_move = "";

  if (random >= 0 && random < 1) {
    c_move = "Rock";
  } else if (random >= 1 && random < 2) {
    c_move = "Paper";
  } else if (random >= 2 && random < 3) {
    c_move = "Scissor";
  }
  return c_move;
}
