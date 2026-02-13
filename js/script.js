/* ================= MOBILE MENU ================= */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    const overlay = document.getElementById("overlay");
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    document.getElementById("mobileNav").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

/* ================= PRICING MODAL (POPUP) ================= */
function openModal(type) {
    const modal = document.getElementById("pricingModal");
    const body = document.getElementById("modalBody");
    let content = "";

    if (type === "single") {
        content = `
            <h2 style="color:#2F2C8F; margin-bottom:10px;">Single Page Website</h2>
            <h4 style="font-size:24px; margin-bottom:15px;">₹11,999</h4>
            <ul style="list-style:none; line-height:2;">
                <li>✅ 1 High-Converting Landing Page</li>
                <li>✅ Mobile Responsive Design</li>
                <li>✅ Basic SEO Setup</li>
                <li>✅ WhatsApp Integration</li>
                <li>✅ Delivery in 5 Working Days</li>
            </ul>
            <a href="https://wa.me/919699907771?text=I'm interested in Single Page Website" class="btn-primary full-width" style="display:block; text-align:center; margin-top:20px;">Book Now</a>
        `;
    } 
    else if (type === "multi") {
        content = `
            <h2 style="color:#2F2C8F; margin-bottom:10px;">Multi Page Website</h2>
            <h4 style="font-size:24px; margin-bottom:15px;">₹18,999</h4>
            <ul style="list-style:none; line-height:2;">
                <li>✅ Home, About, Contact Pages</li>
                <li>✅ Speed Optimization</li>
                <li>✅ Mobile Responsive</li>
                <li>✅ Basic SEO Setup</li>
                <li>✅ ₹3,000 per Additional Page</li>
            </ul>
            <a href="https://wa.me/919699907771?text=I'm interested in Multi Page Website" class="btn-primary full-width" style="display:block; text-align:center; margin-top:20px;">Book Now</a>
        `;
    } 
    else if (type === "premium") {
        content = `
            <h2 style="color:#2F2C8F; margin-bottom:10px;">Premium Custom Website</h2>
            <h4 style="font-size:24px; margin-bottom:15px;">₹39,999+</h4>
            <ul style="list-style:none; line-height:2;">
                <li>✅ Up to 6 Custom Pages</li>
                <li>✅ Advanced Animations</li>
                <li>✅ Hero Background Video</li>
                <li>✅ Conversion Focused Layout</li>
                <li>✅ Priority Support</li>
            </ul>
            <a href="https://wa.me/919699907771?text=I'm interested in Premium Website" class="btn-primary full-width" style="display:block; text-align:center; margin-top:20px;">Book Now</a>
        `;
    }

    body.innerHTML = content;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("pricingModal").style.display = "none";
}

// Close modal if clicked outside content
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
