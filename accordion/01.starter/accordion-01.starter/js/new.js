// BUILDING AN ACCORDION

/*Accordions are components that lets you show or
hide sections of information.*/


//So when click on accordion header the content should open

/*1) Get 1st accordion and accordion content
const firstAccordion = document.querySelector('.accordion');
const firstAccordionHeader = document.querySelector('.accordion-header');
const firstAccordionContent = document.querySelector(".accordion-content");
//console.log(firstAccordion)

/*2)Add eventlistener to accordion and display content if click on it
firstAccordionHeader.addEventListener('click', event => {
  if (firstAccordionContent.classList.contains('is-open')) {
    firstAccordionContent.classList.remove('is-open');
  } else {
    firstAccordionContent.classList.add('is-open');
  }
})

//3) but when click on accordion again it should go back to normal
//so add if statement and is-open class in css, so would become this:


//4)Now needs to do this on all accordions
//Select them all

//1 OPTION - SELECT EACH ONE
const accordionsHeaders = document.querySelectorAll(".accordion-header");
//console.log(accordions);
//const firstAccordion = accordions[0];
const secondAccordionHeader = accordionsHeaders[1];
const thirdAccordionHeader = accordionsHeaders[2];
const fourthAccordionHeader = accordionsHeaders[3];

const accordionContents = document.querySelectorAll(".accordion-content");
//console.log(accordionContents) get a node list
//const firstAccordionContent = accordionContents[0];
const secondAccordionContent = accordionContents[1];
const thirdAccordionContent = accordionContents[2];
const fourthAccordionContent = accordionContents[3];

secondAccordionHeader.addEventListener("click", () => {
  secondAccordionContent.classList.toggle("is-open");
});

thirdAccordionHeader.addEventListener("click", () => {
  thirdAccordionContent.classList.toggle("is-open");
});

fourthAccordionHeader.addEventListener("click", () => {
  fourthAccordionContent.classList.toggle("is-open");
});*/


//2 OPTION as do the same for each we can loop with for Each instead
const accordions = Array.from(document.querySelectorAll(".accordion"));
const accordionContents = Array.from(document.querySelectorAll(".accordion-content"));
const accordionHeaders = Array.from(document.querySelectorAll(".accordion-header"));
const accordion = document.querySelector(".accordion");
//console.log(accordionContents)
//console.log(accordions)
accordionContents.forEach(accordionContent => {
  const accordionHeaders = Array.from(document.querySelectorAll(".accordion-header"));
  accordionHeaders.addEventListener("click", event => {
    accordionContent.classList.toggle("is-open");
  })

})