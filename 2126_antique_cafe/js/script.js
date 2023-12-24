let currentSlide = 0;
const slides = document.querySelectorAll('.slider');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Otomatik geçiş için setInterval kullanılır
setInterval(nextSlide, 3000); // 3000 milisaniye (3 saniye) aralıklarla geçiş yapar

