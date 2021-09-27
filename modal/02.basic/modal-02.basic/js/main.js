const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')

modalButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})
