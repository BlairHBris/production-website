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

const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php`

const cardIds = [
    89631139,
    13039848,
    10045474,
    15259703,
    67284908,
    10000010,
    4206964,
    36607978
]

const requests = cardIds.map(id => {
    return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
    ).then((response) => response.json())
})
Promise.all(requests)
    .then(responses => {
        responses.forEach(response => {
            return localStorage.setItem(`${response.data[0].name}`, JSON.stringify({ data: response.data[0].card_images[0].image_url}))
        })
    }) .catch((error) => {
        location.href = "error.html"
    })

function cardImageGet(cardName){
    return localStorage.getItem(`${cardName}`).slice(9,78)
}

const animeProblems = document.querySelector(".animeProblems")
let requestedProblem = document.querySelector("#requestedProblem")
let problem = document.querySelector(".problem")

animeProblems.addEventListener('submit', destination => {
    destination.preventDefault()
    let problemIndex = document.querySelector("#requestedProblem").selectedIndex
            if (problemIndex == [0]) { 
                problem.innerHTML = `
                <h2> Basic Game Mechanics </h2>
                <h3> Life Points </h3>
                <p>
                In the TCG Life Points always start at 8000. With that in mind how many Life Points do you think the Anime Starts with? 4000? 3000? Well the answer is however many the writers felt like that 
                day. Typically it was 4000 but 2000, 1000, and basically any other number has been used. Why? No idea. My best guess is the writers wanted flexibility with how long duels took, but they 
                have much more creative ways of doing that too.
                </p>

                <h3> Summoning Monsters </h3>
                <img src="${cardImageGet("Blue-Eyes White Dragon")} alt = "Blue-Eyes White Dragon"/>
                <p>
                Quick refresh for those who didn't start with The Basics page, in Yu-Gi-Oh! you are only able to Normal Summon 1 monster per turn and if that monster is above level 5, a Tribute Summon 
                must be performed where 1 monster is tributed for the summon of a level 5-6 monster and 2 monsters are tributed for a monster level 7 or above. In the anime you can not only summon level 5+ 
                monsters without any tributing, you can also Normal Summon multiple times per turn. Sometimes, other times characters don't do that even when it would be very helpful. This was famously done 
                by popular antagonist turned anti-hero Seto Kaiba, who summoned 3 Blue-Eyes White Dragons on one turn. Why was this allowed? My best guess is because he is very rich.
                </p>
                <img src="images/Triple_Blue-Eyes.png" alt="Screw the rules"/>
                <p>
                Another thing about summoning, players in the Anime often summon monsters in face up defense position, commonly done by the main character with Giant Soldier of Stone, which is not allowed. 
                This isn't as big a deal as the triple Blue-Eyes summon, but is worth mentioning.
                </p>
                <img src="${cardImageGet("Giant Soldier of Stone")} alt = "Giant Soldier of Stone"/>

                <h3> Trap Cards </h3>
                <img src="${cardImageGet("Trap Hole")} alt = "Trap Hole"/>
                <p>
                Trap cards are unique in that they must be set for one turn before they can be used. They must be set in the Spell & Trap Zone during your turn and then you must wait until at least your 
                opponents next turn to activate it, after which you can activate it at any point.
                </p>
                <h4> Activating Trap Cards</h4>
                <p>
                Trap Cards are normally activatable in response to an action taken by your opponent and have to be set before their activation. In the Anime players can use them whenever they feel like. 
                I'd say just like Spell cards but no. Traps can be set whenever and can even activate on their own. Why? No idea. Every Trap is just <a href="${cardImageGet("Infinite Impermanence")}" target="_blank">Infinite Impermanence</a> now I guess
                </p>
                `
            } 
        })