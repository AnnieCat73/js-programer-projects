/*<body>
    <div class="offsite-container">
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="site-container">
      <h1>Click the button to open the sidebar!</h1>
      <button>
        <span>Menu</span>
      </button>
    </div>*/

// Start writing JavaScript here!

/*In short, you need to:

1)Add an event listener to the button.
2)Push screen to the right when button gets clicked.
3)Push screen back when button gets clicked again.


const button = document.querySelector("button");
const body = document.body;

/*1)Add an event listener to the button.
button.addEventListener("click", (e) => {
  
});

//2)Push screen to the right when button gets clicked.

/*We don’t want to push the containers when the website gets loaded.
We only want to push the containers when the button is clicked.
The easiest way to tell whether the menu should be open is to add a
class to <body>.*/

//add .offsite-is-open class to both containers to css
/*.offsite-is-open .offsite-container,
.offsite-is-open .site-container {
  transform: translateX(14rem);
}
button.addEventListener("click", (e) => {
 body.classList.add("offsite-is-open") 
});



//3)Push screen back when button gets clicked again.
When the button gets clicked for the second time, you want to push 
the screen back to the left. To do this, you remove offsite-is-open
from <body>.

1)Check whether <body> has the offsite-is-open class.
2)If it has the class, remove the class.
3)If it does not have the class, add the class.
//so
button.addEventListener('click', event => {
  if (body.classList.contains('offsite-is-open')) {
    // Remove .offsite-is-open to close the menu
  } else {
    // Add .offsite-is-open to open the menu
  }
})
//which is:
button.addEventListener("click", (e) => {
 if (body.classList.contains("offsite-is-open")) {
   body.classList.remove("offsite-is-open");
 } else {
   body.classList.add("offsite-is-open");
 }
});

// or another way
button.addEventListener("click", (e) => {
 body.classList.toggle("offsite-is-open");
});

//So refactored code:*/
const button = document.querySelector("button");
const body = document.body;

/*button.addEventListener("click", (e) => {
 if (body.classList.contains("offsite-is-open")) {
   body.classList.remove("offsite-is-open");
 } else {
   body.classList.add("offsite-is-open");
 }
});*/
//or
button.addEventListener("click", (e) => {
  body.classList.toggle("offsite-is-open");
 });
 