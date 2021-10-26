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

When a user clicks on a Tab, you want to switch to the tab they clicked. 
Here, you need to:

1)Add event listeners to each tab
2)Find the tab they clicked
3)Find the corresponding tab content
4)Remove is-selected from other tabs to de-emphasize them
Remove is-selected from other tab content to hide them
5)Add is-selected to the tab they clicked to emphasize it
Add is-selected to the tab content to show it

you can use querySelectorAll to select the tabs. Then, you loop through 
each tab with forEach, 
and use addEventListener to add an event listener to each tab.


//1)
const tabs = Array.from(document.querySelectorAll('.tab'))

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    // Do something here
  });
});

//2 Finding the clicked tab
tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    console.log(tab);
  });
});

//3 Find the corresponding tab content
/* designate a target element, we set an attribute (like data-target) of
the tab to the same value as the id of the tab-content.
we can use digimon, pokemon, and tamagotchi instead of content-1, content-2,
content-3), SO:

<div class="tabby">
  <div class="tabs">
    <button ... data-target="content-1">Tab 1</button>
    <button ... data-target="content-2">Tab 2</button>
    <button ... data-target="content-3">Tab 3</button>
  </div>

  <div class="tab-contents">
    <section ... id="content-1">Content 1</section>
    <section ... id="content-2">Content 2</section>
    <section ... id="content-3">Content 3</section>
  </div>
</div> but instead do:

<div class="tabby">
  <div class="tabs">
    <button ... data-target="digimon">Tab 1</button>
    <button ... data-target="pokemon">Tab 2</button>
    <button ... data-target="tamagotchi">Tab 3</button>
  </div>

  <div class="tab-contents">
    <section ... id="digimon">Content 1</section>
    <section ... id="pokemon">Content 2</section>
    <section ... id="tamagotchi">Content 3</section>
  </div>
</div>

When a user clicks a .tab, we get the target from data-target.

const tabby = document.querySelector('.tabby');//so can select tabContent

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    const target = tab.dataset.target
    console.log(target)
    //to find its content need to select right tab-content
    const tabContent = tabby.querySelector('#' + target);//# is for id
    console.log(tabContent);
  });
});

/*SELECTING A TAB
1)Remove is-selected from other tabs to de-emphasize them.
2)Add is-selected to the tab they clicked to emphasize it.
Here’s a simple way to do these two step:

a)We remove is-selected from every tab.
b)We add is-selected back to the clicked tab.

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    // ...
    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')
  })
})

/*Notice we used t as an abbreviation for tab in the forEach loop.
We used t because we don’t want to overwrite the tab variable. tab
is already used for something else; it means the “clicked tab”. If we
used tab, we’ll get the two tab variables mixed up.

SELECTING A TAB-CONTENT
We also need to do two things to select a tab-content:

1)Remove is-selected from other tab content to hide them.
2)Add is-selected to the tab content to show it.

const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    // ...  
    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
  })
})

//OR EVERYTHING IN SHORT

//const tabby = document.querySelector('.tabby');
//const tabs = Array.from(tabby.querySelectorAll('.tab'));
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'));

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    const target = tab.dataset.target
    const tabContent = tabby.querySelector('#' + target);

    // Selects a tab
    tabs.forEach(t => t.classList.remove('is-selected'));
    tab.classList.add('is-selected');

    // Selects the corresponding tab content
    tabContents.forEach(c => c.classList.remove('is-selected'));
    tabContent.classList.add('is-selected');
  });
});*/

//WITH EVENT DELEGATION AS HAS THIS PATTERN:
const tabs = Array.from(document.querySelectorAll('.tab'))

tabs.forEach(tab => {
  tab.addEventListener('click', _ => {
    // ...
  })
})

/*When you use event delegation, you want to attach one event listener to the closest common ancestor that makes sense. In this case, this ancestor is .tabs.

<div class="tabs">
  <button class="tab is-selected"> ... </button>
  <button class="tab"> ... </button>
  <button class="tab"> ... </button>
</div>*/

const tabby = document.querySelector('.tabby');
const tabsList = tabby.querySelector('.tabs');

tabsList.addEventListener('click', event => {
  // Do something
});

/*So need to:

1)Find the clicked tab
2)Find the corresponding tab content
3)Remove is-selected from other tabs to de-emphasize them
4)Add is-selected to the clicked tab to emphasize it
5)Remove is-selected from other tab content to hide them
6)Add is-selected to the corresponding tab-content to show it
Here, we can use event.target to find the clicked tab.*/

tabsList.addEventListener('click', event => {
  const tab = event.target
  console.log(tab);
});

//Once we know the clicked tab, we can get the corresponding 
//tab-content through the data-target attribute.

tabsList.addEventListener('click', event => {
  const tab = event.target;
  const target = tab.dataset.target;
  const tabContent = tabby.querySelector('#' + target);
});

/*We remove is-selected from other tabs to de-emphasize them. 
We also add is-selected to the clicked tab to emphasize it.*/

// ...
const tabs = Array.from(tabby.querySelectorAll('.tab'))

tabsList.addEventListener('click', event => {
  // ...
  // Selects a tab
  tabs.forEach(t => t.classList.remove('is-selected'))
  tab.classList.add('is-selected')
});
/*Finally, we remove is - selected from other tab - content to hide them. 
We also add is - selected to the target tab - content to show it.*/

// ...
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabsList.addEventListener('click', event => {
  // ...
  // Selects the corresponding tab content
  tabContents.forEach(c => c.classList.remove('is-selected'))
  tabContent.classList.add('is-selected')
});
