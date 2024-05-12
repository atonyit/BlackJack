let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
    name: prompt("What is your name?") || "Guest",
    chips: parseInt(prompt("How much money are you betting?")) || 100
}

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let random = Math.floor(Math.random() * 13) + 1;

    if (random === 1){
        return 11;
    } else if (random > 10){
            return 10;
    } else{
        return random;
    }
}

function startGame(){
    sum = 0
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum += firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; ++i){
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    if (!hasBlackJack && isAlive){
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}