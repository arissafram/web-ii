window.addEventListener("load", () => {
  // Race car game
  const raceCarGame = document.querySelector("#race-car-game");

  const car1 = document.querySelector("#car1");
  const car2 = document.querySelector("#car2");
  const winnerText = document.querySelector("#winner");
  const finishLine = document.querySelector("#finish");

  let car1Pos = 0;
  let car2Pos = 0;
  let gameOver = false;

  raceCarGame.addEventListener("keydown", (event) => {
    if (gameOver) return;

    const key = event.key.toLowerCase();

    if (key === "x") {
      car1Pos += 15;
      car1.style.left = car1Pos + "px";
    }

    if (key === "y") {
      car2Pos += 15;
      car2.style.left = car2Pos + "px";
    }

    if (car1Pos >= finishLine.offsetLeft - finishLine.offsetWidth) {
      winnerText.innerText = "🚗 Player 1 wins!";
      gameOver = true;
    }

    if (car2Pos >= finishLine.offsetLeft - finishLine.offsetWidth) {
      winnerText.innerText = "🏎️ Player 2 wins!";
      gameOver = true;
    }
  });

  // Bouncing ball game
  let score = 0;
  let ballGameOver = false;
  const ball = document.querySelector("#ball");
  const ballArea = document.querySelector("#ball-area");
  const scoreText = document.querySelector(".score");
  const ballMessage = document.querySelector("#ball-message");

  ball.onclick = (event) => {
    event.stopPropagation();
    if (ballGameOver) return;
    score++;
    scoreText.innerText = "Score: " + score;
  };

  ballArea.onclick = () => {
    if (ballGameOver) return;
    ballMessage.innerText = "You missed the ball! Game over.";
    score = 0;
    ballGameOver = true;
    ball.style.animationPlayState = "paused";
    ball.style.cursor = "default";
  };

  // Rock paper scissors game
  const result = document.querySelector("#result");

  document.querySelector("#rock").onclick = () => play("rock");
  document.querySelector("#paper").onclick = () => play("paper");
  document.querySelector("#scissors").onclick = () => play("scissors");

  function play(player) {
    const randomNumber = Math.random();

    let computer;
    if (randomNumber < 0.33) {
      computer = "rock";
    } else if (randomNumber < 0.66) {
      computer = "paper";
    } else {
      computer = "scissors";
    }

    if (player === computer) {
      result.innerText = "Tie! You both chose " + player;
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      result.innerText = "You win! " + player + " beats " + computer;
    } else {
      result.innerText = "You lose! " + computer + " beats " + player;
    }
  }
});
