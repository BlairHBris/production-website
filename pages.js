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

function addBasicsGreeting() {
    const greeting = document.createElement("p")
    greeting.innerHTML = `
        <h1>Welcome ${username}!</>
    `
    main.prepend(greeting)
}

addBasicsGreeting()