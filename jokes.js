const readJokesButton = document.querySelector('.read-jokes-button')
const jokesContainer = document.querySelector('.big-box')
let aydri = false
readJokesButton.addEventListener('click', () => {
  aydri = !aydri
  jokesContainer.classList.toggle('no-big-box')
  if (aydri) {
    readJokesButton.innerHTML = 'Remove Jokes'
  } else {
    readJokesButton.innerHTML = 'Read Jokes'
  }
})

// } else {
//    readJokesButton.innerHTML = 'Read Jokes'
//  }
