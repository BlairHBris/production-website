
function backToTop () {
  document.documentElement.scrollTop = 0
}
document.querySelector('#backToTop').addEventListener('click', event => {
  backToTop()
})

const usernameField = document.querySelector('.username')
const enteredUsername = document.querySelector('#enteredUsername')

usernameField.addEventListener('submit', event => {
  event.preventDefault()
  localStorage.setItem('username', enteredUsername.value)
  enteredUsername.value = ''
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
