/* ================= MOBILE MENU & HAMBURGER ANIMATION ================= */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    const overlay = document.getElementById("overlay");
    const hamburger = document.querySelector(".hamburger"); // Select Hamburger Icon
    
    // Toggle Active Classes
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    hamburger.classList.toggle("active"); // Yeh line icon ko X banayegi
}

function closeMenu() {
    document.getElementById("mobileNav").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active"); // Reset Hamburger
}

/* ================= FIX: PRICING MODAL LOGIC ================= */
function openModal(type) {
    const modal = document.getElementById("pricingModal");
    const body = document.getElementById("modalBody");
    let content = "";

    // Content same rahega, bas display logic strong kar di hai
    if (type === "single") {
        content = `
            <h2 style="color:#2F2C8F; margin-bottom:10px;">Single Page Website</h2>
            <h4 style="font-size:24px; margin-bottom:15px; color:#2F2C8F;">₹11,999</h4>
            <ul style="list-style:none; line-height:2; text-align:left; display:inline-block;">
                <li>✅ 1 High-Converting Landing Page</li>
                <li>✅ Mobile Responsive Design</li>
                <li>✅ Basic SEO Setup</li>
                <li>✅ Delivery in 5 Working Days</li>
            </ul>
            <a href="https://wa.me/919699907771?text=I'm interested in Single Page Website" class="btn-primary full-width" style="display:block; text-align:center; margin-top:20px;">Book Now on WhatsApp</a>
        `;
    } 
    else if (type === "multi") {
        content = `
            <h2 style="color:#2F2C8F; margin-bottom:10px;">Multi Page Website</h2>
            <h4 style="font-size:24px; margin-bottom:15px; color:#2F2C8F;">₹18,999</h4>
            <ul style="list-style:none; line-height:2; text-align:left; display:inline-block;">
                <li>✅ Home, About, Contact Pages</li>
                <li>✅ Speed Optimization</li>
                <li>✅ Mobile Responsive</li>
                <li>✅ ₹3,000 per Additional Page</li>
            </ul>
            <a href="https://wa.me/919699907771?text=I'm interested in Multi Page Website" class="btn-primary full-width" style="display:block; text-align:center; margin-top:20px;">Book Now on WhatsApp</a>
        `;
    } 
    else if (type === "premium") {
        content = `
            <h2 style="color:#2F2C8F; margin-bottom:10px;">Premium Custom Website</h2>
            <h4 style="font-size:24px; margin-bottom:15px; color:#2F2C8F;">₹39,999+</h4>
            <ul style="list-style:none; line-height:2; text-align:left; display:inline-block;">
                <li>✅ Up to 6 Custom Pages</li>
                <li>✅ Advanced Animations</li>
                <li>✅ Hero Background Video</li>
                <li>✅ Priority Support</li>
            </ul>
            <a href="https://wa.me/919699907771?text=I'm interested in Premium Website" class="btn-primary full-width" style="display:block; text-align:center; margin-top:20px;">Book Now on WhatsApp</a>
        `;
    }

    body.innerHTML = content;
    
    // FORCING FLEX DISPLAY FOR MOBILE
    modal.style.display = "flex"; 
}

function closeModal() {
    document.getElementById("pricingModal").style.display = "none";
}

// Close on outside click
window.onclick = function(event) {
    const modal = document.getElementById("pricingModal");
    if (event.target === modal) {
        closeModal();
    }
}

/* ================= CONTACT FORM ================= */
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const status = document.getElementById("form-status");
        const data = new FormData(form);
        
        status.innerHTML = "Sending...";
        status.style.color = "#2F2C8F";

        try {
            const response = await fetch("https://formspree.io/f/mjgegllr", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.innerHTML = "✅ Thank you! We’ll contact you shortly.";
                form.reset();
            } else {
                status.innerHTML = "❌ Something went wrong. Please try again.";
                status.style.color = "red";
            }
        } catch (error) {
            status.innerHTML = "❌ Error sending message.";
            status.style.color = "red";
        }
    });
}
