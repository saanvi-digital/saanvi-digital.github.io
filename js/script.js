// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("mobileNav").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

// Modal Logic
const modalData = {
    single: "<h3>Single Page Details</h3><p>Perfect for startups. Includes 1-page design, mobile optimization, and 5-day delivery.</p>",
    multi: "<h3>Multi Page Details</h3><p>Best for growing businesses. Includes Home, About, Services, and Contact pages with SEO.</p>",
    premium: "<h3>Premium Details</h3><p>Full custom solution with advanced animations, video backgrounds, and 24/7 priority support.</p>"
};

function openModal(type) {
    const modal = document.getElementById("pricingModal");
    const body = document.getElementById("modalBody");
    body.innerHTML = modalData[type];
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("pricingModal").style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById("pricingModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Form Submission Handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.onsubmit = function() {
        // Formspree will handle the redirect, but we can add a loading state here
        const btn = contactForm.querySelector("button");
        btn.innerText = "Sending...";
        btn.style.opacity = "0.7";
    };
}


