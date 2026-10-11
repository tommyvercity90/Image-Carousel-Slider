
const carousel = document.getElementById("carousel");
const slides = document.getElementById("slides");
const slideElements = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.getElementById("indicators");
const slideCounter = document.getElementById("slideCounter");

let currentIndex = 0;
let autoSlideTimer = null;

const totalSlides = slideElements.length;
const slideDelay = 3000;

// Create one indicator for every slide.
slideElements.forEach((_, index) => {
    const dot = document.createElement("button");

    dot.classList.add("indicator");
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoSlide();
    });

    indicators.appendChild(dot);
});

const dots = document.querySelectorAll(".indicator");

// Display the requested slide.
function showSlide(index) {
    // Wrap around when reaching either end.
    currentIndex = (index + totalSlides) % totalSlides;

    slides.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    // Update active indicator.
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
        dot.setAttribute(
            "aria-current",
            i === currentIndex ? "true" : "false"
        );
    });

    // Update slide counter.
    slideCounter.textContent =
        `${currentIndex + 1} / ${totalSlides}`;
}

// Move to the next slide.
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Move to the previous slide.
function previousSlide() {
    showSlide(currentIndex - 1);
}

// Stop any existing timer and start a new one.
function restartAutoSlide() {
    clearInterval(autoSlideTimer);

    if (!carousel.matches(":hover")) {
        autoSlideTimer = setInterval(nextSlide, slideDelay);
    }
}

// Previous and next controls.
nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
});

prevBtn.addEventListener("click", () => {
    previousSlide();
    restartAutoSlide();
});

// Pause automatic rotation while hovering.
carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
});

// Resume automatic rotation when the pointer leaves.
carousel.addEventListener("mouseleave", () => {
    restartAutoSlide();
});

// Initialize the carousel.
showSlide(0);
restartAutoSlide();
