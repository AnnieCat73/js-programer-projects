/*2 WAYS OF DOING A MODAL

<main>
  <div class="main-page-container">
      <button class="btn open-modal">Open Modal</button>
  </div>
  <nav class="nav">
    <button class="close-nav">X</button>
    <ul class="nav-list">
      <li><a href="#" class="nav-link">Home</a></li>
      <li><a href="#" class="nav-link">About</a></li>
      <li><a href="#" class="nav-link">Contact</a></li>
    </ul>
  </nav>
</main>

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  transform: translateX(0);
  transition: transform 250ms;
}       

.open-modal-nav {
  transform: translateX(-100%);
}


const openModalBtn = document.querySelector(".open-modal");
const nav = document.querySelector(".nav");
const closeNavBtn = document.querySelector(".close-nav");

openModalBtn.addEventListener("click", function () {
  nav.style.left = "0";
});

closeNavBtn.addEventListener("click", function () {
  nav.classList.add("close-modal-nav");
});

//or 2:


/*.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  z-index: -1;
  opacity: 0;
}

add in html <body class="modal-is-open"> then

.modal-is-open .nav {
  opacity: 1;
  z-index: 1;
}*/

const openModalBtn = document.querySelector(".open-modal");
const nav = document.querySelector(".nav");
const closeNavBtn = document.querySelector(".close-nav");

openModalBtn.addEventListener("click", function (e) {
  document.body.classList.add("modal-is-open");
});

closeNavBtn.addEventListener("click", function (e) {
  document.body.classList.remove("modal-is-open");
});

