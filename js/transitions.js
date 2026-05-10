// ===== ELEMENTS =====
const dots = document.querySelectorAll(".dot")
const carouselImage = document.getElementById("carousel-image")
const slides = document.querySelectorAll(".slide") // Added to support fade transition

// ===== IMAGE ARRAY =====
const images = [
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg"
]

// ===== CURRENT IMAGE INDEX =====
let currentIndex = 0

// ===== FADE TRANSITION =====
function applyFadeTransition(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[index].style.opacity = 1;
}

// ===== CHANGE IMAGE FUNCTION =====
function showImage(index) {
  // Change image
  carouselImage.src = images[index]

  // Apply the fade transition from main
  if (slides.length > 0) {
    applyFadeTransition(index)
  }

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  // Activate current dot
  dots[index].classList.add("active")
}

// ===== DOT CLICK EVENTS =====
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index
    showImage(currentIndex)
    resetAutoPlay()
  })

  // ===== HOVER EFFECT =====
  dot.addEventListener("mouseenter", () => {
    dot.style.transform = "scale(1.3)"
  })

  dot.addEventListener("mouseleave", () => {
    dot.style.transform = "scale(1)"
  })
})

// ===== AUTOPLAY =====
let autoPlay = setInterval(nextSlide, 3000)

function nextSlide() {
  currentIndex++
  if (currentIndex >= images.length) {
    currentIndex = 0
  }
  showImage(currentIndex)
}

// ===== RESET AUTOPLAY =====
function resetAutoPlay() {
  clearInterval(autoPlay)
  autoPlay = setInterval(nextSlide, 3000)
}

// ===== INITIAL IMAGE =====
showImage(currentIndex)
