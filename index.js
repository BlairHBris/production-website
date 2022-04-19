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
  switch (requestIndex) {
    case 0:
      location.href = 'basics.html'
      break
    case 1:
      location.href = 'anime.html'
      break
    case 2:
      location.href = 'cs.html'
      break
    case 3:
      location.href = 'index.html'
      break
  }
})
