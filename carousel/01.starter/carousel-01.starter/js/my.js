/*CAROUSEL

Basic HTML:

<div class="carousel">

    <button class="carousel-button"></button>

    <ul class="carousel-contents">
      <li class="carousel-slide"> ... </li>
      <li class="carousel-slide"> ... </li>
      <li class="carousel-slide"> ... </li>
    </ul>

    <button class="carousel-button"></button>

    <div class="carousel-dots"></div>

</div>

Inside li with images f.ex/here the images links to another
page on the website

<div class="carousel">
    <button class="carousel-button"></button>

    <ul class="carousel-contents">
      <li class="carousel-slide">
        <a href="#">
          <img src="images/image1.jpg" alt="">
        </a>
      </li>
      <li class="carousel-slide">
        <a href="#">
          <img src="images/image2.jpg" alt="">
        </a>
      </li>
      <li class="carousel-slide">
        <a href="#">
          <img src="images/image3.jpg" alt="">
        </a>
      </li>
    </ul>

    <button class="carousel-button"></button>

    <div class="carousel-dots"></div>
</div>

STYLING

1)Slides of a carousel are placed next to each other/see drawing

body {
  display: grid;
  place-items: center;
  height: 100vh;
}

.carousel {
  display: grid;
  grid-template-columns: 3em 800px 3em;
  grid-template-rows: 70vh 3em;
  align-items: center;
  grid-gap: 1em;
}

.carousel > *:nth-child(2) {
  grid-column: 2;
  align-self: stretch;
}


.carousel-contents {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  width: inherit;
  height: inherit;
}

2) Position second and third slide

The second slide is positioned after the first slide. This means we
can set left of the second slide to the width of one slide. If the width
of one slide is 800px, left should be 800px.

The third slide is positioned after the second slide. To position it after
the second slide, we can set left of the third slide to be the width of
two slides. If the width is 800px, left should be 1600px.

/* This code works if the width of one slide is 800px
.carousel-slide:nth-child(2) {
  left: 800px;
}

.carousel-slide:nth-child(3) {
  left: 1600px;
}

3)To show ONE slide at a time must create an extra div to contain
.carousel-contents and set it to overflow hidden

<div class="carousel-contents-container">
  <ul class="carousel-contents"> ... </ul>
</div>

.carousel-contents-container {
  overflow: hidden;
}

3) Styling the slide content

Each slide contains an image wrapped inside a link. Users should be able
to navigate to a desired page if they click anywhere on the image.

This means the <a> tag should cover the entire slide. You can make this
happen by setting:

1) display to block
2) width and height properties to ihnerit.
.carousel-slide > a {
  display: block;
  width: inherit;
  height: inherit;
}
Each image should also fill up the available space. We can do this with
object-fit set to cover.

.carousel-slide img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: center center;
}

4) Switching slides--DO THIS IN JS NOT CSS/getComputedStyle()-SEE BELOW

You can change carousel-contents left property to decide which slide to
show.

1)To show second slide, set carousel-content's left to -800px
2)To show third slide, set carousel-content's left to -1600px


4) THE DOTS

Dots of a carousel indicate two things:

The total number of slides
The currently selected slide
You can click on a dot to change the selected slide. This means each
dot must use a <button> element.

<div class="carousel-dots">
  <button class="carousel-dot"></button>
  <button class="carousel-dot"></button>
  <button class="carousel-dot"></button>
</div>


SWITCHING SLIDES WITH JAVASCRIPT

When a user clicks the right button, the carousel should move to the next
slide. When they click the left button, the carousel should move to the previous slide.

To do this, we need to differentiate between the left and right buttons.
Add in HTML:

<div class="carousel">
  <button class="carousel-button previous-button"> ... </button>
  <div class="carousel-contents-container"> ... </div>
  <button class="carousel-button next-button"> ... </button>
  <div class="carousel-dots"> ... </div>
</div>*/

//1)GET THE ELEMENTS FOR THIS

const carousel = document.querySelector(".carousel");
const previousButton = carousel.querySelector(".previous-button");
const nextButton = carousel.querySelector(".next-button");


//2)WHEN CLICK NEXT BUTTON WE WANT TO SHOW NEXT SLIDE
//To do this we need to know what's the currently displayed slide
/*The easiest way to tell JavaScript about the current slide is through
a class. Since the carousel starts by showing the first slide, we add
an is-selected class to the first slide.

<ul class="carousel-contents">
  <li class="carousel-slide is-selected"> ... </li>
  <li class="carousel-slide"> ... </li>
  <li class="carousel-slide"> ... </li>
</ul>*/

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

//3)HIDING THE PREVIOUS BUTTON

/*So if on first slide only want next button showing etc
To hide the button, we add a HIDDEN ATTRIBUTE to the HTML.

<button class="carousel-button previous-button" hidden> ... </button>
DO THIS IN ABOVE nextButton*/

//4)HIDING THE NEXT BUTTON
/*So if on last slide need to hide the nextButton. How to hide the nxtbtn:

1)When a user clicks the next button
2)We check if there’s one more slide after the nextSlide.
3)If there are no more slides, we know nextSlide is the last slide.
4)If nextSlide is the last slide, we hide the next button by adding
5)the hidden attribute. DO THIS ABOVE IN nextButton*/

//5)ADDING NEXT BUTTON AGAIN WHEN GO BACK A SLIDE FROM LAST SLIDE-here in 
/*2nd slide. Now, if the user clicks the left button, we go back to the
second slide. We must show the next button again (because they can move
back to the third slide). DO THIS ABOVE IN previousButton*/

