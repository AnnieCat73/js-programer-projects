//Switch tabs

//1)remove is-selected from tab that is now selected
//2)remove is-selected from tab-content that is now selected
//3)add is-selected to the new tab that is selected
//4)add is-selected to the new tab content that is selected

//so in JS
//add eventListenter to each tab
//find the tab and its content that was clicked on
//remove is-selected from other tabs plus their contents
//add is-selected to tab plus it's content that was selected

//1 add Eventlistener

const tabsAll = document.querySelectorAll(".tabs");
console.log(tabsAll);

Array.from(tabsAll).forEach(function (tab) {
  tab.addEventListener('click', event => {
    console.log(tab)
  });
});

//2 Finding the clicked tab
tabsAll.forEach(tab => {
  tab.addEventListener('click', event => {
    console.log(tab);
  });
});


//3 Find its content - use data-target in bth and id of same for each
//then when clicks a tab get the target from data-target

const tabby = document.querySelector('.tabby');

tabsAll.forEach(tab => {
  tab.addEventListener('click', event => {
    const target = tab.dataset.target;
    console.log(target)
    //to find its content need to select right tab-content
    const tabContent = tabby.querySelector('#' + target);
    console.log(tabContent);
    //selecting tab

    //selecting a tab-content
  });
});
//Selecting tab