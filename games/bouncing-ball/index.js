window.addEventListener("load", () => {
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
});
ƒ;
