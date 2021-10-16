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
.carousel__slide:nth-child(2) {
  left: 800px;
}

.carousel__slide:nth-child(3) {
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

4) Switching slides--I THINK YOU DO THIS IN JS NOT CSS

You can change carousel-contents left property to decide which slide to
show.

1)To show second slide, set carousel__content's left to -800px
2)To show third slide, set carousel__content's left to -1600px


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