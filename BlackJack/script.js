
// Your JavaScript code that uses the document object here




let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message")
let sumEL = document.getElementById("s")
let cardsEL = document.querySelector("#c")

// we can use query selector in place of document
// but we need to give #before id and .before class
// if you give body in query selector then result comes in new page
// here append is done as push in array 

function getrandomcard() {
    let randomnumber = Math.floor(Math.random() * 13) + 1
    if (randomnumber > 10)  {
        return 10
    }
    else if (randomnumber === 1) {
        return 11
    }
    else {
        return randomnumber
    }
}

function startgame() {
    
    cardsEL.textContent = "Cards: "

    isAlive = true;
    let firstcard = getrandomcard()
    console.log(firstcard)
    let secondcard = getrandomcard()
    console.log(secondcard)
    cards = [firstcard, secondcard]

    sum = firstcard + secondcard
    render_game()
}

function render_game() {
    
    cardsEL.textContent = "Cards: "

    for(let i = 0; i < cards.length;i++) {
        
        cardsEL.textContent +=  cards[i] + " "
    }

    sumEL.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    }
    else if (sum === 21) {
        message = "Wohoo! You've got BlackJack! "
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! "
        isAlive = false
    }

    messageEL.textContent = message;
}





function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getrandomcard()
        cards.push(card)
        sum += card
        
        render_game()
    }
}