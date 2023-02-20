import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const arrayOfClubs = ["♦", "♥", "♠", "♣"];
  const arrayOfValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const generateRandom = array => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const colorFormatingByCardClub = obtainedCardClub => {
    if (obtainedCardClub === "♦" || obtainedCardClub === "♥") {
      return "red";
    }
    return "black";
  };

  const render = () => {
    const cardClub = document.querySelectorAll(`.strip`);
    const cardValue = document.querySelector(`.value`);

    const obtainedCardClub = generateRandom(arrayOfClubs);
    cardClub.forEach(element => {
      element.innerText = `${obtainedCardClub}`;
      element.style.color = colorFormatingByCardClub(obtainedCardClub);
    });

    cardValue.innerText = `${generateRandom(arrayOfValue)}`;
    //cardValue.style.color = colorFormatingByCardClub(obtainedCardClub);
    if (colorFormatingByCardClub(obtainedCardClub) === "red") {
      cardValue.classList.remove("black");
      cardValue.classList.add("red");
    } else {
      cardValue.classList.remove("red");
      cardValue.classList.add("black");
    }
  };

  render();

  const myButton = document.querySelector(`#myButton`);
  myButton.addEventListener("click", render);
};
