function applyFadeTransition(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[index].style.opacity = 1;
}