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
    enteredUsername.value=""
})