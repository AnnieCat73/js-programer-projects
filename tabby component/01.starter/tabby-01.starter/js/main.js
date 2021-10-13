//TABBED COMPONENT or 'TABBY'

/*HTML contains:

The tabs.
The contents of each tab (we’ll call this tab-content).NB DO DRAWING

One tab (and its corresponding content) must always be selected.
We’ll add the is-selected class to the first tab and tab content.

<div class="tabby">
  <div class="tabs">
    <button class="tab is-selected">Tab 1</button>
    <button class="tab">Tab 2</button>
    <button class="tab">Tab 3</button>
  </div>

  <div class="tab-contents">
    <section class="tab-content">Content 1</section>
    <section class="tab-content">Content 2</section>
    <section class="tab-content">Content 3</section>
  </div>
</div>

Styling:

//If a tab is selected, it should be emphasized.

/* De-emphasize tabs that are not selected
.tab {
  filter: grayscale(75%) brightness(0.9);
}

/* Emphasize the selected tab
.tab.is-selected {
  filter: none;
  background-color: white;
}

//When a tab is selected, its corresponding tab-content should be displayed.
Other tabs are hidden. We can do this with display: none.

/* Hides tab-content when it is not selected
.tab-content {
  display: none;
}

/* Show the selected tab-content
.tab-content.is-selected {
  display: block;
}

//Switching tabs
If you want to switch to the second tab, you need to:

1)Remove is-selected from the first tab.
2)Remove is-selected from the first tab content.
3)Add is-selected to the second tab.
4)Add is-selected to the second tab content.

//Switching tabs with JS

When a user clicks on a Tab, you want to switch to the tab they clicked. Here, you need to:

1)Add event listeners to each tab
2)Find the tab they clicked
3)Find the corresponding tab content
4)Remove is-selected from other tabs to de-emphasize them
Remove is-selected from other tab content to hide them
5)Add is-selected to the tab they clicked to emphasize it
Add is-selected to the tab content to show it*/

const tabs = Array.from(document.querySelectorAll('.tab'))

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    // Do something here
  })
})