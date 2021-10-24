const jsModalButton = document.querySelector(".jsModalButton");
const jsModalCloseButton = document.querySelector(".jsModalClose");
//const body = document.body;

jsModalButton.addEventListener("click", (e) => {
  document.body.classList.add("modal-is-open");
});
jsModalCloseButton.addEventListener("click", (e) => {
  document.body.classList.remove("modal-is-open");
});

//CLOSE MODAL WHEN USER CLICKS OUTSIDE OF THE MODAL (OVERLAY)
//BUT NOT INSIDE THE MODAL

const modalOverlay = document.querySelector(".modal-overlay");


modalOverlay.addEventListener("click", e => {
  document.body.classList.remove("modal-is-open");
  console.log(e.target);//<div class="modal-overlay"
});

//BUT HERE CAN STILL CLOSE WHEN CLICK IN BUTTON/INSIDE MODAL

/*When you click on the modal, the click event bubbles upwards towards the
overlay.When this click event hits the overlay, it triggers the event
listener we just wrote.And it closes the modal.

The most straightforward way to prevent the modal from closing is to prevent 
the event from bubbling upwards.*/

const modal = document.querySelector(".modal");
/*modal.addEventListener("click", e => {
  e.stopPropagation();
});*/

/*NB A PROBLEM WITH STOP stopPropagation():
What if you need to listen for a click event on <body>, and you expect
this click event to bubble upwards from inside the modal?

This click event on <body> will not trigger because you stopped the
event from bubbling upwards. The event will never reach <body>.

SO A BETTER WAY

This means we can check whether the event passes through the modal.
If it passes through the modal, we know we should not close the modal.
We can check if the modal is an ancestor of the event.target. If the
modal is an ancestor, we know the event will bubble through the modal.

modalOverlay.addEventListener('click', event => {
  if (event.target.closest('.modal')) {
    // Do nothing
  } else {
    // Close modal
    document.body.classList.remove('modal-is-open')
  }
}); //OR BETTER CODE*/

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    // Close modal
    document.body.classList.remove('modal-is-open')
  }
})

/*NB TO REMEMBER STILL:
e.target will be one of the 10 buttons and e.currentTarget will always be
the "btns" clip.
<ul class="btns">e.currentTarget
  <li><button></button></li>e.target
  <li><button></button></li>
  <li><button></button></li>
   etc
</ul>*/

