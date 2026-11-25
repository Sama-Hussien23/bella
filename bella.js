// Contact Form

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});


// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});


// Close Menu After Clicking a Link

const navItems = document.querySelectorAll("nav ul a");

navItems.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});