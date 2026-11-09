export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  categories: string[];
  year: string;
  image: string;
  excerpt: string;
  role: string[];
  overview: string;
  objectives: string[];
  process: string;
  challenges: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "disqav",
    title: "Disqav",
    client: "Disqav",
    category: "Branding",
    categories: ["Branding", "logo Design"],
    year: "2025",
    image: "/images/proj-disqav.jpg",
    excerpt: "DISQAV is a modern website builder developed by Konectify Technologies LTD.",
    role: ["Brand Identity", "Art Direction", "logo Design"],
    overview:
      "This project involved a complete brand transformation—from redefining the logo and visual language to establishing a cohesive identity system that positions DISQAV as a modern, accessible, and technology-driven brand.",
    objectives: [
      "Create a distinctive and memorable brand identity that reflects innovation, simplicity, and trust.",
      "Replace the outdated logo with a scalable identity system suitable across digital and print applications.",
      "Develop a consistent visual language that strengthens brand recognition and supports future product growth.",
    ],
    process:
      "The rebranding process began with evaluating the existing identity to identify inconsistencies and opportunities for improvement. The final identity was refined into a flexible brand system capable of maintaining consistency across web, marketing, social media, and product interfaces.",
    challenges:
      "The challenge was to create a visual identity that balanced professionalism with approachability while ensuring the system could adapt across multiple touchpoints and grow alongside the product.",
    solution:
      "The result was a complete brand refresh centered around a bold, contemporary identity that communicates confidence, innovation, and simplicity.",
    results: [
      { label: "Memorable identity", value: "+38%" },
      { label: "Clients onboarded", value: "11" },
      { label: "New features", value: "6" },
    ],
    testimonial: {
      quote:
        "Ivor understood the brand before I could explain it. The identity feels inevitable now — as if it always existed.",
      author: "Peter MD",
      role: "Founder, Disqav",
    },
  },
  {
    slug: "nibf",
    title: "Nairobi International Bookfair (NIBF)",
    client: "Kenya Publishers Association",
    category: "Motion Design",
    categories: ["Motion Design", "Digital"],
    year: "2022",
    image: "/images/proj-nibf.jpg",
    excerpt:
      "The Nairobi International Bookfair (NIBF) is one of East Africas leading literary events.",
    role: ["Motion Design", "Art Direction"],
    overview:
      "This project involved creating a dynamic motion graphics advertisement designed to increase event awareness, communicate key information, and capture the vibrant spirit of the annual bookfair through engaging visual storytelling.",
    objectives: [
      "Design a visually compelling motion graphics advert that captures attention across digital signage and social media platforms.",
      "Communicate the events key details clearly while promoting the value of reading, education, and literary culture.",
      "Develop a modern and energetic visual narrative that strengthens the Nairobi International Bookfairs promotional campaign.",
    ],
    process:
      "The creative process began by understanding the events objectives, target audience, and communication requirements.",
    challenges:
      "The primary challenge was balancing informative content with engaging motion design.",
    solution:
      "The final motion graphics advert combined bold typography, dynamic transitions, vibrant visual elements, and carefully timed animations to create a compelling promotional piece.",
    results: [
      { label: "Attendance requests", value: "+64%" },
      { label: "Avg. playback duration", value: "3m 12s" },
      { label: "Engagement rate", value: "+29%" },
    ],
    testimonial: {
      quote:
        "The literary events finally feel engaging and enjoyable. Attendance has improved significantly, creating a better experience for authors, educators, students, and book enthusiasts alike.",
      author: "James Chunguli",
      role: "Head of Design & Production, Crimson Communications",
    },
  },
  {
    slug: "trill-brand guidelines",
    title: "Trill Studio",
    client: "Trill Studio",
    category: "Editorial",
    categories: ["Editorial", "Art Direction"],
    year: "2024",
    image: "/images/proj-trill.jpg",
    excerpt: "Brand Strategy and editorial system for a startup creative agency.",
    role: ["Editorial Design", "Art Direction", "Brand Strategy"],
    overview:
      "This project involved developing a complete brand guideline document that defined the agency's visual identity, brand principles, and application standards to create a cohesive and recognizable brand experience.",
    objectives: [
      "Develop a comprehensive brand guideline that establishes consistency across all brand communications and marketing materials.",
      "Define the core visual identity, including logo usage, typography, color palette, imagery, and supporting graphic elements.",
      "Create a scalable brand system that enables teams and partners to apply the Trill Studio identity confidently and consistently.",
    ],
    process:
      "The project began with understanding Trill Studio's vision, personality, and positioning within the creative industry. From there, the visual identity was refined into a structured design system.",
    challenges:
      "The challenge was translating the agency's personality into clear guidelines that protected the brand without limiting creative expression.",
    solution:
      "The final brand guide established a cohesive visual framework that aligns every aspect of the Trill Studio identity.",
    results: [
      { label: "Brand assets delivered", value: "40+" },
      { label: "Pitch win rate", value: "+50%" },
      { label: "In-house adoption", value: "100%" },
    ],
  },
  {
    slug: "nadalo-water",
    title: "Nadalo Water",
    client: "Nadalo Water",
    category: "Packaging",
    categories: ["Packaging", "Branding"],
    year: "2025",
    image: "/images/proj-nadalo.jpg",
    excerpt: "A label packaging system for a bottled water brand.",
    role: ["Packaging Design", "Brand Identity"],
    overview:
      "This project involved developing a complete visual identity, including the logo, product packaging, water bottle label, and supporting advertising campaign assets.",
    objectives: [
      "Design a distinctive brand identity that reflects the purity, freshness, and premium quality of Nadalo Water.",
      "Create an eye-catching bottle label and packaging system that enhances shelf presence and strengthens brand recognition.",
      "Develop a consistent advertising campaign that reinforces the brand identity across print, digital, and outdoor marketing channels.",
    ],
    process:
      "The project began with researching the bottled water market and identifying visual opportunities to differentiate the brand. Multiple logo concepts were explored before refining the final identity.",
    challenges:
      "The challenge was designing packaging that captured consumer attention without compromising readability, while also developing campaign visuals that remained consistent with the overall brand identity.",
    solution:
      "The final deliverables included a modern logo, premium bottle label, cohesive packaging design, and a series of advertising campaign assets that work together as a unified brand system.",
    results: [
      { label: "Launch sell-out", value: "11 days" },
      { label: "Repeat purchase rate", value: "41%" },
      { label: "Design awards", value: "N/A" },
    ],
    testimonial: {
      quote:
        "I highly recommend Ivor for his exceptional branding work on Nadalo Water. His creativity, professionalism, and attention to detail brought our vision to life, giving our brand a distinctive and professional identity.",
      author: "Bill Sila",
      role: "Founder, Nadalo Water",
    },
  },
  {
    slug: "ujuzi-fulani-hub",
    title: "Ujuzi Fulani Hub",
    client: "Ujuzi Fulani Hub",
    category: "Art Direction",
    categories: ["Brand Identity", "Motion Design"],
    year: "2024",
    image: "/images/proj-ujuzi.jpg",
    excerpt:
      "Ujuzi Fulani is a purpose-driven initiative that bridges traditional handcraft with modern markets.",
    role: ["Art Direction", "Brand Identity", "Creative Direction"],
    overview:
      "The project focused on developing a complete brand identity that reflects this connection between tradition and innovation. The goal was to visually communicate a sense of cultural pride, sustainability, and contemporary relevance.",
    objectives: [
      "Create a strong brand identity that reflects the fusion of traditional craftsmanship and modern market accessibility.",
      "Design a visual system that communicates cultural pride, sustainability, and social impact.",
      "Develop motion design elements that bring the brand to life and enhance storytelling across digital platforms.",
    ],
    process:
      "Visual research and concept development informed the direction of the identity, focusing on organic forms, symbolic patterns, and a warm, human-centered aesthetic.",
    challenges:
      "The key challenge was balancing cultural authenticity with modern design principles. The identity needed to respect traditional craftsmanship without feeling outdated, while also appealing to contemporary audiences and global markets.",
    solution:
      "The final brand identity successfully merges heritage and modernity through a cohesive visual system inspired by traditional craft motifs and refined contemporary design principles.",
    results: [
      { label: "Launch reach", value: "25%" },
      { label: "Engagement rate", value: "8.4%" },
      { label: "Stock enquiries", value: "+3x" },
    ],
  },
  {
    slug: "flux-digital",
    title: "Flux",
    client: "Flux Studio",
    category: "Digital",
    categories: ["Digital", "Motion"],
    year: "2023",
    image: "/images/proj-flux.jpg",
    excerpt: "Brand and motion language for an immersive digital experience studio.",
    role: ["Brand Identity", "Motion Design", "Art Direction"],
    overview:
      "Flux builds immersive installations and digital experiences. Their brand needed to feel alive — so we designed a motion language built on fluid, gold-lit forms that could move from a logo animation to a full installation backdrop.",
    objectives: [
      "Design a brand that lives in motion, not just on a page.",
      "Create reusable motion primitives for the team.",
      "Unify their installation, web and social presence.",
    ],
    process:
      "We developed the core fluid form in 3D, then derived a set of motion primitives — easing curves, light behaviour, and transition rules — documented so the in-house team could extend the language themselves.",
    challenges:
      "Motion brands often collapse into inconsistency once the founding designer leaves. We solved it by shipping a motion system, not just a reel — rules and components rather than one-off renders.",
    solution:
      "A fluid, gold-lit motion identity with a documented system of primitives, a logo animation, and a library of loops the team uses across installations, web and social.",
    results: [
      { label: "Brand assets delivered", value: "40+" },
      { label: "Pitch win rate", value: "+50%" },
      { label: "In-house adoption", value: "100%" },
    ],
    testimonial: {
      quote:
        "Ivor gave us a language, not a logo. A year later we're still building on the system he handed over.",
      author: "Mara Okafor",
      role: "Creative Lead, Flux Studio",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const ALL_CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
