window.addEventListener("load", () => {
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
