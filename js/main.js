/**
 * WINNERS GRAMMAR SCHOOL & ACADEMY - Main JavaScript Controller
 * Pure Vanilla JavaScript (ES6+)
 * 
 * Roman Urdu Comments:
 * Yeh file website ke interactive features ko control karti hai:
 * navigation menu, mobile drawer, centralized data hydration,
 * aur Abid Shahzad ke WhatsApp, Call aur Gmail direct redirect buttons.
 */

// DOM Load Event: Page load hone par functions initialize karna
document.addEventListener("DOMContentLoaded", () => {
  hydrateInstitutionalData();
  setupNavigation();
  setupMobileDrawer();
  setupStickyHeader();
  setupDirectContactActions();
});

// Data Hydration: WINNERS_CONFIG se data le kar HTML elements me inject karna
function hydrateInstitutionalData() {
  if (typeof WINNERS_CONFIG === "undefined") {
    console.warn("WINNERS_CONFIG defined nahi hai.");
    return;
  }

  const { institution, contact, leadership } = WINNERS_CONFIG;

  // Text Bindings: Text content ko update karna
  const textBindings = {
    "institutionName": institution.name,
    "institutionShortName": institution.shortName,
    "institutionTagline": institution.tagline,
    "directorName": leadership.director.name,
    "directorRole": leadership.director.role,
    "directorMessage": leadership.director.message,
    "phoneDisplay": contact.phoneDisplay,
    "whatsappDisplay": contact.whatsappDisplay,
    "emailDisplay": contact.email,
    "addressDisplay": contact.address,
    "fullAddress": contact.fullAddress,
    "workingHours": contact.workingHours,
    "schoolTiming": contact.schoolTiming,
    "academyTiming": contact.academyTiming,
    "currentYear": new Date().getFullYear().toString()
  };

  Object.entries(textBindings).forEach(([key, value]) => {
    document.querySelectorAll(`[data-bind="${key}"]`).forEach(el => {
      el.textContent = value;
    });
  });

  // Link Bindings: Direct WhatsApp, Call aur Gmail hyperlinks
  const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum Abid Shahzad, I am inquiring about Winners Grammar School & Academy admissions and classes.")}`;
  const callUrl = `tel:+${contact.phoneRaw}`;
  const mailUrl = `mailto:${contact.email}?subject=${encodeURIComponent("Inquiry regarding Winners Grammar School & Academy")}`;

  document.querySelectorAll('[data-bind-link="whatsapp"], [data-bind-link="whatsapp1"], [data-bind-link="whatsapp2"]').forEach(el => {
    el.href = waUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  document.querySelectorAll('[data-bind-link="phone"], [data-bind-link="call"]').forEach(el => {
    el.href = callUrl;
  });

  document.querySelectorAll('[data-bind-link="email"]').forEach(el => {
    el.href = mailUrl;
  });

  // Brand Crest Hydration: Logo image sunishchit karna
  document.querySelectorAll(".brand-crest").forEach(crest => {
    if (!crest.querySelector("img")) {
      crest.textContent = "";
      const logoImg = document.createElement("img");
      logoImg.src = "./assets/images/logo.png";
      logoImg.alt = "Winners Grammar School & Academy Crest";
      logoImg.className = "brand-crest-img";
      crest.appendChild(logoImg);
    }
  });
}

// Navigation Controller: Maujooda active page ko highlight karna
function setupNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Mobile Menu: Choti screens ke liye hamburger drawer open/close karna
function setupMobileDrawer() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!toggleBtn || !navMenu) return;

  // Toggle button me dual icons (open/close) sunishchit karna
  if (!toggleBtn.querySelector(".icon-close")) {
    toggleBtn.innerHTML = `
      <svg class="icon-open" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg class="icon-close" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `;
  }

  // Backdrop overlay banayein agar pehle se DOM me nahi hai
  let backdrop = document.querySelector(".nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
  }

  const openDrawer = () => {
    navMenu.classList.add("open");
    toggleBtn.classList.add("is-active");
    toggleBtn.setAttribute("aria-expanded", "true");
    backdrop.classList.add("visible");
    document.body.classList.add("menu-locked");
  };

  const closeDrawer = () => {
    navMenu.classList.remove("open");
    toggleBtn.classList.remove("is-active");
    toggleBtn.setAttribute("aria-expanded", "false");
    backdrop.classList.remove("visible");
    document.body.classList.remove("menu-locked");
  };

  // Toggle button click
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Dark backdrop click
  backdrop.addEventListener("click", () => {
    closeDrawer();
  });

  // Close when clicking nav link
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Escape key support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Click outside fallback
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeDrawer();
    }
  });
}

// Sticky Header: Scroll hone par shadow lagana
function setupStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Direct Contact Actions: Buttons par click karne par direct WhatsApp, Phone Call ya Gmail open karna
function setupDirectContactActions() {
  const contact = (typeof WINNERS_CONFIG !== "undefined" && WINNERS_CONFIG.contact) ? WINNERS_CONFIG.contact : {
    whatsapp: "923337773440",
    phoneRaw: "923337773440",
    email: "abidshaizad@gmail.com"
  };

  document.querySelectorAll('[data-action="whatsapp"], [data-action="whatsapp1"], [data-action="whatsapp2"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum Abid Shahzad, I am contacting regarding Winners Grammar School & Academy.")}`;
      window.open(url, "_blank");
    });
  });

  document.querySelectorAll('[data-action="call"], [data-action="phone"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `tel:+${contact.phoneRaw}`;
    });
  });

  document.querySelectorAll('[data-action="email"], [data-action="gmail"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Inquiry regarding Winners Grammar School & Academy")}`;
    });
  });
}
