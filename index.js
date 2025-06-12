import { words } from "./words.js"
import { getRandomNumber } from "./utils/getRandomWord.js"
import { selectRandomWordFromArray } from "./utils/getRandomWord.js"

let word;

const playGameButton = document.querySelector(".play-game-button")

playGameButton.addEventListener("click", () => {
    const hangmanGameH1 = document.querySelector("h1")
    const dollBody = document.querySelector(".doll-body")
    const rope = document.querySelector(".rope")
    const keyboard = document.querySelector(".keyboard")
    const letterSpaces = document.querySelector(".letter-spaces")
    const categorySection = document.querySelector(".category")
    const wordCategoryTitle = document.querySelector(".word-category-title")

    hangmanGameH1.style.display = "none"
    dollBody.style.display = "none" 
    rope.style.display = "none"
    letterSpaces.style.display = "flex"
    keyboard.style.display = "flex"
    categorySection.style.display = "flex"
    playGameButton.style.display = "none"

    const randomNumber = getRandomNumber(words.length)
    const randomWord = selectRandomWordFromArray(randomNumber, words)

    word = randomWord.word
    const category = randomWord.category
    
    console.log(word)

    wordCategoryTitle.innerText = category

    for (let l of word) {
        let letterSpace = document.createElement("div")
        letterSpace.classList.add("letter-space")
        let letter = document.createElement("p")
        letter.innerText = l
        letter.classList.add("letter")
        
        letterSpace.appendChild(letter)
        letterSpaces.appendChild(letterSpace)
    }
})


const formKeyboardLetterPressed = document.querySelector("#keyboard-letter-pressed")
formKeyboardLetterPressed.addEventListener("submit", (event) => {
    event.preventDefault()

    const keyboardButton = event.submitter
    const buttonLetter = keyboardButton.value

    for (let l of word) {
        if (buttonLetter === l) {
            let letters = document.querySelectorAll(".letter")

            letters.forEach(letter => {
                if (letter.innerText === buttonLetter) {
                    letter.style.display = "block"
                }
            })
        }
    }
    
})