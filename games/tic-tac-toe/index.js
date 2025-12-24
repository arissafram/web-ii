window.addEventListener("load", () => {
  let currentPlayer = "X";
  const turnText = document.querySelector("#turn");
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.onclick = () => {
      if (cell.innerText !== "") return;
      cell.innerText = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      turnText.innerText = "Current player: " + currentPlayer;
    };
  });
});
