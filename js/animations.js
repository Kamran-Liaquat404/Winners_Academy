/**
 * WINNERS ACADEMY & SCHOOL - Animations & Interactions Controller
 * Pure Vanilla JavaScript (ES6+)
 * 
 * Roman Urdu Comments:
 * Yeh file scroll reveals, stats counters, FAQ accordions aur back-to-top button
 * ki smooth animations ko control karti hai.
 */

// DOM Ready Event: Document ready hone par animation handlers ko initialize karna
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveals();
  initStatsCounter();
  initFaqAccordion();
  initBackToTop();
});

// Scroll Reveal Animations: Screen scroll hone par elements ko ba-tardeed show karna
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-fade");
  if (!revealElements.length) return;

  // Agar user ne system level par animation band ki ho to foran display karna
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));
}

// Stats Counter: 16+ Years waghera ke numbers ko animate karna
function initStatsCounter() {
  const statStrip = document.querySelector(".stats-strip");
  if (!statStrip) return;

  let animated = false;

  const countUp = (element, targetValue, duration = 1600) => {
    const isPureNumber = /^\d+$/.test(targetValue.replace(/[+,]/g, ""));
    if (!isPureNumber) return;

    const numericValue = parseInt(targetValue.replace(/\D/g, ""), 10);
    const hasPlus = targetValue.includes("+");
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * numericValue);

      element.textContent = current + (hasPlus ? "+" : "");

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = targetValue;
      }
    }

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const statValues = statStrip.querySelectorAll(".stat-value");
          statValues.forEach(valEl => {
            const raw = valEl.getAttribute("data-target") || valEl.textContent.trim();
            countUp(valEl, raw);
          });
          observer.unobserve(statStrip);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(statStrip);
}

// FAQ Accordion: Sawalat aur jawabat ko expand ya collapse karne ka function
function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = item.querySelector(".accordion-content");
      const isOpen = item.classList.contains("active");

      const parentAccordion = item.closest(".accordion");
      if (parentAccordion) {
        parentAccordion.querySelectorAll(".accordion-item.active").forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            const otherContent = otherItem.querySelector(".accordion-content");
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

// Back-to-Top Button: Scroll hone par top par le jaane wala floating button
function initBackToTop() {
  const backBtn = document.getElementById("backToTopBtn");
  if (!backBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backBtn.classList.add("visible");
    } else {
      backBtn.classList.remove("visible");
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
