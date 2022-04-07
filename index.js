const toTopButton = document.querySelector("#backToTop")

function backToTop() {
    document.documentElement.scrollTop = 0;
}
document.querySelector("#backToTop").onclick = backToTop

const usernameField = document.querySelector(".username")
let enteredUsername = document.querySelector("#enteredUsername")

usernameField.addEventListener('submit', name => {
    name.preventDefault()
    window.localStorage.setItem('username', enteredUsername.value)
    enteredUsername.value = ""
})

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


const basicsMain = document.querySelector(".basicsMain")
let username = window.localStorage.getItem("username")
console.log(username)

function addGreeting(username) {
    const p = document.createElement("p")
    p.innerHTML = `
        Welcome to The Basics ${username}!
    `
    basicsMain.append(p)
}



