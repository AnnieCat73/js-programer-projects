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

<header class="accordion__header">
  <h2>
    <button>
      <span class="accordion-title">Cheese</span>
      <div class="accordion-indicator"> ... </div>
    </button>
  </h2>
</header>
*/