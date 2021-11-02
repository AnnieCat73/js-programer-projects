const jsModalButton = document.querySelector(".jsModalButton");
const jsModalCloseButton = document.querySelector(".jsModalClose");
//const body = document.body;

jsModalButton.addEventListener("click", (e) => {
  document.body.classList.add("modal-is-open");
});
jsModalCloseButton.addEventListener("click", (e) => {
  document.body.classList.remove("modal-is-open");
});

/*WITH TRANSITIONS IN CSS add this to your css file

//FOR BUTTON
.button {
  transition: background-color 0.3s ease-out;
}

FOR OVERLAY
Here’s how we can delay the z-index transition by 3 seconds

.modal-overlay {
  transition: opacity 3s ease-out, z-index 0s 3s linear;
}

When we open the modal, we do not want to delay the z-index transition

.modal-is-open .modal-overlay {
  transition-delay: 0s;
}

FOR HAND

The hand is invisible at the start. It becomes visible later.
This means you need to change opacity

@keyframes point {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.point-hand {
  animation: point 1s ease-out;
}

Second, the hand slides in from the bottom. This means you need to move
the hand. You can move the hand with translateY. SO BECOMES THIS:

@keyframes point {
  0% {
    transform: translateY(3em);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.point-hand {
  animation: point 1s ease-out;
}

Third, the hand moves past its final position before moving back down
@keyframes - too complicated!

.point-hand {
  animation: point 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

THE WAVING HAND INSIDE THE MODAL

MUST USE CSS ANIMATION as it's too complicated

1) THE ZOOMING PART

To make the hand turn opaque, we use opacity
To make the hand zoom up, we use scale

/* Makes waving hand zoom out
@keyframes zoom {
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.wave-hand {
  /* This is the backwards cubic-bezier curve
  animation: zoom 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

when we’re building the animation, it helps to see the animation right away.
We will add the modal-is-open class to <body> to help us see the animation.

<body class="modal-is-open"><!-- ... --></body>

2) THE WAVING PART

Our hand moves to these six points:

1) Begins straight upright
2) Rotates to its left (your right)
3) Rotates to its right (your left)
4) Rotates to its left again
5) Rotates to its right again
6) Goes back to the starting position

@keyframes wave {
  0% { /* Start at center / }
  20% { /* Rotate to its left / }
  40% { /* Rotate to its right / }
  60% { /* Rotate to its left / }
  80% { /* Rotate to its right / }
  100% { /* Back to center / }
}

the hand rotates by 15 degrees in each wave. To rotate clockwise,
you set rotate to 15 degrees. To rotate anti-clockwise, you set rotate
to -15 degrees.

@keyframes wave {
  0% { transform: rotate(0); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-15deg); }
  60% { transform: rotate(15deg); }
  80% { transform: rotate(-15deg); }
  100% { transform: rotate(0); }
}

.wave-hand {
  animation: wave 1s ease-in-out;
}

You want the hand to rotate about the bottom center part so the animation
looks natural. To do so, you change transform-origin (which tells CSS
where to animate from) to bottom center.
NB DELETE THE OTHER STUFF ON .wave-hand AND REPLACE IT WITH THIS
TO SEE IT MOVING CLICK ON IT

.wave-hand {
  transform-origin: bottom center;
  animation: wave 1s ease-in-out;
}

Next, we combine the zoom animation with the wave animation together in the
wave-hand selector.
Since zoom comes first, let’s put zoom before wave in the animation property.
We’ll add a slight delay to the wave animation to make sure it comes after zoom.

.wave-hand {
  transform-origin: bottom center;
  animation: zoom 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), wave 1s 0.55s
  ease-in-out;
}

3) WAVE HAND WHEN OPENING THE MODAL

Remove modal-is-open from your HTML BUT DO THIS

.wave-hand {
  /* remove animation from here /
}

.modal-is-open .wave-hand {
  transform-origin: bottom center;
  animation: zoom 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28),
    wave 1s 0.55s ease-in-out;
}

*/