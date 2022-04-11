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
    55144522,
    4206964,
    69140098,
    89631139,
    74677422,
    83764719,
    46986414,
    40619825,
    15259703,
    81439173,
    30241314,
    23995346,
    24094653
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
                <h2> The Deck and The Cards </h2>
                <p>
                The deck is where the majority of your cards will reside and consists of your Spell, Trap, and Main Deck Monster cards. At the start of the game, each player draws 5 cards and the turn player 
                draws a 6th card to start their turn. From there, depending on what type of cards are in their hand, the turn player can either Summon a Monster, set a card, place it 
                face down in whatever zone it can go in, or just end their turn. Keep in mind, the maximum number of cards a player can have in their hand at the end of their turn is 7. If they have 
                more than that you would have to discard cards to the Graveyard.
                </p>

                <h3> Spell Cards </h3>
                <img src="${cardImageGet("Pot of Greed")} alt = "Pot of Greed"/>
                <p>
                The Spell Card category consists of 5 main types, Field Spells, Normal Spells, Equip Spells, Continuous Spells, and Quick Play Spells. Field, Normal, Equip, and Continuous spells can only be activated by a player 
                during their turn whereas a Quickplay spell can be set in the Spell & Trap Zone and then activated on your opponents turn. Equip spells must also be equipted to a monster.
                </p>
                <h4> Activating Spell Cards</h4>
                <p>
                Normal, Quickplay, and Continous spells are activated in a Spell & Trap card zone while a Field spell is activated in the Field Zone. On activation and effect resolution, performing the action 
                the card says it does like drawing 2 cards, a Normal or Quickplay spell will go to the Graveyard while Field and Continuous spells stay in the zone they were activated in.
                </p>

                <h3> Trap Cards </h3>
                <img src="${cardImageGet("Trap Hole")} alt = "Trap Hole"/>
                <p>
                Trap cards are unique in that they must be set for one turn before they can be used. They must be set in the Spell & Trap Zone during your turn and then you must wait until at least your 
                opponents next turn to activate it, after which you can activate it at any point.
                </p>
                <h4> Activating Trap Cards</h4>
                <p>
                Trap Cards are normally activatable in response to an action taken by your opponent. Take the above card, Trap Hole for instance. If you oppenent Normal or Flip summons a monster with 1000+ Attack 
                and Trap Hole is set on your field, you can activate the card by flipping it face up and then the effect will resolve. When a Trap card resolves, it will go to the Graveyard. 
                </p>

                <h3> Monster Cards </h3>
                <img src="${cardImageGet("Red-Eyes Black Dragon")} alt = "Red-Eyes Black Dragon"/>
                <p>
                Monster cards are the most basic card available to you. They will have an attack point value, a defense point value, and a level, denoted by stars at the top. They may also have an effect which can 
                be seen in the textbox below the picture.
                </p>
                <h4> Summoning Monster Cards </h4>
                <h5> Level 4 or Lower Monsters </h5> 
                <img src="${cardImageGet("Gemini Elf")} alt = "Gemini Elf"/>
                <p>
                    Level 4 or lower monsters can be Normal summoned in attack position or Set face down in defense postion freely to the field. Keep in mind, you can only Normal summon or Set 
                    once per turn.
                </p>
                <h5> Level 5 or Higher Monsters </h5>
                <img src="${cardImageGet("Blue-Eyes White Dragon")} alt = "Blue-Eyes White Dragon"/>
                <p>
                    Level 5 or higher monsters require a tribute to be Normal summoned in attack position or Set face down to the field. A tribute means that a monster you currently have on field will be tributed, going to 
                    the graveyard to summon the monster. You need to tribute 1 monster on the field to summon a level 5 or 6 monster or 2 monsters for a level 7 or higher monster. A Tribute summon counts as 
                    the one Normal summon per turn as well and thus cannot be used if you have already Normal summoned another monster that turn.
                </p>
                <h5> Special Summon Monsters </h5>
                <img src="${cardImageGet("Monster Reborn")} alt = "Monster Reborn"/>
                <p>
                    Some cards have effects that allow monsters to be special summoned. Monster Reborn for example, can special summon any monster from your Graveyard regardless of its level. For special summons, 
                    the only way to know if a card allows for a special summon is to read it and it will have the conditions of the summon on it.
                </p>
                `
            } if (problemIndex == [1]) { 
                problem.innerHTML = `
                <h2>The Monster Card Zone</h2>
                <img src="${cardImageGet("Dark Magician")} alt = "Dark Magician"/>
                <p>
                These 5 zones are where monsters from either the Deck or Fusion Deck are summoned or set to. Any other type of card may not be put into one of these zones. From this zone a monster can  activate 
                its effect, attack, or do nothing and remain on the field. The effect is typically only activatable on your turn but if denoted with (Quick Effect) it can also be activated on your 
                opponents turn. Monsters cannot be removed from this zone without cause. For instance, if all 5 of your zones are ocupied and you draw a level 4 monster 
                that you want to summon, you can't unless some other card you have can remove a monster from the field. You can't just remove a monster because you want to.
                </p>
                `
            } if (problemIndex == [2]) { 
                problem.innerHTML = `
                <h2> The Spell & Trap Zone </h2>
                <img src="${cardImageGet("Axe of Despair")} alt = "Axe of Despair"/>
                <p>
                There 5 zones are where your Spell and Trap cards, excluding Field spell cards, can be set or activated in. Any other type of card may not be put into one of these zones. 
                If all these zones are occupied you cannot set or 
                activate additional Spells or Traps until a zone is cleared. This is more easily done then with clearing a Monster zone, as activating a Spell or Trap is easier than removing a Monster, but 
                it is still something to keep in mind.
                </p>
                `
            } if (problemIndex == [3]) { 
                problem.innerHTML = ``
            }
        })