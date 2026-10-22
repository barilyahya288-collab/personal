export const profile = {
  brand: "Baril",
  firstName: "Baril",
  fullName: "Baril Yahya",
  phone: "+62 822-8922-6508",
  phoneHref: "tel:+6282289226508",
  whatsapp: "https://wa.me/6282289226508",
  email: "barilyahya28@gmail.com",
  birthplace: "Padang, Indonesia",
  education: "Kerja Bebas",
  hero:
    "Halo! Saya suka ngoding dan bereksperimen dengan ide-ide baru. Bagi saya, setiap baris kode adalah cara untuk menghadirkan sesuatu yang bermanfaat dan keren di dunia digital.",
  who: "Saya seorang web developer yang berfokus pada menciptakan tampilan dan pengalaman pengguna yang sederhana, cepat, dan fungsional.",
  approach:
    "Saya mengutamakan clean code, desain responsif, dan pengalaman pengguna yang intuitif dalam setiap proyek yang saya kerjakan.",
};

export const roles = ["Frontend Developer", "Fullstack Developer", "Bot Developer"];

export const chips = [
  { label: "2+ Years of Experience", icon: "clock" as const },
  { label: "Javascript Main Language", icon: "code" as const },
  { label: "Fullstack developer", icon: "monitor" as const },
];

export type Job = {
  year: string;
  title: string;
  company: string;
  body: string;
  tags: string[];
};

export const jobs: Job[] = [
  {
    year: "2025",
    title: "Fullstack Web Developer",
    company: "Baril Panel",
    body: "Developed a web platform for selling hosting panels with dedicated admin and user dashboards. Implemented analytics for monitoring sales and system usage, built system settings management, and integrated a payment gateway for automated transactions.",
    tags: ["Next.js", "Node.js", "Prisma", "Express.js", "Tailwind CSS", "MySQL", "API Integration"],
  },
  {
    year: "2025",
    title: "Fullstack Web Developer",
    company: "Baril API",
    body: "Developed Baril API, a platform that provides developers with easy access to free APIs accompanied by comprehensive documentation. Built a responsive frontend interface and implemented a backend system to handle API requests, user access, and data management.",
    tags: ["Next.js", "Tailwind CSS", "Express.js", "MySQL", "REST API"],
  },
  {
    year: "2024 – 2025",
    title: "Bot Developer",
    company: "WhatsApp Bot Platform",
    body: "Built a multifunctional WhatsApp bot with various features including games, utility tools, and automated services. Implemented message processing, API integrations, and dynamic command handling to create interactive chat-based experiences.",
    tags: ["Node.js", "Baileys", "Puppeteer", "Express.js", "Canvas", "API Integration"],
  },
];

export const stackGroups = [
  {
    title: "Frontend Languages & Frameworks",
    body: "The tools I use to build beautiful, responsive, and interactive user interfaces.",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend Core",
    body: "The foundations of the APIs and services I build for web apps and bots.",
    items: ["Node.js", "Express.js", "MySQL", "MongoDB"],
  },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contacts" },
];
