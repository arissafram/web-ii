window.addEventListener("load", () => {
  let car1Pos = 0;
  let car2Pos = 0;
  let gameOver = false;

  const car1 = document.querySelector("#car1");
  const car2 = document.querySelector("#car2");
  const winnerText = document.querySelector("#winner");
  const finishLine = document.querySelector("#finish");

  document.addEventListener("keydown", (event) => {
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
});
