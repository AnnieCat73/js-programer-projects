const button = document.querySelector(".btn");
const body = document.body;

/*button.addEventListener("click", function (e) {
  body.classList.add("move");
});

button.addEventListener("click", function (e) {
  body.classList.add("move");
});*/

button.addEventListener("click", function (e) {
  if (body.classList.contains("move")) {
    body.classList.remove("move");
  } else {
    body.classList.add("move");
  }
});


