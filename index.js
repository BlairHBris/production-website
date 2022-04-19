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
  const formData = new FormData(event.target)
  const startingPlace = formData.get("startingPlace")
  switch (startingPlace) {
    case 'basics':
      location.href = 'basics.html'
      break
    case 'anime':
      location.href = 'anime.html'
      break
    case 'cs':
      location.href = 'cs.html'
      break
    case 'home':
      location.href = 'index.html'
      break
  }
})