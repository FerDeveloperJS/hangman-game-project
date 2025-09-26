import { words } from "./words.js";
import { getRandomNumber } from "./utils/getRandomWord.js";
import { selectRandomWordFromArray } from "./utils/getRandomWord.js";
import { verifyVictory } from "./utils/verifyVictory.js";

let word;
let attempts = 0;

function playGame() {
  const hangmanGameH1 = document.querySelector("h1");
  const dollBody = document.querySelector(".doll-body");
  const dollBodyParts = dollBody.querySelectorAll("div");
  const rope = document.querySelector(".rope");
  const keyboard = document.querySelector(".keyboard");
  const letterSpaces = document.querySelector(".letter-spaces");
  const categorySection = document.querySelector(".category");
  const wordCategoryTitle = document.querySelector(".word-category-title");

  hangmanGameH1.style.display = "none";
  dollBodyParts.forEach((part) => {
    part.style.display = "none";
  });
  rope.style.display = "none";
  letterSpaces.style.display = "flex";
  keyboard.style.display = "flex";
  categorySection.style.display = "flex";
  playGameButton.style.display = "none";

  const randomNumber = getRandomNumber(words.length);
  const randomWord = selectRandomWordFromArray(randomNumber, words);

  word = randomWord.word;
  const category = randomWord.category;

  wordCategoryTitle.innerText = category;

  for (let l of word) {
    let letterSpace = document.createElement("div");
    letterSpace.classList.add("letter-space");
    let letter = document.createElement("p");
    letter.innerText = l;
    letter.classList.add("letter");

    letterSpace.appendChild(letter);
    letterSpaces.appendChild(letterSpace);
  }
}

const playGameButton = document.querySelector(".play-game-button");
playGameButton.addEventListener("click", playGame);

const formKeyboardLetterPressed = document.querySelector(
  "#keyboard-letter-pressed"
);
formKeyboardLetterPressed.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyboardButton = event.submitter;
  const buttonLetter = keyboardButton.value;

  for (let l of word) {
    if (buttonLetter === l) {
      let letters = document.querySelectorAll(".letter");

      letters.forEach((letter) => {
        if (letter.innerText === buttonLetter) {
          letter.style.display = "block";
        }
      });

      verifyVictory(letters);

      keyboardButton.style.backgroundColor = "green";
      keyboardButton.style.pointerEvents = "none";
      return;
    }
  }

  keyboardButton.style.backgroundColor = "red";
  keyboardButton.style.pointerEvents = "none";

  attempts += 1;

  if (attempts === 1) {
    const rope = document.querySelector(".rope");
    rope.style.display = "block";
  } else if (attempts === 2) {
    const head = document.querySelector(".head");
    head.style.display = "block";
  } else if (attempts === 3) {
    const torso = document.querySelector(".torso");
    torso.style.display = "block";
  } else if (attempts === 4) {
    const leftArm = document.querySelector(".left-arm");
    leftArm.style.display = "block";
  } else if (attempts === 5) {
    const rightArm = document.querySelector(".right-arm");
    rightArm.style.display = "block";
  } else if (attempts === 6) {
    const leftLeg = document.querySelector(".left-leg");
    leftLeg.style.display = "block";
  } else {
    const rightLeg = document.querySelector(".right-leg");
    const keyboard = document.querySelector(".keyboard");
    const keyboardButtons = keyboard.querySelectorAll("button");
    keyboardButtons.forEach((button) => {
      button.style.pointerEvents = "none";
    });
    rightLeg.style.display = "block";

    setTimeout(() => {
      alert("AHORCADO !!!");
    }, 500);
  }

  const playAgainButton = document.querySelector(".play-again-button");
  playAgainButton.style.display = "block";
  playAgainButton.addEventListener("click", () => {
    location.reload();
  });
});
