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

  const render = () => {
    const cardClub = document.querySelectorAll(`.strip`);
    const cardValue = document.querySelector(`.value`);

    const obtainedCardvalue = generateRandom(arrayOfClubs);
    cardClub.forEach(element => (element.innerText = `${obtainedCardvalue}`));
    cardValue.innerText = `${generateRandom(arrayOfValue)}`;
  };

  render();

  const buttomRefresh = document.getElementsByClassName(`buttom`);
  for (const element of buttomRefresh) {
    element.addEventListener(`click`, render);
  }
};
