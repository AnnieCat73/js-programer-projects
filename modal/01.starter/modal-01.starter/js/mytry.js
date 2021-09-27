const jsModalButton = document.querySelector(".jsModalButton");
const jsModalCloseButton = document.querySelector(".jsModalClose");
//const body = document.body;

jsModalButton.addEventListener("click", (e) => {
 document.body.classList.add("modal-is-open");
});
jsModalCloseButton.addEventListener("click", (e) => {
 document.body.classList.remove("modal-is-open");
});

