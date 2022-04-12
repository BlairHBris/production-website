
function backToTop () {
  document.documentElement.scrollTop = 0
}
document.querySelector('#backToTop').onclick = backToTop

const usernameField = document.querySelector('.username')
const enteredUsername = document.querySelector('#enteredUsername')

usernameField.addEventListener('submit', name => {
  name.preventDefault()
  localStorage.setItem('username', enteredUsername.value)
  enteredUsername.value = ''
})

const startingPlaceField = document.querySelector('.startingPlace')
const requestedStartingPlace = document.querySelector('#requestedStartingPlace')

startingPlaceField.addEventListener('submit', destination => {
  destination.preventDefault()
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
