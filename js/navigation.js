window.addEventListener("DOMContentLoaded", function () {

    const carouselImages = document.getElementById("carouselImages");
    const slides = carouselImages.children;

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const dotsContainer = document.getElementById("dotsContainer");
    const currentSlideEl = document.getElementById("currentSlide");
    const totalSlidesEl = document.getElementById("totalSlides");
    const message = document.getElementById("message");

    let currentIndex = 0;
    let autoplay;

    // Edge case: no slides
    if (!slides.length) {
        message.textContent = "No slides available.";
        return;
    }

    totalSlidesEl.textContent = slides.length;

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentSlideEl.textContent = currentIndex + 1;
        updateDots();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
        resetAutoplay();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
        resetAutoplay();
    }

    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("button");
            dot.classList.add("dot");

            dot.addEventListener("click", () => {
                currentIndex = i;
                updateCarousel();
                resetAutoplay();
            });

            dotsContainer.appendChild(dot);
        }
        updateDots();
    }

    function updateDots() {
        const dots = dotsContainer.children;

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        if (dots[currentIndex]) {
            dots[currentIndex].classList.add("active");
        }
    }

    function startAutoplay() {
        autoplay = setInterval(nextSlide, 3000);
    }

    function resetAutoplay() {
        clearInterval(autoplay);
        startAutoplay();
    }

    // Events
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Init
    createDots();
    updateCarousel();
    startAutoplay();
});