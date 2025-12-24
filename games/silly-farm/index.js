window.addEventListener("load", () => {
  const duckSound = new Audio("");
  const horseSound = new Audio("");
  const cowSound = new Audio("");
  const pigSound = new Audio("");

  document.querySelector("#duck").onclick = () => {
    duckSound.play();
  };

  document.querySelector("#horse").onclick = () => {
    horseSound.play();
  };

  document.querySelector("#cow").onclick = () => {
    cowSound.play();
  };

  document.querySelector("#pig").onclick = () => {
    pigSound.play();
  };
});
