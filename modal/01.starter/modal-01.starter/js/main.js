/* STEPS
A modal (also called a dialog) is a component that’s 
invisible to the eyes at first. This modal lies beneath the 
main content.
When you open the modal, you make the modal visible. You also 
raise the modal above your main content. This allows users to 
interact with the modal.

This means the modal should be on a separate <div>.

<div class="container"><!-- Normal content --></div>
<div class="modal-overlay"><!-- Modal content --></div>

The modal has an overlay that covers the entire screen. You can 
use the following CSS to build this overlay.

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

This overlay should be closed at first. We can close it by setting 
opacity to 0. We also need to move the modal beneath the main content 
by setting z-index to -1.

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  z-index: -1;
}

We want to make the modal visible when <body> contains .modal-is-open. 
We can do this by setting opacity back to 1. We also need to raise it 
above the main content so users can interact with the modal. We do this 
by setting z-index to 1.

.modal-is-open .modal-overlay {
  opacity: 1;
  z-index: 1;
}

JS- Opening the modal with JS:
1)Search for the button in JavaScript.
2)Add an event listener.
3)When the button is clicked, add .modal-is-open to <body>.

const modalButton = document.querySelector('.jsModalButton')

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
});

Closing the modal with JavaScript
Users should be able to close the modal in two ways:

Click the X icon.
Click outside the modal.
To close the modal with the X icon, you need to:

Find the X icon.
1)Add an event listener.
2)When the X icon gets clicked, remove .modal-is-open from <body>.
3)const modalCloseButton = document.querySelector('.jsModalClose')

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})*/