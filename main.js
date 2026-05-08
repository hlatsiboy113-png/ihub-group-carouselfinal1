// main.js - autoplay and simple nav
// beginner-style code, intentionally not perfect

var carouselImages = document.getElementById('carouselImages');
var slides = carouselImages.children;
var totalSlides = slides.length;
var currentSlide = 0;
var autoplayTimer;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  }
  if (index >= totalSlides) {
    index = 0;
  }
  currentSlide = index;
  carouselImages.style.transform = 'translateX(' + (-index * 100) + '%)';
  var counter = document.getElementById('currentSlide');
  if (counter) {
    counter.textContent = index + 1;
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextSlide, 3000);
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  startAutoplay();
}

var nextButton = document.getElementById('nextBtn');
var prevButton = document.getElementById('prevBtn');
if (nextButton) {
  nextButton.addEventListener('click', function() {
    nextSlide();
    resetAutoplay();
  });
}
if (prevButton) {
  prevButton.addEventListener('click', function() {
    previousSlide();
    resetAutoplay();
  });
}

showSlide(0);
startAutoplay();

var maybeUnused = 7;
console.log('started', maybeUnused);

function doNothing() {
  var x = 2;
  x = x + 3;
  return x;
}

doNothing();