//6)BACK TO FIRST SLIDE WHEN GOING BACK SLIDES SO MUST HIDE PREVIOUS BUTTON
//AGAIN. Here is how:
/*When a user clicks the previous button
1)We check if there’s one more slide before the previousSlide.
2)If there are no more slides, we know previousSlide is the first slide.
3)If previousSlide is the first slide, we hide the previous button by adding
4)the hidden attribute. DO THIS ABOVE IN previousBUTTON*/

//7 WORKING THE DOTS

/*When a user clicks on a dot, the carousel shows the slide that corresponds
to the clicked dot.

1)Click first dot: Show first slide
2)Click second dot: Show second slide
3)Click third dot: Show third slide HOW:*/

//1)GET THE DOTS

const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
//console.log(dots)//Array(3) [button.carousel-dot.....]

//2)NEED TO KNOW WHEN A DOT GETS CLICKED - ADD EVENTLIST TO EACH DOT

dots.forEach(dot => {
  dot.addEventListener("click", event => {

  });
})

//3) WHEN A DOT IS CLICKED WE NEED TO FIND ITS CORRECSPONDING SLIDE
/* SO:
First dot: First slide
Second dot: Second slide
Third dot: Third slide

3a) SO DID THE USER CLICK first, second or third slide ie the position of the dot
that was clicked

If the user clicks the first dot, dots[0] and dot should be the same thing.
We can compare them with the strictly equal operator ===

dots.forEach(dot => {
  dot.addEventListener("click", event => {
    if (dots[0] === dot) {
      console.log("Clicked first dot");
    } else {
      console.log("Clicked another dot");
    }
  });
})

3b)/*The same applies for other dots:

If user clicks second dot, dot[1] === dot
If user clicks third dot, dot[2] === dot   WE CAN INSTEAD LOOP TRHU
AND CHECK WHICH DOT WAS CLICKED*/

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


//8)UPDATING DOT STATE 

/*We can style the selected dot with an is-selected class.

<div class="carousel__dots">
  <button class="carousel__dot is-selected"></button>
  <button class="carousel__dot"></button>
  <button class="carousel__dot"></button>
</div>

To update the styled dot, we remove the is-selected class from all other
dots. And we add is-selected back to the clicked dot.

dots.forEach(dot => {
  dot.addEventListener('click', event => {
    // ...
    dots.forEach(d => {
      d.classList.remove('is-selected')
    })
    dot.classList.add('is-selected')
  })
})*/


//9) UPDATING DOT STATE WHEN CLICKING BUTTONS
/*Dots should also get updated when a user clicks the previous and next
buttons. When the user clicks the next button, we need to find the selected
dot with querySelector. Then, we find the next dot with nextElementSibling.
Then, we remove and add the is-selected class accordingly.
SO GO BACK UP TO NEXT/PREVIOUS BTNS AND ADD CODE. SELECT .carousel-dot FIRST
*/

//10 SHOWING/HIDING PREVIOUS AND NEXT BUTTONS
/*a)If the user clicks on the first dot, we need to hide the previous button, but
show the next button.
b)If the user clicks the second dot, we need to show both
the previous and next buttons.
c)If the user clicks the third dot, we need to show the previous button,
but hide the next button.*/

/*When a user clicks the first dot, we want to show the next button, but
hide the previous button. We can use clickedDotIndex to check if they’re
clicking on the first dot

We know these to be true:

If clickedDotIndex is 0, they click the first dot
If clickedDotIndex is 1, they click the second dot
If clickedDotIndex is 2, they click the third dot

SO ADD THIS TO dots.forEach() above

dots.forEach(dot => {
  dot.addEventListener('click', event => {
    // ...

    // Show / hide buttons
    if (clickedDotIndex === 0) {
      previousButton.setAttribute('hidden', true)
      nextButton.removeAttribute('hidden')
    }
  })
})*/

//11) MAKE CAROUSEL RESPONSIVE WITH JS POSITIONING THE SLIDES

//First make sure it's not in px
/*
Change this
.carousel {
grid - template - columns: 3em 800px 3em;
}

To this
.carousel {
grid-template-columns: 3em 80vw 3em;
} THEN REMOVE THESE

/* Remove these
.carousel__slide:nth-child(2) {
left: 800px;
}

.carousel__slide:nth-child(3) {
left: 1600px;
}

11a)GET A SLIDES WIDTH - WE KNOW THIS:
left of second slide should be one slide’s width.
left of third slide should be two slide’s width.
We need to find the width of one slide first. We can get
the width of one slide with getBoundingClientRect*/

//const rect = slides[0].getBoundingClientRect()
//console.log(rect);

/*We can get the width of one slide with the width property from
getBoundingClientRect.

const rect = slides[0].getBoundingClientRect();
const slideWidth = rect.width;

console.log(slideWidth);//f.ex 400 OR CAN SHORTEN THE CODE TO*/

//const slideWidth = slides[0].getBoundingClientRect().width;

//11)b We want to position the slides with JavaScript

/*First slide’s left should be 0px
Second slide’s left should be slideWidth
Third slide’s left should be two slideWidths
slides[0].style.left = '0px'
slides[1].style.left = slideWidth + 'px'
slides[2].style.left = slideWidth * 2 + 'px'
To make the calculations consistent, you can substitute the above with this:

slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';*/

//11c) OR USE A forEach LOOP TO POSITION THE SLIDES
const slideWidth = slides[0].getBoundingClientRect().width;



slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
})

