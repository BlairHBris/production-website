
function backToTop () {
  document.documentElement.scrollTop = 0
}
document.querySelector('#backToTop').addEventListener('click', event => {
  backToTop()
})

function clear () {
  cardSpot.textContent = ''
}
document.querySelector('#clear').addEventListener('click', event => {
  clear()
})

const startingPlaceField = document.querySelector('.startingPlace')
const requestedStartingPlace = document.querySelector('#requestedStartingPlace')

startingPlaceField.addEventListener('submit', event => {
  event.preventDefault()
  const requestIndex = document.querySelector('#requestedStartingPlace').selectedIndex
  const request = (requestedStartingPlace[requestIndex].text)
  if (request === 'Anime') {
    location.href = 'anime.html'
  } if (request === 'Card Search') {
    location.href = 'cs.html'
  } if (request === 'The Basics') {
    location.href = 'basics.html'
  } if (request === 'Homepage') {
    location.href = 'index.html'
  }
})

const main = document.querySelector('main')
const username = localStorage.getItem('username')

function addGreeting () {
  const greeting = document.createElement('p')
  greeting.innerHTML = `
        <h1 class="greeting">Welcome ${username}!</>
    `
  main.prepend(greeting)
}

addGreeting()

const cardSpot = document.querySelector('.cardSpot')

function addCardImage (card) {
  const div = document.createElement('div')
  div.innerHTML = `
    <figure>
    <img src="${card.data[0].card_images[0].image_url}" alt="${card.data[0].name}"/>
    <h1>${card.data[0].name}</h1>
    </figure>
    `
  cardSpot.append(div)
}

function addCardDescription (card) {
  const div = document.createElement('div')
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

const searcherField = document.querySelector('.searcher')
const enteredSearcher = document.querySelector('#enteredSearcher')

searcherField.addEventListener('submit', event => {
  event.preventDefault()
  const desiredCard = enteredSearcher.value
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
  enteredSearcher.value = ''
})
