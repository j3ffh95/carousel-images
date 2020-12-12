// Global Elements Variables
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
const allDots = document.querySelectorAll(".dot");

// Iterate the allDots Nodelist to add event listeners when clicked
allDots.forEach((dot, index) => {
  dot.addEventListener("click", currentSlide.bind(this, ++index));
});

// Event listeners to the prev and next buttons
// Using the bind method to add arguments to the plusSlides function
prevButton.addEventListener("click", plusSlides.bind(this, -1));
nextButton.addEventListener("click", plusSlides.bind(this, 1));

// Assign a 1 to a variable slideIndex
let slideIndex = 1;
// We call the function of showSlides with the argument of slideIndex which is 1
// showSlides(slideIndex);
setInterval(() => {
  showSlides(slideIndex);
}, 200);

// This function takes in an argument and calls the showSlides function, adding the slideIndex with the argument passed
// so if is 1 (for next) then the argument will be 2, so showSlides(2)
// if is -1 (for prev) then the arg will be 0
function plusSlides(num) {
  showSlides((slideIndex += num));
}

// This function also takes in a arg and calls showSlides func, but in the param we assign slideIndex with current arg
function currentSlide(num) {
  showSlides((slideIndex = num));
}

// This function is the one with the logic to show each slide
function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  // console.log(slides);
  // If the number of the slide passed in is greater than the number of slides there are then reassign the index to 1 in order to show the first one again.
  if (n > slides.length) {
    slideIndex = 1;
  }
  // If the SlideNumber is less than 1 then reassign the slideIndex to the last slide.
  if (n < 1) {
    slideIndex = slides.length;
  }

  // We iterate through the slides node list to change its display to none
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Iteration through the dot list to replace the class of active to nothing
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
