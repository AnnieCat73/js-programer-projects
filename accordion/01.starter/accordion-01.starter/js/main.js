// BUILDING AN ACCORDION

/*Accordions are components that lets you show or
hide sections of information.

<div class="accordion">
    <div class="accordion-header">

    </div>
    <div class="accordion-content">

    </div>
  </div>

When the page loads, the accordion should be closed. We can
hide the contents by setting display property to none.

/* Closes the accordion
.accordion-content {
  display: none;
}

When we click an accordion’s header, we want to open the accordion.
Since we want to click the accordion’s header, we should wrap the
header’s content in a <button> element.

<header class="accordion-header">
  <h2>
    <button>
      <span class="accordion-title">Cheese</span>
      <div class="accordion-indicator"> ... </div>
    </button>
  </h2>
</header>
////////////
To open the accordion, we can add an is-open class to the
.accordion

<!-- Opened accordion -->
<div class="accordion is-open"> ...</div>
/* Opens the accordion
.accordion.is-open .accordion-content {
  display: grid;
}

///////////////////

//Indicators

f you press +, you will open the accordion
If you press -, you will close the accordion

.accordion .indicator-plus {
  display: block;
}

.accordion .indicator-minus {
  display: none;
}

When the accordion is opened, we need to show the - icon.
We also need to hide the + icon.

.accordion.is-open  .indicator-minus {
  display: block;
}

.accordion.is-open  .indicator-plus {
  display: none;
}

//Opening the first accordion with Javascript
*/

const firstAccordion = document.querySelector(".accordion");
//console.log(firstAccordion);
const firstAccordionHeader = document.querySelector(".accordion__header");
//console.log(firstAccordionHeader)//

/*firstAccordionHeader.addEventListener('click', event => {
  // Do something
}) To open the first accordion’s content, you add the is-open class to the 
first accordion. SO ADD THE CLASS TO CSS so becomes this*/

firstAccordionHeader.addEventListener('click', event => {
  if (firstAccordion.classList.contains('is-open')) {
    firstAccordion.classList.remove('is-open')
  } else {
    firstAccordion.classList.add('is-open')
  }
})

//or
/*firstAccordionHeader.addEventListener('click', event => {
  firstAccordion.classList.toggle('is-open')
})*/

/*OTHER STUFF WE CAN CHANGE HERE

1)USING EARLY RETURNS

From this:

accordionContainer.addEventListener('click', event => {
  const accordionHeader = event.target.closest('.accordion__header')

  if (accordionHeader) {
    // Open and close accordion
  }
})

To this: We can simplify this with an early return.

accordionContainer.addEventListener('click', event => {
  const accordionHeader = event.target.closest('.accordion__header')
  if (!accordionHeader) return

  // Open and close accordion
})

2) USING TERNARY OPERATORS

When we get the height of the accordion, we did this:

let height;

if (accordion.classList.contains('is-open')) {
  height = 0;
} else {
  height = accordionInner.getBoundingClientRect().height;
}
We can rewrite this with a ternary operator.

const height = accordion.classList.contains('is-open');
  ? 0;
  : accordionInner.getBoundingClientRect().height;

3) USING TEMPLATE LIETERALS

From this:
accordionContent.style.height = height + 'px';
We can simplify this a bit with template literals.

To this:
accordionContent.style.height = `${height}px`;