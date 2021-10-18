/*CAROUSEL REFACTORED

//1)GET THE ELEMENTS FOR THIS

const carousel = document.querySelector(".carousel");
const previousButton = carousel.querySelector(".previous-button");
const nextButton = carousel.querySelector(".next-button");

//2)WHEN CLICK NEXT BUTTON WE WANT TO SHOW NEXT SLIDE

//In JS get it by using querySelector

const contents = carousel.querySelector(".carousel-contents");
const dotsContainer = carousel.querySelector(".carousel-dots");

//2a) CLICKING NEXT BUTTON
nextButton.addEventListener("click", event => {
  const currentSlide = contents.querySelector(".is-selected");
  //console.log(currentSlide);when click on nextButton get
  //<li class="carousel-slide is-selected">

  //GET TO NEXT SLIDE
  const nextSlide = currentSlide.nextElementSibling;
  //console.log(nextSlide);

  //GET THE VALUES FROM 4) ABOVE/ -800px and -1600px TO CHANGE TO NXT SLIDE
  const destination = getComputedStyle(nextSlide).left;
  //console.log(destination);//will say 800px
  //use this destination value to set .carousel-content
  contents.style.left = '-' + destination;//points to contents above

  //THEN NEED TO UPDATE is-selected from currentSlide and add it nextSlide
  currentSlide.classList.remove("is-selected");
  nextSlide.classList.add("is-selected");

  //3)from below - Show previousButton when click on nextButton
  previousButton.removeAttribute("hidden");

  //4)from below - hide nextButton when at last slide
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true);
  }

  //9)Updating dots when click on next button - see below 9)
  //Find selected Dot
  const currentDot = dotsContainer.querySelector(".is-selected");
  //find next dot
  const nextDot = currentDot.nextElementSibling;
  //remove .is-selected from currentDot
  currentDot.classList.remove("is-selected");
  //add .is-selected to nextDot
  nextDot.classList.add("is-selected");

});


//2b) CLICKING PREVIOUS BUTTON
previousButton.addEventListener("click", event => {
  const currentSlide = contents.querySelector(".is-selected");
  //console.log(currentSlide);when click on nextButton get
  //<li class="carousel-slide is-selected">

  //GET TO PREVIOUS SLIDE
  const previousSlide = currentSlide.previousElementSibling;
  //console.log(previousSlide);

  //GET THE VALUES FROM 4) ABOVE/ -800px and -1600px TO CHANGE TO NXT SLIDE
  const destination = getComputedStyle(previousSlide).left;
  console.log(destination);//will say 800px
  //use this destination value to set .carousel-content
  contents.style.left = "-" + destination;//points to contents above

  //THEN NEED TO UPDATE is-selected from currentSlide and add it nextSlide
  currentSlide.classList.remove("is-selected");
  previousSlide.classList.add("is-selected");

  //5)SHOW NEXTBUTTON AGAIN WHEN IN THE MIDDLE SLIDE(S)
  nextButton.removeAttribute("hidden");

  //6)HIDE PREVIOUS BUTTON AGAIN WHEN MOVE BACK SLIDES AND GET TO FIRST ONE
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute("hidden", true);
  }

  //9)Updating dots when click on next button - see below 9)
  //Find selected Dot
  const currentDot = dotsContainer.querySelector(".is-selected");
  //find previous dot
  const previousDot = currentDot.previousElementSibling;
  //remove .is-selected from currentDot
  currentDot.classList.remove("is-selected");
  //add .is-selected to previousDot
  previousDot.classList.add("is-selected");
});


//3)WORKING THE DOTS

//1)GET THE DOTS

const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
//console.log(dots)//Array(3) [button.carousel-dot.....]

/*2)NEED TO KNOW WHEN A DOT GETS CLICKED - ADD EVENTLIST TO EACH DOT
//AND FIND THE CORRESPONDING SLIDE

dots.forEach(dot => {
  dot.addEventListener("click", event => {
    if (dots[0] === dot) {
      console.log("Clicked first dot");
    } else {
      console.log("Clicked another dot");
    }
  });
})  SO NEED TO GET FOR ALL DOTS

const slides = Array.from(carousel.querySelectorAll('.carousel-slide'))

dots.forEach(dot => {
  dot.addEventListener('click', event => {
    let clickedDotIndex;

    for (let index = 0; index < dots.length; index++) {
      if (dots[index] === dot) {
        clickedDotIndex = index;
      }
    }

    //console.log(clickedDotIndex);//get 0 if click on first, then 1 for
    // 2nd etc

    //3c)once we know clickedDotIndex we can use it to find the slide to show
    const slideToShow = slides[clickedDotIndex];
    //console.log(slideToShow);//<li class="carousel-slide">

    //3d)Once we know the slide to show, we can get its left position with
    //getComputedStyle
    const destination = getComputedStyle(slideToShow).left;
    //and show the slide by changing .carousel-contents left position
    contents.style.left = "-" + destination;

    //3e)Then need to update location of .is-selected as otherwise prev/next
    //btns won't work! TO DO THIS NEED TO REMOVE .is-selected for current
    //slide. We can find the selected slide with querySelector
    //const currentSlide = contents.querySelector(".is-selected");
    //currentSlide.classList.remove("is-selected"); or can do this:

    slides.forEach(slide => {
      slide.classList.remove('is-selected');
    })

    //then add .is-selected to newly displayed slide
    slideToShow.classList.add('is-selected');

    //4) SEE BELOW - UPDATE DOT STATE SO the dot you click on is black
    dots.forEach(d => {
      d.classList.remove('is-selected');
    })
    dot.classList.add('is-selected');

    //10 from below - SHOW HIDE BUTTONS WHEN CLICK ON A DOt
    //so if - at first dot
    // if else - here dots.length - 1 is referring to last dot in dots
    // else -last else for show both btns when in a middle slide
    if (clickedDotIndex === 0) {
      previousButton.setAttribute('hidden', true)
      nextButton.removeAttribute('hidden')
    } else if (clickedDotIndex === dots.length - 1) {
      previousButton.removeAttribute('hidden')
      nextButton.setAttribute('hidden', true)
    } else {
      previousButton.removeAttribute('hidden');
      nextButton.removeAttribute('hidden');
    }

  })
})


//4) RESPONSIVENESS - USE A forEach LOOP TO POSITION THE SLIDES
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
})

*/