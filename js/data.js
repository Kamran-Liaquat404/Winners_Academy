/**
 * WINNERS GRAMMAR SCHOOL & ACADEMY - Centralized Institutional Configuration
 * 16 Years of Educational Excellence
 * 
 * Roman Urdu Comments:
 * Yeh file poori website ka markazi data center hai. Yahan academy aur school ka naam,
 * clean international academic streams, contact actions (WhatsApp, Direct Call, Gmail),
 * Abid Shahzad (Chairman & Director), aur 5 teachers ki clean directory centralized
 * tor par rakhe gaye hain.
 */

const WINNERS_CONFIG = {
  institution: {
    name: "Winners Grammar School & Academy",
    shortName: "Winners Grammar School",
    tagline: "Building Knowledge. Inspiring Excellence. Preparing Future Leaders.",
    establishedYears: "16",
    historyTitle: "16 Years of Educational Excellence",
    aboutShort: "For 16 years, Winners Grammar School & Academy has provided quality education, sound English language mastery, and modern learning opportunities, uniting traditional academic discipline with technological literacy under the visionary leadership of Abid Shahzad.",
    mission: "To provide world-class, accessible education that develops intellectual mastery, character, ethical discipline, and 21st-century leadership skills.",
    vision: "To set benchmarks in foundational and higher academic education through modern pedagogical methods and continuous student mentorship.",
    logo: "assets/images/logo.png",
    coreValues: [
      { name: "Excellence", description: "Pursuing the highest academic and moral standards in every discipline." },
      { name: "Character", description: "Instilling honest integrity, ethical conduct, and civic responsibility." },
      { name: "Intellect", description: "Deep conceptual mastery beyond rote learning and memorization." },
      { name: "Innovation", description: "Embracing interactive pedagogy and modern technological literacy." },
      { name: "Discipline", description: "Fostering punctuality, self-restraint, and structured study habits." }
    ]
  },

  // Leadership Details: Abid Shahzad is Chairman & Director
  leadership: {
    director: {
      name: "Abid Shahzad",
      role: "Chairman & Director",
      message: "At Winners Grammar School & Academy, education is more than preparing for examinations—it is about preparing young minds to thrive in an ever-evolving world. By pairing rigorous academic fundamentals with fluent English communication and digital literacy, we nurture confident, capable leaders.",
      initials: "AS",
      image: "assets/images/teachers/abidshahzad.png"
    }
  },

  // Contact Configuration: Clean Campus details
  contact: {
    address: "Petroleum Road",
    city: "Main Academic Complex",
    fullAddress: "Petroleum Road Campus, Main Academic Complex",
    phone: "0333 7773440",
    phoneDisplay: "0333 7773440",
    phoneRaw: "923337773440",
    whatsapp: "923337773440",
    whatsappDisplay: "923337773440",
    email: "abidshaizad@gmail.com",
    whatsappUrl: "https://wa.me/923337773440",
    callUrl: "tel:+923337773440",
    mailUrl: "mailto:abidshaizad@gmail.com",
    workingHours: "Monday – Saturday: 7:45 AM – 7:30 PM",
    schoolTiming: "Morning School: 7:45 AM – 1:30 PM",
    academyTiming: "Evening Academy: 2:30 PM – 7:30 PM"
  },

  // Institutional Statistics
  stats: [
    { value: "16+", label: "Years of Excellence", desc: "A distinguished legacy of academic leadership" },
    { value: "5,000+", label: "Successful Alumni", desc: "Empowered through dedicated faculty guidance" },
    { value: "Dual", label: "Integrated Campus", desc: "Comprehensive Morning School & Evening Academy" },
    { value: "100%", label: "Merit Dedication", desc: "Proven board examination performance" }
  ],

  // Faculty Directory: Clean list with Photo, Direct Name, and Intro only
  faculty: [
    {
      id: "abid-shahzad",
      name: "Abid Shahzad",
      role: "Chairman & Director",
      image: "assets/images/teachers/abidshahzad.png",
      initials: "AS",
      intro: "Visionary educational leader directing academic strategy, institutional governance, and student character development."
    },
    {
      id: "naseem-baloch",
      name: "Naseem Baloch",
      role: "Professional Biology Teacher",
      image: "assets/images/teachers/naseem.png",
      initials: "NB",
      intro: "Experienced biology educator helping students develop strong conceptual understanding of life sciences, practical observations, and examination confidence."
    },
    {
      id: "kabir-ahmed",
      name: "Kabir Ahmed",
      role: "Experienced Science and Mathematics Educator",
      image: "assets/images/teachers/kabir.png",
      initials: "KA",
      intro: "Dedicated science and mathematics teacher focused on Chemistry, Physics, and Mathematics with analytical problem-solving and board preparation."
    },
    {
      id: "ahtisham-baloch",
      name: "Ahtisham Baloch",
      role: "English Grammar & Classroom Activities",
      image: "assets/images/teachers/ahtisham.png",
      initials: "AB",
      intro: "Supportive English grammar educator strengthening communication skills through clear classroom instruction and active learning activities."
    },
    {
      id: "tanveer-baloch",
      name: "Tanveer Baloch",
      role: "English Grammar & Classroom Activities",
      image: "assets/images/teachers/ahtisham.png",
      initials: "TB",
      intro: "Engaging language mentor who helps students build confidence in English grammar, spoken expression, and classroom participation."
    }
  ],

  // Educational Programs: Refined international terminology
  programs: [
    {
      id: "school-education",
      category: "Grammar School",
      title: "Comprehensive School System",
      badge: "Morning Session",
      image: "assets/images/classes/school_education.png",
      description: "Structured foundational schooling from Junior through Senior grades with personalized attention, moral values, and academic discipline.",
      highlights: ["Core Academic Foundations", "Character & Ethical Grooming", "Interactive Classrooms", "Modern Learning Aids"],
      link: "school.html"
    },
    {
      id: "academy-prep",
      category: "Board Coaching",
      title: "Secondary & College Board Studies",
      badge: "Evening Stream",
      image: "assets/images/classes/science_coaching.png",
      description: "Comprehensive coaching for 9th, 10th, 11th, and 12th grades covering Pre-Medical, Pre-Engineering, and ICS with conceptual mastery.",
      highlights: ["Board Examination Prep", "Subject Conceptual Mastery", "Weekly Assessment Series", "Experienced Faculty Guidance"],
      link: "academy.html"
    },
    {
      id: "english-language",
      category: "Language & Fluency",
      title: "English Language & Communication",
      badge: "16-Year Legacy",
      image: "assets/images/classes/english_speaking.png",
      description: "Flagship communicative fluency program empowering learners with spoken confidence, grammatical precision, and presentation skills.",
      highlights: ["Spoken Fluency & Accent", "Structural Grammar Mastery", "Vocabulary Expansion", "Public Speaking & Confidence"],
      link: "english-language.html"
    },
    {
      id: "science-subjects",
      category: "STEM & Sciences",
      title: "Pre-Medical & Pre-Engineering Sciences",
      badge: "Concept & Lab Focus",
      image: "assets/images/classes/science_coaching.png",
      description: "Advanced coaching in Physics, Chemistry, and Biology designed to build intuitive understanding and outstanding examination scores.",
      highlights: ["Experimental Concept Clarity", "Chemical Reaction Mechanics", "Advanced Physics Numericals", "Biological Systems"],
      link: "science.html"
    },
    {
      id: "mathematics",
      category: "Mathematics",
      title: "Advanced Mathematics & Logic",
      badge: "Foundations to Calculus",
      image: "assets/images/classes/mathematics.png",
      description: "Mastery in algebra, trigonometry, calculus, and mathematical reasoning with step-by-step theorem derivations.",
      highlights: ["Algebraic Operations", "Geometric Proofs", "Calculus & Functions", "Systematic Problem-Solving"],
      link: "mathematics.html"
    },
    {
      id: "computer-tech",
      category: "Technology",
      title: "Computer Studies & IT Literacy",
      badge: "Digital Skills",
      image: "assets/images/classes/computer_studies.png",
      description: "Practical digital education covering modern office automation, web fundamentals, and computer application diplomas.",
      highlights: ["Modern Digital Literacy", "Office Productivity Suites", "Computing Concepts", "Practical Lab Sessions"],
      link: "computer-education.html"
    },
    {
      id: "cadet-college",
      category: "Leadership Prep",
      title: "Cadet College Entrance Coaching",
      badge: "Competitive Exams",
      image: "assets/images/classes/cadet_preparation.png",
      description: "Specialized coaching preparing ambitious students for prestigious Cadet College entrance tests, intelligence screenings, and interviews.",
      highlights: ["Entrance Examination Syllabus", "Intelligence & IQ Testing", "Personality Grooming", "Physical Readiness"],
      link: "cadet-preparation.html"
    },
    {
      id: "calligraphy",
      category: "Fine Arts",
      title: "Calligraphy & Penmanship Studio",
      badge: "Art & Penmanship",
      image: "assets/images/classes/calligraphy.png",
      description: "Artistic penmanship training focused on English cursive elegance, Arabic script, and neat handwriting refinement.",
      highlights: ["English Cursive Handwriting", "Arabic & Urdu Calligraphy", "Fine Penmanship Techniques", "Focused Learning Space"],
      link: "calligraphy.html"
    }
  ],

  // Student Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Kamran Liaquat",
      course: "English Language & Board Coaching",
      rating: 5,
      comment: "Winners Grammar School & Academy gave me the academic foundation and communicative confidence I needed. The personal dedication of our teachers made all the difference.",
      avatarInitial: "KL"
    },
    {
      id: "t2",
      name: "Abu Hurairah",
      course: "Pre-Medical Sciences",
      rating: 5,
      comment: "The conceptual teaching in Physics and Chemistry is extraordinary. Complex scientific topics are explained with crystal-clear logic and experimental insight.",
      avatarInitial: "AH"
    },
    {
      id: "t3",
      name: "Suleman",
      course: "Computer Education & Digital Skills",
      rating: 5,
      comment: "Studying information technology here equipped me with practical computing skills that are indispensable in modern education and career pathways.",
      avatarInitial: "S"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What academic programs are available at Winners Grammar School & Academy?",
      answer: "We provide an integrated educational environment comprising a Morning Grammar School, Evening Board Coaching (9th, 10th, 11th, 12th grades), Cadet College Entrance Preparation, English Language & Spoken Fluency, Computer Studies, and Fine Arts Calligraphy."
    },
    {
      question: "What makes Winners Grammar School & Academy distinct?",
      answer: "With 16 years of educational excellence, we offer conceptual teaching methodologies, disciplined classrooms, experienced subject specialists, and direct academic oversight by Chairman & Director Abid Shahzad."
    },
    {
      question: "How can I apply for admission or schedule a campus visit?",
      answer: "You can use our Unified Online Portal on this website, connect directly with Abid Shahzad via WhatsApp, call directly, or visit our campus office on Petroleum Road."
    },
    {
      question: "Are separate batches available for specialized subjects?",
      answer: "Yes, specialized courses and board coaching streams are organized into dedicated, focused cohorts to maintain ideal teacher-student ratios and rigorous academic focus."
    }
  ]
};

// Global Exposure
if (typeof window !== "undefined") {
  window.WINNERS_CONFIG = WINNERS_CONFIG;
}
