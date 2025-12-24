window.addEventListener("load", () => {
  let firstCard = null;
  let secondCard = null;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.onclick = () => {
      if (card.classList.contains("matched")) return;
      if (card.classList.contains("flipped")) return;
      if (secondCard !== null) return;

      card.innerText = card.dataset.value;
      card.classList.add("flipped");

      if (firstCard === null) {
        firstCard = card;
      } else {
        secondCard = card;

        if (firstCard.dataset.value === secondCard.dataset.value) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard = null;
          secondCard = null;
        } else {
          setTimeout(() => {
            firstCard.innerText = "";
            secondCard.innerText = "";
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard = null;
            secondCard = null;
          }, 1000);
        }
      }
    };
  });
});
