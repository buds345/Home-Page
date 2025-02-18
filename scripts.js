let slideIndex = 0;

function showSlide() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // If it's the last slide, go back to the first one
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";

    // Change slide every 3 seconds (adjust timing as needed)
    setTimeout(showSlide, 3000);
}

// Start the slideshow
showSlide();
