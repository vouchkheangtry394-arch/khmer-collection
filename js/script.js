// Khmer Atelier - Interactive Components

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });
  // close mobile nav on link click
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('show');
    });
  });
}

// Smooth scroll for nav links (both desktop & mobile)
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Products data array
const productsData = [
  { name: "Royal Silk Sampot", price: "$120 USD", imgSrc: "https://placehold.co/600x700/b87b4f/fff2e4?text=Sampot+Hobot", alt: "Royal Silk Sampot" },
  { name: "Handwoven Sampot", price: "$450 USD", imgSrc: "https://placehold.co/600x700/9c6f48/fff2e2?text=Golden+Thread+Detail", alt: "Handwoven Sampot" },
  { name: "Artisan Scarf", price: "$320 USD", imgSrc: "https://placehold.co/600x700/b28255/fff3e8?text=Silk+Scarf+Natural+Dye", alt: "Artisan Scarf" },
  { name: "Heritage Lapel Suit", price: "$1,900 USD", imgSrc: "https://placehold.co/600x700/aa7750/faeedb?text=Khmer+Lapel+Coat", alt: "Heritage Lapel Suit" }
];

// Story pillars data
const storyData = [
  { number: "01.", title: "The Weaving", desc: "We only use 100% natural mulberry silk, hand-loomed by village artisans using traditional khmer techniques." },
  { number: "02.", title: "The Dyeing", desc: "Natural dyes from local plants, bark, and earth — creating hues that honor the Cambodian soil." },
  { number: "03.", title: "The Finish", desc: "Each garment is handcrafted, from hem to pattern, ensuring uniqueness and timeless elegance." }
];

// Render Products
const productsGrid = document.getElementById('productsGrid');
if (productsGrid) {
  productsData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.imgSrc}" alt="${product.alt}" loading="lazy">
      <h3>${product.name}</h3>
      <p class="product-price">${product.price}</p>
    `;
    productCard.addEventListener('click', () => {
      alert(`✨ Inquire about ${product.name}. Bespoke tailoring and worldwide shipping available.`);
    });
    productsGrid.appendChild(productCard);
  });
}

// Render Story Grid
const storyGrid = document.getElementById('storyGrid');
if (storyGrid) {
  storyData.forEach(item => {
    const storyCard = document.createElement('div');
    storyCard.className = 'story-card';
    storyCard.innerHTML = `
      <div class="story-number">${item.number}</div>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    `;
    storyGrid.appendChild(storyCard);
  });
}

// Hero Explore Button
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    const collectionSection = document.getElementById('collections');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Explore our curated collection of Khmer silk masterpieces.');
    }
  });
}

// Meet Our Craftsmen Button
const meetBtn = document.getElementById('meetCraftsmenBtn');
if (meetBtn) {
  meetBtn.addEventListener('click', () => {
    alert('🏵️ Meet our master weavers — preserving a 1,000 year legacy. Visit our atelier in Siem Reap or explore virtual tour.');
  });
}

// Newsletter Subscription
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsEmail');
    const email = emailInput.value.trim();
    if (email && email.includes('@') && email.includes('.')) {
      alert(`Thank you for joining Khmer Atelier. A world of silk and heritage awaits. (${email})`);
      newsletterForm.reset();
    } else {
      alert('Please enter a valid email address to receive exclusive insights.');
    }
  });
}

// Footer links interaction - elegant message
const footerLinks = document.querySelectorAll('.footer-col a');
footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Khmer Atelier concierge — reach us at hello@khmeratelier.com or via chat.');
  });
});

// Additional dynamic: enhance hero image (placeholder refinement on load)
window.addEventListener('DOMContentLoaded', () => {
  // subtle update for heritage image to show better representation
  const heritageImg = document.getElementById('heritageImg');
  if (heritageImg && heritageImg.src.includes('placehold')) {
    heritageImg.src = "https://placehold.co/800x600/9c6f48/faf0e2?text=Khmer+Loom+Heritage";
    heritageImg.alt = "Master artisan working on traditional Khmer silk loom";
  }
  // set hero background more inspiring (optional quality)
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://placehold.co/1600x1000/8b5a3b/e2caa3?text=Angkor+Silk+Revival')";
  }
});

// optional: dynamic product hover soundless animation, just for aesthetic: product card border gold
console.log('Khmer Atelier — Authenticity in every thread loaded');