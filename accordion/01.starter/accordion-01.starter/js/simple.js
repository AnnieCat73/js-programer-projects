//Select all btns and store them in an array

let btn = document.querySelectorAll(".btn");
//console.log(btn); get nodelist

//loop thru all the buttons with forEach() of an array
//forEach(value, index, aray)
//btn is the array value
//index is the array index
//array is the array itself

btn.forEach(function (btn, index) {
  //add eventlistener for each of the buttons
  btn.addEventListener("click", function () {
    this.classList.toggle("active");

    //now select all the panels and store them in an array
    let panel = document.querySelectorAll(".panel");
    //console.log(panel)

    //now lets add some conditions to open and close the panel
    if (panel[index].style.maxHeight == 0) {
      panel[index].style.maxHeight = panel[index].scrollHeight + 'px';
    } else {
      panel[index].style.maxHeight = null;
    }
  });
});