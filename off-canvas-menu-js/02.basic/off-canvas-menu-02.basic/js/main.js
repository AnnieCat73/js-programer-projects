// Your JavaScript goes here
const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', _ => {
  body.classList.toggle('offsite-is-open')
})

//WITH ANIMATIONS

/*In CSS

ANIMATING  BUTTON
button {
  border: 2px solid currentColor;
  transition: background-color 0.3s ease-out;
}

TRANSITIONS WHEN CONTAINERS SLIDE IN AND OUT
.site-container {
  transition: transform 0.3s ease-out;
}

.offsite-container {
  transition: transform 0.3s ease-out;
}*/