// BUILDING AN ACCORDION

/*Accordions are components that lets you show or
hide sections of information.


//So when click on accordion and h2 the content should open

/*Simple HTML FOR ONE
<div class="accordion-container">
    <div class="accordion">
      <h2>Section 1</h2>
    </div>

    <div class="accordion-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea
        commodo consequat.
      </p>
    </div>
/div>*/

//1) Get accordion and accordion content
/*const accordion = document.querySelector(".accordion");
//console.log(accordion)//<div class="accordion"></div>

const accordionContent = document.querySelector(".accordion-content")*/

//2)Add eventlistener to accordion and display content if click on it

/*accordion.addEventListener("click", (e) => {
  accordionContent.style.display = "block";
});*/

//3) but when click on accordion again it should go back to normal
//so add if statement and is-open class in css, so would become this:

/*accordion.addEventListener("click", (e) => {
  if (accordionContent.classList.contains("is-open")) {
    accordionContent.classList.remove("is-open");
  } else {
    accordionContent.classList.add("is-open");
  }
});//or toggle*/

/*accordion.addEventListener("click", function (e) {
  accordionContent.classList.toggle("is-open");
});

//4)Now needs to do this on all accordions
//Select them all

//1 OPTION
const accordions = document.querySelectorAll(".accordion");
console.log(accordions);//get a nodelist

//find each accordion
const firstAccordion1 = accordions[0];
const secondAccordion = accordions[1];
const thirdAccordion = accordions[2];
const fourthAccordion = accordions[3];


//then do the same for each accordion-content
const accordionContents = document.querySelectorAll(".accordion-content");
const firstAccordionContent = accordionContents[0];
const secondAccordionContent = accordionContents[1];
const thirdAccordionContent = accordionContents[2];
const fourthAccordionContent = accordionContents[3];

firstAccordion1.addEventListener("click", (e) => {
  firstAccordionContent.classList.toggle("is-open");
});

secondAccordion.addEventListener("click", (e) => {
  secondAccordionContent.classList.toggle("is-open");
});

thirdAccordion.addEventListener("click", (e) => {
  thirdAccordionContent.classList.toggle("is-open");
});

fourthAccordion.addEventListener("click", (e) => {
  fourthAccordionContent.classList.toggle("is-open");
});*/




//4)Now needs to do this on all accordions
//Select them all

//1 OPTION
//const accordions = document.querySelectorAll(".accordion");
//console.log(accordions);//get a nodelist

/*find each accordion
const firstAccordion1 = accordions[0];
const secondAccordion = accordions[1];
const thirdAccordion = accordions[2];
const fourthAccordion = accordions[3];


then do the same for each accordion-content
const accordionContents = document.querySelectorAll(".accordion-content");
const firstAccordionContent = accordionContents[0];
const secondAccordionContent = accordionContents[1];
const thirdAccordionContent = accordionContents[2];
const fourthAccordionContent = accordionContents[3];

firstAccordion1.addEventListener("click", (e) => {
  firstAccordionContent.classList.toggle("is-open");
});

secondAccordion.addEventListener("click", (e) => {
  secondAccordionContent.classList.toggle("is-open");
});

thirdAccordion.addEventListener("click", (e) => {
  thirdAccordionContent.classList.toggle("is-open");
});

fourthAccordion.addEventListener("click", (e) => {
  fourthAccordionContent.classList.toggle("is-open");
});

*/

///


//2 OPTION as do the same for each we can loop with for Each instead
//////////////////CAN'T MAKE IT WORK
//either
//const accordion = document.querySelector(".accordion");//or
//const accordionContent = document.querySelector(".accordion-content");

/*const accordionContents = document.querySelectorAll(".accordion-content");
const firstAccordionContent = accordionContents[0];
const secondAccordionContent = accordionContents[1];
const thirdAccordionContent = accordionContents[2];
const fourthAccordionContent = accordionContents[3];*/

//const accordions = Array.from(document.querySelectorAll(".accordion"));
//const accordionContents = Array.from(document.querySelectorAll(".accordion"));


/*accordions.forEach(accordion => {
  accordion.addEventListener("click", (e) => {
    firstAccordionContent.classList.toggle("is-open");
    secondAccordionContent.classList.toggle("is-open");
  })
});

//DO IF STATEMENT

accordions.forEach(accordion => {
  const accordionHeader = document.querySelector(".accordion-header");

  accordionHeader.addEventListener("click", event => {
    if (accordionHeader)
      accordion.classList.toggle('is-open');
  })
});*/

