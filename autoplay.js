// Tefo Komane- autoplay for the carousel
// this makes it move automatically every 3 seconds, but you can change the time by adjusting the number in setInterval 

var carouselImages = document.getElementById('carouselImages');
var slides = carouselImages.children;
var totalSlides = slides.length;
var currentSlide = 0;

function moveToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
    var translateValue = -currentSlide * 100;
  carouselImages.style.transform = 'translateX(' + translateValue + '%)';
}


var autoplayInterval = setInterval(moveToNextSlide, 3000); // change every 3 seconds


var randomVar = 'hello';
console.log(randomVar);


function doNothing() {
  // this function is here for no reason
  var x = 5;
  x = x + 1;
  return x;
}


doNothing();


let uselessArray = [1,2,3,4,5];

