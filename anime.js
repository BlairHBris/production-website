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
                by popular antagonist turned anti-hero Seto Kaiba, who summoned 3, level 8 Blue-Eyes White Dragons on one turn. Why was this allowed? My best guess is because he is very rich.
                </p>
                <img src="images/Triple_Blue-Eyes.png" alt="Screw the rules"/>
                <p>
                Another thing about summoning, players in the Anime often summon monsters in face up defense position, commonly done by the main character with Giant Soldier of Stone, which is not allowed. 
                This isn't as big a deal as the triple Blue-Eyes summon, but is worth mentioning.
                </p>
                <img src="${cardImageGet("Giant Soldier of Stone")} alt = "Giant Soldier of Stone"/>

                <h4> Activating Trap Cards</h4>
                <img src="${cardImageGet("Trap Hole")} alt = "Trap Hole"/>
                <p>
                Trap Cards are normally activatable in response to an action taken by your opponent and have to be set before their activation. In the Anime players can use them whenever they feel like. 
                I'd say just like Spell cards but no. Traps can be set whenever and can even activate on their own. Why? No idea. Every Trap is just 
                <a href="${cardImageGet("Infinite Impermanence")}" target="_blank">Infinite Impermanence</a> now I guess
                </p>
                `
            } if (problemIndex == [1]) { 
                problem.innerHTML = `
                <h2>Broken Card Design</h2>
                <img src="${cardImageGet("Toon World")} alt = "Toon World"/>
                <p>
                I want you to look at the above card Toon World. It's a Field Spell that takes 1000 LP to activate and has no other effect. Now take a look at this Toon World:
                </p>
                <img src="images/animetoonworld.jpg" alt="Anime Toon World"/>
                <p>
                This is the Anime version and just look at all that text. Battle protection, Effect negation, and Monster protection. This is not how this card works but whatever I guess. The writers 
                wanted a fun storyline and this is what they came up with.
                </p>
                <h3> The God Cards </h3>
                <p>
                The God Cards are where this issue of card balancing comes to a head. In the TCG the God cards have always been cool and fun but never good since they take 3 Tributes to summon and aren't 
                as powerful as they seem, sure they have high attack but a single Raigeki beats them all. However, in the Anime, they are all completely busted and none is more busted that The Winged Dragon 
                of Ra.
                </p>
                <img src="${cardImageGet("The Winged Dragon of Ra")} alt = "The Winged Dragon of Ra"/>
                <p>
                The above card is the 'real' Ra. And it's not that bad on its face. It can't be Special Summoned and requires 3 Tributes, but you your opponent can't activate cards when its summoned 
                an you can spend all but 100 of your LP to give it a bunch of Attack and Defense Points and it can destroy monster 1 monster on the field if you pay 1000 LP. Noteably, 
                since this effect does not say Once per turn or anything like that this can be used as many times as you like so long as you have the LP to pay.
                </p>
                <img src="images/animera.jpg" alt="Anime Ra"/>
                <p>
                And this is Anime Ra and oh god. So it has all of the same effects as the real Ra, but is also completely unaffected by your opponents card effects, can tribute other monsters to gain even 
                more attack when it is involved in an attack, can send all your opponents monster's to the graveyard if it attacks, has the option of having its attack and defense become 
                the combined values of its Tributes, let's you tribute itself to gain a bunch of LP, and can be special summoned with <a href="${cardImageGet("Monster Reborn")}" target="_blank">Monster Reborn</a>. 
                This version is obviously so much stronger and is the best example of the Anime deciding what cards do on its own.
                </p>
                `
            } if (problemIndex == [2]) { 
                problem.innerHTML = `
                <h2> This isn't How Anything Works </h2>
                <p>
                As the prior section discussed, the Anime has a tendency to modify cards and what they can do. Usually though, it still makes sense in the relm of the card game and is just about making 
                cards stronger or weaker as necessary. And then it can also go completely off the rails and these are my two favorite examples of that.
                </p>
                <h3> Fun with Lab Wall </h3>
                <img src="${cardImageGet("Labyrinth Wall")} alt = "Labyrinth Wall"/>
                <p>
                This is Labyrinth Wall, a level 5 vanilla, noneffect, monster. This card can be summoned in face up defense without Tributing in the Anime but that's not close 
                to the worst part. In the Anime, when this card was played, it made a literal labyrinth out of the dueling field that monsters had to walk to the end of to win the duel. The maze had its 
                own set of rediculous rules but still, this isn't how anything works.
                </p>
                <img src="images/animelab.jpg" alt="Labyrinth Wall Anime"/>
                <h3> Attack the Moon! </h3>
                <img src="${cardImageGet("Giant Soldier of Stone")} alt = "Giant Soldier of Stone"/>
                <p>
                Back with our friend Giant Solder of Stone. A level 4 vanilla monster. Nothing much going on here.
                </p>
                <img src="${cardImageGet("Mystical Moon")} alt = "Mystical Moon"/>
                <p>
                And here is a new friend, Mystical Moon. A simple equip spell that increased the attack and defense of the monster its equipped with. I'm sure nothing wierd happened when these two 
                interacted in the anime. Let's check in on that.
                </p>
                <img src="images/waterduel.PNG" alt="Water Duel"/>
                <p>
                Well look at that. See totally normal. Half the field is water that monster can hide under and prevent the opponent from knowing what they are. Yes totally fine moving on.
                </p>
                <img src="images/attacking.PNG" alt="Attacking"/>
                <p>
                And here we go more normal stuff. The Mystical Moon was activated causing the water to rise and making it so Yugi, the main character, can't summon anymore monsters than the Giant 
                Soldier of Stone he already has out. Oh and 3 monsters are going to attack the Giant Soldier at the same time because that totally works and adds their attack power together so they can 
                get over the 2000 Defense the monster has which again, totally works.
                </p>
                <img src="images/attackthemoon.PNG" alt="Attack The Moon"/>
                <p>
                And oh look, the Giant Soldier hit the moon with its sword, destroying it, causing the water to eventually go away, destroying all the monsters and winning the duel. This is totally 
                how this all works and is great and fine.
                </p>
                <h3> THIS IS NOT HOW ANYTHING WORKS </h3>
                `
            } if (problemIndex == [3]) { 
                problem.innerHTML = ``
            }
        })