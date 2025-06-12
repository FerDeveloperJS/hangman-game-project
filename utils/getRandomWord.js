export function getRandomNumber(max) {
    const randomNumber = Math.floor(Math.random() * max)
    return randomNumber
}

export function selectRandomWordFromArray(randomNumber, array) {
    const randomWord = array[randomNumber]
    return randomWord
}
