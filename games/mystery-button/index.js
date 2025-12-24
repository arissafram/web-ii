window.addEventListener("load", () => {
  let clickCount = 0;
  const mysteryButton = document.querySelector("#mystery-button");
  const mysteryArea = document.querySelector("#mystery-area");

  mysteryButton.onclick = () => {
    clickCount++;

    if (clickCount === 1) {
      mysteryButton.style.transform = "scale(0.3)";
    } else if (clickCount === 2) {
      mysteryButton.style.transform = "scale(2)";
    } else if (clickCount === 3) {
      mysteryButton.style.transform = "rotate(180deg)";
    } else if (clickCount === 4) {
      mysteryButton.style.backgroundColor = "hotpink";
    } else if (clickCount === 5) {
      mysteryButton.style.animation = "spin 0.5s linear infinite";
    } else {
      clickCount = 0;
      mysteryButton.style.transform = "";
      mysteryButton.style.animation = "";
      mysteryArea.style.backgroundColor = "";
    }
  };
});
