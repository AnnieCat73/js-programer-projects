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
accordionContent.style.height = `${height}px`;/*


/*MORE REFACTORING WITH BEST PRACTICES IN MIND

SO CODE SO FAR FOR ACCORDION:

const accordionContainer = document.querySelector('.accordion-container');

accordionContainer.addEventListener('click', event => {
  const accordionHeader = event.target.closest('.accordion-header')
  if (!accordionHeader) return

  const accordion = accordionHeader.parentElement;
  const accordionContent = accordionHeader.nextElementSibling;
  const accordionInner = accordionContent.children[0];
  const height = accordion.classList.contains('is-open');
    ? 0
    : accordionInner.getBoundingClientRect().height;

  accordion.classList.toggle('is-open');
  accordionContent.style.height = `${height}px`;
});

FROM THE ABOVE WE CAN REFACTOR WITH BEST PRACTICES

1) First two lines in the event listener

The first two lines of code in the event listener tell us whether we want the event
listener to do anything.
SO WE SHOULD NOT MOVE THEM AWAY - STATY THE SAME

accordionContainer.addEventListener('click', event => {
  // These will stay in the event listener
  const accordionHeader = event.target.closest('.accordion-header');
  if (!accordionHeader) return
  // ...
});

2)Three of the next four lines of code are used to get the .accordion-inner's height.
SO FROM THIS:

const accordion = accordionHeader.parentElement

  // These three lines are used to get content's height
  const accordionContent = accordionHeader.nextElementSibling;
  const accordionInner = accordionContent.children[0];
  const height = accordion.classList.contains('is-open');
    ? 0
    : accordionInner.getBoundingClientRect().height;;
  // ...
});
TO
(This code is imperative. You have to go through it to understand what it does.
We can make the code declarative by creating a function.)

const getContentHeight = () => {
  const accordionContent = accordionHeader.nextElementSibling;
  const accordionInner = accordionContent.children[0];
  const height = accordion.classList.contains('is-open');
    ? 0;
    : accordionInner.getBoundingClientRect().height;
}
When we call getContentHeight, we expect to get a height value. To get a height
value, we need to return height from getContentHeight.

const getContentHeight = () => {
  const accordionContent = accordionHeader.nextElementSibling;
  const accordionInner = accordionContent.children[0];
  return accordion.classList.contains('is-open');
    ? 0;
    : accordionInner.getBoundingClientRect().height;
}

Now, we can see getContentHeight requires two variables:

1) accordionHeader. This is used to get accordionContent and then accordionInner.
2) accordion. We used this to check whether the accordion is opened.
SO:
const getContentHeight = accordion => {
  const accordionInner = accordion.querySelector('.accordion-inner');

  if (accordion.classList.contains('is-open')) return 0;
  return accordionInner.getBoundingClientRect().height;
};

3)Last two lines

accordionContainer.addEventListener('click', event => {
  // ...
  accordion.classList.toggle('is-open');
  accordionContent.style.height = `${height}px`;
})
We can put them in a function that says updateAccordion.

const updateAccordion = () => {
  accordion.classList.toggle('is-open');
  accordionContent.style.height = `${height}px`;
}

accordionContainer.addEventListener('click', event => {
  // ...
  accordion.classList.toggle('is-open')
  accordionContent.style.height = `${height}px`
})

We can put them in a function that says updateAccordion.

const updateAccordion = () => {
  accordion.classList.toggle('is-open');
  accordionContent.style.height = `${height}px`;
}

If the function name says updateAccordion, we expect code inside update the accordion only. 
So we pass height into updateAccordion.

const updateAccordion = (accordion, height) => {
  const accordionContent = accordion.querySelector('.accordion__content')

  // Updates the accordion
  accordion.classList.toggle('is-open')
  accordionContent.style.height = `${height}px`
}
Using updateAccordion:

accordionContainer.addEventListener('click', event => {
  // ...
  updateAccordion(accordion, height);
})

4) Ordering functions and variables
In this case, none of our functions require variables from the global scope. We can 
declare them upfront before they’re used.

const getContentHeight = accordion => { /* ... */ }
const updateAccordion = (accordion, height) => { /* ... */ }

const accordionContainer = document.querySelector('.accordion-container')
accordionContainer.addEventListener('click', event => {
  // ...
});
