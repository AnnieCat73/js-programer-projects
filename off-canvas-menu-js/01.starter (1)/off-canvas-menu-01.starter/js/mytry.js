const btn = document.getElementById("button");
console.log(btn)
const container = document.getElementById("container");
const offCanvas = document.getElementById("off");
const mainContent = document.getElementById("main-content");
btn.addEventListener("click", () => {
  offCanvas.classList.remove("off-canvas-menu");
  container.style.display = "flex";
  mainContent.style.order = "2";
  mainContent.style.transform = "translateX(90px)";
  mainContent.style.paddingLeft = "0";
  //move main content
  offCanvas.style.flexBasis = "30%"
  
});