let currentSlide = 0;
const slides = document.querySelectorAll('.watch-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1)%slides.length;
    showSlide(currentSlide);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(currentSlide);
