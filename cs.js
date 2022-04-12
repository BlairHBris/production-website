const toTopButton = document.querySelector("#backToTop")

function backToTop() {
    document.documentElement.scrollTop = 0;
}
document.querySelector("#backToTop").onclick = backToTop

const clearButton = document.querySelector("#clear")

function clear() {
    cardSpot.textContent = "";
}
document.querySelector("#clear").onclick = clear

const startingPlaceField = document.querySelector(".startingPlace")
let requestedStartingPlace = document.querySelector("#requestedStartingPlace")

startingPlaceField.addEventListener('submit', destination => {
    destination.preventDefault()
    let requestIndex = document.querySelector("#requestedStartingPlace").selectedIndex
    let request = (requestedStartingPlace[requestIndex].text)
    if (request == "Anime") {
        location.href = "anime.html"
    } if (request == "Card Search") {
        location.href = "cs.html"
    } if (request == "The Basics") {
        location.href = "basics.html"
    } if (request == "Homepage") {
        location.href = "index.html"
    }
})

const main = document.querySelector("main")
let username = localStorage.getItem("username")

function addGreeting() {
    const greeting = document.createElement("p")
    greeting.innerHTML = `
        <h1 class="greeting">Welcome ${username}!</>
    `
    main.prepend(greeting)
}

addGreeting()

const cardSpot = document.querySelector(".cardSpot")

function addCardImage(card) {
    const div = document.createElement("div")
    div.innerHTML = `
    <figure>
    <img src="${card.data[0].card_images[0].image_url}" alt="${card.data[0].name}"/>
    <h1>${card.data[0].name}</h1>
    </figure>
    `
    cardSpot.append(div)
}

function addCardDescription(card) {
    const div = document.createElement("div")
    div.innerHTML = `
    <ol>
    <li>Archetype: ${card.data[0].archetype}</li>
    <li>Attribute: ${card.data[0].attribute}</li>
    <li>Type: ${card.data[0].race}, ${card.data[0].type}</li>
    </ol>
    <p>${card.data[0].desc}</p>
    `
    cardSpot.append(div)
}

const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php`

const searcherField = document.querySelector(".searcher")
let enteredSearcher = document.querySelector("#enteredSearcher")

searcherField.addEventListener('submit', name => {
    name.preventDefault()
    const desiredCard = enteredSearcher.value
    console.log(desiredCard)
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${desiredCard}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        addCardImage(parsedResponse)
        addCardDescription(parsedResponse)
    }).catch((error) => {
        cardSpot.innerHTML = `
        <p> Invalid Card Name, please enter a different Card Name. </p>
        `
    })
    enteredSearcher.value = ""
})