let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
const allDots = document.querySelectorAll(".dot");

allDots.forEach((dot, index) => {
  dot.addEventListener("click", currentSlide.bind(this, ++index));
});

prevButton.addEventListener("click", plusSlides.bind(this, -1));
nextButton.addEventListener("click", plusSlides.bind(this, 1));

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // console.log(slides);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
