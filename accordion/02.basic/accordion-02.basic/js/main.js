const accordions = Array.from(document.querySelectorAll('.accordion'))

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion__header')

  accordionHeader.addEventListener('click', event => {
    accordion.classList.toggle('is-open')
  })
})

//EVENT DELEGATION PATTERN SO HERE ATTACH THE EVENT LISTENER
//TO THE NEAREST COMMON ANCESTOR OF ALL ELEMENTS YOU WANT TO 
/*LISTEN TO

In this case, the nearest common ancestor is .accordion-container.

<div class="accordion-container">
  <div class="accordion"> ... </div>
  <div class="accordion"> ... </div>
  <div class="accordion"> ... </div>
  <div class="accordion"> ... </div>
</div>

const accordionContainer = document.querySelector(".accordion-container");
accordionContainer.addEventListener("click", e => {
  console.log(e.target);//get each button we are clicking on
});

/*If the user clicked inside .accordion__header, we want to show (or hide)
the accordion. If the user clicked inside .accordion__content, we want to
ignore those clicks.To do this, we can check if .accordion__header is an
ancestor of the event.target.*/

const accordionContainer = document.querySelector(".accordion-container");
accordionContainer.addEventListener("click", e => {
  //is .accordion_header ancestor of e.target?
  const accordionHeader = e.target.closest(".accordion_header");
  //check it so 
  if (accordionHeader) {
    //then must go  up to accordion/its parent and add/remove is-open class
    const accordion = accordionHeader.parentElement;
    accordion.classList.toggle("is-open");
  }
});
