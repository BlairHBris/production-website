const toTopButton = document.querySelector("#backToTop")

function backToTop() {
    document.documentElement.scrollTop = 0;
}
document.querySelector("#backToTop").onclick = backToTop

const usernameField = document.querySelector(".username")
let enteredUsername = document.querySelector("#enteredUsername")

usernameField.addEventListener('submit', name => {
    name.preventDefault()
    localStorage.setItem('username', enteredUsername.value)
    enteredUsername.value = ""
})

const startingPlaceField = document.querySelector(".startingPlace")
let requestedStartingPlace = document.querySelector("#requestedStartingPlace")

startingPlaceField.addEventListener('submit', destination => {
    destination.preventDefault()
    let requestIndex = document.querySelector("#requestedStartingPlace").selectedIndex
    let request = (requestedStartingPlace[requestIndex].text)
    if (request == "Anime") {
        location.href = "anime.html"
    } if (request == "TCG of the Anime") {
        location.href = "atcg.html"
    } if (request == "TCG of Today") {
        location.href = "tcg.html"
    } if (request == "The Basics") {
        location.href = "basics.html"
    } if (request == "Homepage") {
        location.href = "index.html"
    }
})


const basicsMain = document.querySelector(".basicsMain")
let username = localStorage.getItem("username")

function addGreeting(username) {
    const p = document.createElement("p")
    p.innerHTML = `
        Welcome to ${username}!
    `
    basicsMain.append(p)
}



