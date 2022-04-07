const toTopButton = document.querySelector("#backToTop")

function backToTop() {
    document.documentElement.scrollTop = 0;
}
document.querySelector("#backToTop").onclick = backToTop

const startingPlaceField = document.querySelector(".startingPlace")
let requestedStartingPlace = document.querySelector("#requestedStartingPlace")

startingPlaceField.addEventListener('submit', destination => {
    destination.preventDefault()
    let requestIndex = document.querySelector("#requestedStartingPlace").selectedIndex
    let request = (requestedStartingPlace[requestIndex].text)
    if (request == "Anime") {
        window.location.href = "anime.html"
    } if (request == "TCG of the Anime") {
        window.location.href = "atcg.html"
    } if (request == "TCG of Today") {
        window.location.href = "tcg.html"
    } if (request == "The Basics") {
        window.location.href = "basics.html"
    }
})

const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php`

fetch(api)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        console.log(parsedResponse)
    })

const main = document.querySelector("main")
let username = window.localStorage.getItem("username")
console.log(username)

function addGreeting() {
    const greeting = document.createElement("p")
    greeting.innerHTML = `
        <h1>Welcome ${username}!</>
    `
    main.prepend(greeting)
}

addGreeting()

const firstLearning = document.querySelector(".firstLearning")
let requestedLearning = document.querySelector("#requestedLearning")
let learning = document.querySelector(".learning")

function getCardImage(card) {
    
}

firstLearning.addEventListener('submit', destination => {
    destination.preventDefault()
    let learningIndex = document.querySelector("#requestedLearning").selectedIndex
    if (learningIndex == [0]) {
        learning.innerHTML = `
        <p>
        The deck is where the majority of your cards will reside and consists of your Spell, Trap, and Main Deck Monster cards. At the start of the game, each player draws 5 cards and the turn player 
        draws a 6th card to start their turn. From there, depending on what type of cards are in their hand, the turn player can either Summon a Monster, set a card, or just end their turn.
        </p>
        <h3> Spell Cards </h3>
        <p>
        The Spell Card category consists of 3 main types, Field Spells, Normal Spells, and Quick Play Spells. Field Spells and Normal Spells can only be activated by a player during their turn 
        whereas a Quickplay spell can be set in the Spell & Trap Zone and then activated on your opponents turn.
        </p>
        `
    } if (learningIndex == [1]) {
        learning.innerHTML = `
        Information about the Main Monster Zone
        `
    } if (learningIndex == [2]) {
        learning.innerHTML = `
        Information about the Spell & Trap Zone
        `
    } if (learningIndex == [3]) {
        learning.innerHTML = `
        Information about the Field Zone
        `
    } if (learningIndex == [4]) {
        learning.innerHTML = `
        Information about the Graveyard
        `
    } if (learningIndex == [5]) {
        learning.innerHTML = `
        Information about the Banished Zone
        `
    } if (learningIndex == [6]) {
        learning.innerHTML = `
        Information about the Extra Deck
        `
    } 
})