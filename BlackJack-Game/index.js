

let cards = []  
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Maxime",
    chips: 145
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

document.getElementById("start-btn").addEventListener('click', function() {
    startGame()
})


function getRandomCard() {
    
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.innerText = "Cards: "

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    
    if (isAlive === true && hasBlackJack === false){
        
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    
    }

}

document.getElementById("new-card-btn").addEventListener('click', function() {
    newCard()
})
