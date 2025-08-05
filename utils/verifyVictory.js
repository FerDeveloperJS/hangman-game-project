export function verifyVictory(everyLetter) {

    const arrayEveryLetter = Array.from(everyLetter)

    const victory = arrayEveryLetter.every(letter => letter.style.display === "block")
    if (victory) {
        const keyboard = document.querySelector(".keyboard")
        const keyboardButtons = keyboard.querySelectorAll("button")
        keyboardButtons.forEach(button => {
            button.style.pointerEvents = "none"
        })

        setTimeout(() => {
            alert("ADIVINASTE !!!")
        }, 900)
    }
}