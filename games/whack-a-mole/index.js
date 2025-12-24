window.addEventListener("load", () => {
  let moleScore = 0;
  let moleGameOver = false;
  const moleScoreText = document.querySelector("#mole-score");
  const moleField = document.querySelector("#mole-field");
  const moleMessage = document.querySelector("#mole-message");
  const moles = document.querySelectorAll(".mole");

  moles.forEach((mole) => {
    mole.onclick = (event) => {
      event.stopPropagation();
      if (moleGameOver) return;
      moleScore++;
      moleScoreText.innerText = "Score: " + moleScore;
    };
  });

  moleField.onclick = () => {
    if (moleGameOver) return;
    moleGameOver = true;
    moleMessage.innerText = "You missed! Game over.";
    moles.forEach((mole) => {
      mole.style.animationPlayState = "paused";
      mole.style.cursor = "default";
    });
  };
});
