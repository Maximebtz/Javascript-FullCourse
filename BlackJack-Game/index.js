
let firstCard = 2
let secondCard = 11
let cards = [firstCard, secondCard]  
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

document.getElementById("start-btn").addEventListener('click', function() {
    startGame()
})


function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.innerText = "Cards: " + cards[0] + " " + cards[1]
    sumEl.innerText = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card ? 🙂"
    } else if (sum === 21) {
        message = "You've got BlackJack !!! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game 😭"
        isAlive = false
    }
    messageEl.innerText = message
    console.log(message)
}

function newCard() {
    console.log(message)
    let card = 7
    
    sum += card

    renderGame()
    // message = "Drawing a new card from the deck !"
}

document.getElementById("new-card-btn").addEventListener('click', function() {
    newCard()
})
