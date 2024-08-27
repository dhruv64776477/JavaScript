let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateElem();

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
  if (result == "You win") {
    score.wins += 1;
  } else if (result == "You lose") {
    score.losses += 1;
  } else if (result == "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateElem();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `You
          <img src="./images/${p_move}-emoji.jpg" class="move">
          <img src="./images/${c_move}-emoji.jpg" class="move">
          Computer`;
}
function updateElem() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `WINS: ${score.wins} LOSSES: ${score.losses} TIES: ${score.ties}`;
}

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
