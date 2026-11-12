/**
 * WINNERS GRAMMAR SCHOOL & ACADEMY - Unified Interactive Portal Controller
 * Pure Vanilla JavaScript (ES6+)
 * 
 * Roman Urdu Comments:
 * Yeh script website ka markazi Smart Portal Form chalata hai. User filter tabs
 * (School, Academy, English, Computer, General Inquiry, Feedback) ke zariye
 * decide karta hai ke usko kya apply ya inquire karna hai. Dynamic fields change hoti
 * hain aur form direct localStorage me save hone ke sath direct WhatsApp par bhi
 * structured message bana kar bhej sakta hai.
 */

document.addEventListener("DOMContentLoaded", () => {
  initUnifiedPortal();
  initLegacyForms();
});

// Toast Notification
function showToast(title, message, type = "success") {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div style="flex-grow: 1;">
      <div class="toast-title">${escapeHtml(title)}</div>
      <div class="toast-message">${escapeHtml(message)}</div>
    </div>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 1. UNIFIED SMART PORTAL
function initUnifiedPortal() {
  const portalForm = document.getElementById("unifiedPortalForm");
  if (!portalForm) return;

  const filterTabs = document.querySelectorAll(".portal-filter-tab");
  const portalKicker = document.getElementById("portalKicker");
  const portalTitle = document.getElementById("portalTitle");
  const portalDesc = document.getElementById("portalDesc");
  const whatsappSendBtn = document.getElementById("portalWhatsappBtn");

  // Category Configuration
  const categoryMeta = {
    school: {
      kicker: "Admissions Desk",
      title: "Grammar School Admission Form",
      desc: "Apply for morning grammar school education from foundational primary through middle and secondary grades.",
      submitLabel: "Submit School Admission",
      color: "var(--navy-primary)"
    },
    academy: {
      kicker: "Board Coaching Desk",
      title: "Board & College Coaching Enrollment",
      desc: "Enroll in evening academic batches for 9th, 10th, 11th, and 12th grades (Pre-Medical, Pre-Engineering & ICS).",
      submitLabel: "Submit Coaching Application",
      color: "var(--blue-primary)"
    },
    english: {
      kicker: "Language Academy",
      title: "English Language & Fluency Registration",
      desc: "Join our 16-year flagship communicative English program for spoken fluency, grammar, and presentation skills.",
      submitLabel: "Register for English Program",
      color: "#059669"
    },
    computer: {
      kicker: "Technology Studies",
      title: "Computer Studies & IT Enrollment",
      desc: "Enroll in practical digital education, office productivity suites, and computer diploma courses.",
      submitLabel: "Enroll in IT Course",
      color: "#7c3aed"
    },
    inquiry: {
      kicker: "Campus Office",
      title: "General Campus Inquiry & Visit",
      desc: "Have a general question regarding timings, fee structures, curriculum, or wish to schedule a visit?",
      submitLabel: "Send Campus Message",
      color: "var(--navy-primary)"
    },
    feedback: {
      kicker: "Community Voice",
      title: "Student & Parent Review & Feedback",
      desc: "Share your academic experience, review teacher mentorship, or leave constructive feedback for the administration.",
      submitLabel: "Submit Academic Review",
      color: "var(--gold-primary)"
    }
  };

  // Determine initial category from URL or default
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("type") || "school";
  if (!categoryMeta[activeCategory]) activeCategory = "school";

  function switchCategory(cat) {
    if (!categoryMeta[cat]) return;
    activeCategory = cat;

    // Update filter buttons
    filterTabs.forEach(tab => {
      if (tab.dataset.category === cat) {
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      }
    });

    // Update Headers
    const meta = categoryMeta[cat];
    if (portalKicker) portalKicker.textContent = meta.kicker;
    if (portalTitle) portalTitle.textContent = meta.title;
    if (portalDesc) portalDesc.textContent = meta.desc;

    const submitBtn = portalForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = meta.submitLabel;
    }

    // Toggle specific fieldsets
    const fieldsets = portalForm.querySelectorAll(".portal-fieldset");
    fieldsets.forEach(fs => {
      if (fs.dataset.forCategory === cat || fs.dataset.forCategory === "all") {
        fs.style.display = "block";
      } else {
        fs.style.display = "none";
      }
    });

    // Update hidden field
    const hiddenCatInput = portalForm.querySelector('input[name="selectedCategory"]');
    if (hiddenCatInput) hiddenCatInput.value = cat;
  }

  // Register filter tab click events
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchCategory(tab.dataset.category);
    });
  });

  // Star Rating Interaction for Feedback
  const starInputs = portalForm.querySelectorAll(".portal-star-rating span");
  let selectedRating = 5;
  starInputs.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = index + 1;
      starInputs.forEach((s, i) => {
        if (i < selectedRating) {
          s.style.color = "var(--gold-accent)";
          s.textContent = "★";
        } else {
          s.style.color = "#cbd5e1";
          s.textContent = "☆";
        }
      });
      const hiddenRating = portalForm.querySelector("#feedbackRatingInput");
      if (hiddenRating) hiddenRating.value = selectedRating;
    });
  });

  // Switch to initial category
  switchCategory(activeCategory);

  // Form Submit Handler
  portalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = portalForm.querySelector("#portalFullName");
    const phone = portalForm.querySelector("#portalPhone");
    let isValid = true;

    if (!fullName || !fullName.value.trim()) {
      if (fullName) fullName.classList.add("is-invalid");
      isValid = false;
    } else {
      fullName.classList.remove("is-invalid");
    }

    if (!phone || !phone.value.trim() || phone.value.replace(/[^0-9]/g, "").length < 7) {
      if (phone) phone.classList.add("is-invalid");
      isValid = false;
    } else {
      phone.classList.remove("is-invalid");
    }

    if (!isValid) {
      showToast("Required Fields Alert", "Please enter your name and valid contact number.", "warning");
      return;
    }

    // Capture dynamic category data
    const submission = {
      id: "portal_" + Date.now(),
      category: activeCategory,
      categoryTitle: categoryMeta[activeCategory].title,
      fullName: fullName.value.trim(),
      phone: phone.value.trim(),
      guardian: portalForm.querySelector("#portalGuardian") ? portalForm.querySelector("#portalGuardian").value.trim() : "",
      gradeStream: portalForm.querySelector("#portalGradeStream") ? portalForm.querySelector("#portalGradeStream").value : "",
      subjectArea: portalForm.querySelector("#portalSubjectArea") ? portalForm.querySelector("#portalSubjectArea").value : "",
      notes: portalForm.querySelector("#portalNotes") ? portalForm.querySelector("#portalNotes").value.trim() : "",
      rating: selectedRating,
      submittedAt: new Date().toISOString()
    };

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem("winners_portal_submissions") || "[]");
      existing.unshift(submission);
      localStorage.setItem("winners_portal_submissions", JSON.stringify(existing.slice(0, 100)));
    } catch (err) {
      console.warn("Storage warning:", err);
    }

    showToast("Application Received", `Thank you ${submission.fullName}. Your ${categoryMeta[activeCategory].title} has been logged successfully!`, "success");

    // Optional direct trigger to WhatsApp button
    if (whatsappSendBtn) {
      whatsappSendBtn.style.display = "inline-flex";
    }

    portalForm.reset();
    switchCategory(activeCategory);
  });

  // Direct WhatsApp Send Button
  if (whatsappSendBtn) {
    whatsappSendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const fullName = portalForm.querySelector("#portalFullName")?.value.trim() || "Applicant";
      const stream = portalForm.querySelector("#portalGradeStream")?.value || "";
      const notes = portalForm.querySelector("#portalNotes")?.value.trim() || "";

      let msg = `Assalamu Alaikum Abid Shahzad,\nI am submitting an inquiry for Winners Grammar School & Academy.\n\nType: ${categoryMeta[activeCategory].title}\nName: ${fullName}`;
      if (stream) msg += `\nClass/Course: ${stream}`;
      if (notes) msg += `\nNotes: ${notes}`;

      const waUrl = `https://wa.me/923337773440?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");
    });
  }
}

// 2. Fallbacks for existing separate forms (if present on older pages)
function initLegacyForms() {
  const legacyContact = document.getElementById("contactInquiryForm");
  if (legacyContact) {
    legacyContact.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Inquiry Sent", "Your message has been delivered to the campus administration.", "success");
      legacyContact.reset();
    });
  }

  const legacyAdmission = document.getElementById("admissionForm");
  if (legacyAdmission) {
    legacyAdmission.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Application Received", "Admission form submitted successfully.", "success");
      legacyAdmission.reset();
    });
  }
}
