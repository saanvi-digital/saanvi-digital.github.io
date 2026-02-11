function openModal(type) {
  const modal = document.getElementById("pricingModal");
  const body = document.getElementById("modalBody");

  let content = "";

  if (type === "single") {
    content = `
      <h2>Single Page Website – ₹11,999</h2>
      <p>Perfect for professionals & small businesses.</p>
      <ul>
        <li>1 High-Converting Landing Page</li>
        <li>Mobile Responsive Layout</li>
        <li>Basic SEO Setup</li>
        <li>WhatsApp & Contact Integration</li>
        <li>Delivery in 5 Working Days</li>
      </ul>
    `;
  }

  if (type === "multi") {
    content = `
      <h2>Multi Page Website – ₹18,999</h2>
      <p>Includes up to 3 pages.</p>
      <ul>
        <li>Home, About, Contact</li>
        <li>Mobile Responsive</li>
        <li>Speed Optimization</li>
        <li>Basic SEO Setup</li>
        <li>₹3,000 per additional page</li>
      </ul>
    `;
  }

  if (type === "premium") {
    content = `
      <h2>Premium Custom Website – ₹39,999+</h2>
      <p>High authority design for serious brands.</p>
      <ul>
        <li>Up to 6 Pages</li>
        <li>Advanced Animations</li>
        <li>Hero Video Integration</li>
        <li>Conversion Focused Layout</li>
        <li>₹4,500 per additional page</li>
      </ul>
    `;
  }

  body.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("pricingModal").style.display = "none";
}
