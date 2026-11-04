export const site = {
  name: "RIIT Global Tech",
  shortName: "RIIT",
  tagline: "Your Reliable IT Partner",
  founded: "2010",
  url: "https://riit-global-tech.vercel.app",
  description:
    "RIIT Global Tech delivers technology solutions and practical digital skills that help businesses, individuals and organisations grow.",
  longDescription:
    "At RIIT Global Tech, we deliver world-class ICT solutions designed to help individuals, schools, and businesses stay ahead in a fast-moving digital world. Since 2010, we have been committed to excellence, innovation, and reliability.",
  equipmentStatement:
    "We pride ourselves on importing only genuine, high-quality equipment from the United Kingdom, ensuring that our clients receive products that meet international standards of quality and durability.",
  email: "riitic51@gmail.com",
  phones: [
    { label: "Primary", display: "0802 396 2693", tel: "+2348023962693" },
    { label: "Second line", display: "0811 033 0765", tel: "+2348110330765" },
    { label: "Third line", display: "0810 417 4096", tel: "+2348104174096" },
  ],
  whatsapp: {
    display: "0802 396 2693",
    href: "https://wa.me/2348023962693",
  },
  address: {
    street: "25, Ijegun Road, Oropo Bus Stop",
    city: "Ikotun",
    region: "Alimosho, Lagos",
    country: "Nigeria",
    full: "25, Ijegun Road, Oropo Bus Stop, Ikotun, Alimosho, Lagos, Nigeria",
  },
  mapEmbed:
    "https://www.google.com/maps?q=25+Ijegun+Road,+Oropo+Bus+Stop,+Ikotun,+Alimosho,+Lagos,+Nigeria&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=25+Ijegun+Road,+Oropo+Bus+Stop,+Ikotun,+Alimosho,+Lagos,+Nigeria",
  audiences: ["Individuals", "Schools", "Businesses"],
  socials: [] as { label: string; href: string }[],
} as const;

export const stats = [
  { value: "15+", label: "Years experience", note: "Serving clients since 2010" },
  { value: "500+", label: "Projects completed", note: "Across ICT services and training" },
  { value: "1,000+", label: "Happy clients", note: "Individuals, schools and businesses" },
  { value: "UK", label: "Quality equipment", note: "Genuine, internationally sourced" },
] as const;

export const trustPoints = [
  "Certified professionals",
  "UK-sourced equipment",
  "Reliable support",
  "Affordable pricing",
] as const;

export type ServiceCategory = "Infrastructure" | "Digital" | "Training" | "Support";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon: string;
  description: string;
  intro: string;
  features: string[];
  includes: { title: string; body: string }[];
  audiences: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "home-office-networking",
    number: "01",
    title: "Home & Office Networking",
    shortTitle: "Networking",
    category: "Infrastructure",
    icon: "network",
    description:
      "Professional networking solutions for small, medium, and large enterprises with complete system automation for seamless operations.",
    intro:
      "Complete network infrastructure for small, medium, and large enterprises. We plan, install and support the cabling, routing, switching and access layers that keep teams connected.",
    features: ["LAN/WAN Setup", "Network Security", "System Automation", "Remote Access"],
    includes: [
      {
        title: "LAN/WAN Setup",
        body: "Structured local and wide-area networking for offices, schools and multi-site operations.",
      },
      {
        title: "Network Security",
        body: "Firewall, access-control and network-hardening measures to protect business traffic.",
      },
      {
        title: "System Automation",
        body: "Connected systems and automated workflows that reduce manual IT administration.",
      },
      {
        title: "Remote Access",
        body: "Secure access to shared resources for staff working across locations.",
      },
    ],
    audiences: "Small, medium and large enterprises",
    related: ["cbt-cbe-centre-setup", "sales-repairs-configurations", "it-consulting-support"],
  },
  {
    slug: "cbt-cbe-centre-setup",
    number: "02",
    title: "CBT/CBE Center Setup",
    shortTitle: "CBT centres",
    category: "Infrastructure",
    icon: "monitor",
    description:
      "Standard, fully approved CBT/CBE centers for JAMB, WAEC, and NECO examinations with complete infrastructure.",
    intro:
      "Standard CBT/CBE centres for JAMB, WAEC and NECO examinations. We handle the workstations, networking and centre configuration required for a professional examination environment.",
    features: ["JAMB Approved", "WAEC Certified", "NECO Accredited", "Full Setup"],
    includes: [
      {
        title: "JAMB-ready setup",
        body: "Centre infrastructure aligned with JAMB computer-based examination requirements.",
      },
      {
        title: "WAEC-prepared infrastructure",
        body: "Workstations and networking prepared for WAEC computer-based examinations.",
      },
      {
        title: "NECO-prepared infrastructure",
        body: "Workstations and networking prepared for NECO computer-based examinations.",
      },
      {
        title: "Full centre setup",
        body: "Workstation layout, networking, configuration and technical setup for the centre.",
      },
    ],
    audiences: "Schools, training centres and examination-centre operators",
    related: ["home-office-networking", "sales-repairs-configurations", "it-consulting-support"],
  },
  {
    slug: "website-development",
    number: "03",
    title: "Website Development",
    shortTitle: "Websites",
    category: "Digital",
    icon: "globe",
    description:
      "Modern website development and full school portal design and management for educational institutions.",
    intro:
      "Modern websites and school portals built around your content, your audience and the way your organisation works.",
    features: ["Custom Websites", "School Portals", "E-Learning Platforms", "SEO Optimization"],
    includes: [
      {
        title: "Custom websites",
        body: "Business, school and organisation websites built around your content and goals.",
      },
      {
        title: "School portals",
        body: "Portal design and management for educational institutions.",
      },
      {
        title: "E-learning platforms",
        body: "Online learning experiences for schools and training providers.",
      },
      {
        title: "SEO optimization",
        body: "Search-friendly structure, metadata and performance foundations.",
      },
    ],
    audiences: "Schools, businesses and organisations",
    related: ["ecommerce-development", "blog-development", "portfolio-websites"],
  },
  {
    slug: "ecommerce-development",
    number: "04",
    title: "E-Commerce Site Development",
    shortTitle: "E-commerce",
    category: "Digital",
    icon: "cart",
    description:
      "Build powerful online stores with payment integration, inventory management, and seamless shopping experiences.",
    intro:
      "Online stores that make it easy for customers to browse, pay and return — with the operational tools your team needs behind the scenes.",
    features: ["Online Stores", "Payment Gateway", "Inventory System", "Order Tracking"],
    includes: [
      {
        title: "Online stores",
        body: "Storefronts built for browsing, checkout and repeat custom.",
      },
      {
        title: "Payment gateway",
        body: "Integration of online payment flows for your store.",
      },
      {
        title: "Inventory system",
        body: "Product and stock management for day-to-day operations.",
      },
      {
        title: "Order tracking",
        body: "Order visibility for customers and the team fulfilling them.",
      },
    ],
    audiences: "Businesses selling products online",
    related: ["website-development", "blog-development", "portfolio-websites"],
  },
  {
    slug: "blog-development",
    number: "05",
    title: "Blog Site Creation",
    shortTitle: "Blogs",
    category: "Digital",
    icon: "pen",
    description:
      "Professional blog platforms with content management, SEO optimization, and engaging layouts.",
    intro:
      "Publishing platforms for writers, publishers and businesses that want to build an audience with a site they can manage themselves.",
    features: ["CMS Setup", "SEO Ready", "Custom Themes", "Social Integration"],
    includes: [
      {
        title: "CMS setup",
        body: "A manageable publishing workflow for your team.",
      },
      {
        title: "SEO ready",
        body: "Clean structure and metadata for discoverability.",
      },
      {
        title: "Custom themes",
        body: "A blog design matched to your brand.",
      },
      {
        title: "Social integration",
        body: "Share and distribution links connected to your channels.",
      },
    ],
    audiences: "Writers, publishers and businesses",
    related: ["website-development", "ecommerce-development", "portfolio-websites"],
  },
  {
    slug: "portfolio-websites",
    number: "06",
    title: "Portfolio Site Creation",
    shortTitle: "Portfolios",
    category: "Digital",
    icon: "layout",
    description:
      "Stunning portfolio websites to showcase your work, projects, and professional achievements.",
    intro:
      "Portfolio sites that put the work first: clear galleries, strong typography and a direct route for enquiries.",
    features: ["Creative Designs", "Gallery Layouts", "Responsive", "Contact Forms"],
    includes: [
      {
        title: "Creative designs",
        body: "A visual showcase shaped around your work and professional identity.",
      },
      {
        title: "Gallery layouts",
        body: "Project and image galleries that stay easy to browse.",
      },
      {
        title: "Responsive",
        body: "A consistent experience across phones, tablets and desktop screens.",
      },
      {
        title: "Contact forms",
        body: "A direct enquiry path for potential clients and collaborators.",
      },
    ],
    audiences: "Creatives, freelancers and businesses",
    related: ["website-development", "blog-development", "graphic-design-training"],
  },
  {
    slug: "ict-professional-training",
    number: "07",
    title: "ICT Professional Training",
    shortTitle: "Training",
    category: "Training",
    icon: "graduation",
    description:
      "Certified training under Cisco Networking Academy with corporate ICT consultancy services.",
    intro:
      "Practical ICT training for beginners and working professionals, delivered under the Cisco Networking Academy. Explore the full Academy for course details.",
    features: ["Cisco Certified", "Networking", "Cybersecurity", "Data Analysis"],
    includes: [
      {
        title: "Cisco Networking Academy",
        body: "Training offered under our Cisco Networking Academy programme.",
      },
      {
        title: "Networking",
        body: "Network design, configuration and management skills.",
      },
      {
        title: "Cybersecurity",
        body: "Threat protection and security fundamentals.",
      },
      {
        title: "Data analysis",
        body: "Excel, SQL and Python for data-driven decisions.",
      },
    ],
    audiences: "Beginners and working professionals",
    related: ["home-office-networking", "website-development", "it-consulting-support"],
  },
  {
    slug: "sales-repairs-configurations",
    number: "08",
    title: "Sales, Repairs & Configurations",
    shortTitle: "Sales & repairs",
    category: "Support",
    icon: "wrench",
    description:
      "Sales of genuine UK-imported laptops, desktops, servers with professional repair and data recovery services.",
    intro:
      "Genuine UK-imported equipment, professional repairs and the configuration work that keeps devices ready for use.",
    features: ["Equipment Sales", "Server Setup", "Data Recovery", "Configurations"],
    includes: [
      {
        title: "Equipment sales",
        body: "Genuine UK-imported laptops, desktops, servers and accessories.",
      },
      {
        title: "Server setup",
        body: "Server configuration and deployment for your environment.",
      },
      {
        title: "Data recovery",
        body: "Professional recovery of lost or inaccessible data.",
      },
      {
        title: "Configurations",
        body: "System setup and configuration before handover.",
      },
    ],
    audiences: "Homes, schools, offices and businesses",
    related: ["home-office-networking", "cbt-cbe-centre-setup", "it-consulting-support"],
  },
  {
    slug: "it-consulting-support",
    number: "09",
    title: "IT Consulting & Support",
    shortTitle: "Consulting & support",
    category: "Support",
    icon: "spark",
    description:
      "We offer a wide range of additional ICT services tailored to meet your unique business needs.",
    intro:
      "The additional ICT work that does not fit a single label: consulting, custom solutions, technical support and ongoing maintenance. Originally listed on our site as “And Many More”.",
    features: ["IT Consulting", "Custom Solutions", "Tech Support", "Maintenance"],
    includes: [
      {
        title: "IT consulting",
        body: "Practical advice on technology decisions and ICT planning.",
      },
      {
        title: "Custom solutions",
        body: "Solutions shaped around your specific business needs.",
      },
      {
        title: "Tech support",
        body: "Ongoing technical assistance when systems need attention.",
      },
      {
        title: "Maintenance",
        body: "Keeping systems healthy over time.",
      },
    ],
    audiences: "Businesses and organisations",
    related: ["home-office-networking", "website-development", "sales-repairs-configurations"],
  },
];

export type Course = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  durationLabel: string;
  icon: string;
  skills: string[];
  intro: string;
};

export const courses: Course[] = [
  {
    slug: "computer-hardware",
    name: "Computer Hardware",
    shortName: "Hardware",
    description: "Learn PC assembly, troubleshooting, and maintenance.",
    durationLabel: "Flexible",
    icon: "cpu",
    skills: ["PC assembly", "Hardware troubleshooting", "Preventive maintenance", "Component identification"],
    intro:
      "Build a practical foundation in the physical side of computing: assembling PCs, diagnosing faults and keeping hardware in working order.",
  },
  {
    slug: "networking",
    name: "Networking",
    shortName: "Networking",
    description: "Master network design, configuration, and management.",
    durationLabel: "Cisco Certified",
    icon: "network",
    skills: ["Network design", "Configuration", "Network management", "Cisco-aligned training"],
    intro:
      "Learn how networks are designed, configured and managed, with training delivered under the Cisco Networking Academy programme.",
  },
  {
    slug: "data-analysis",
    name: "Data Analysis",
    shortName: "Data analysis",
    description: "Excel, SQL, Python for data-driven decisions.",
    durationLabel: "Practical",
    icon: "chart",
    skills: ["Excel", "SQL", "Python", "Data-driven decision making"],
    intro:
      "Work with the tools teams use to turn raw data into useful decisions: spreadsheets, databases and Python.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    description: "Protect systems from threats and vulnerabilities.",
    durationLabel: "Industry Standard",
    icon: "shield",
    skills: ["Threat awareness", "Vulnerability protection", "Security fundamentals", "Safe system practices"],
    intro:
      "Understand the threats that affect modern systems and the practical habits that reduce risk.",
  },
  {
    slug: "os-fundamentals",
    name: "OS Fundamentals",
    shortName: "OS fundamentals",
    description: "Windows, Linux, and system administration.",
    durationLabel: "Comprehensive",
    icon: "settings",
    skills: ["Windows", "Linux", "System administration", "Operating system concepts"],
    intro:
      "A grounded introduction to the operating systems behind most IT environments, and the administration tasks that keep them running.",
  },
  {
    slug: "frontend-development",
    name: "Frontend Development",
    shortName: "Frontend",
    description: "HTML, CSS, JavaScript, React for modern web development.",
    durationLabel: "Hands-On",
    icon: "code",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    intro:
      "Learn to build interfaces for the modern web, from structure and styling to interactive React components.",
  },
  {
    slug: "wordpress-training",
    name: "WordPress Training",
    shortName: "WordPress",
    description: "Build and manage professional websites with WordPress.",
    durationLabel: "Beginner Friendly",
    icon: "globe",
    skills: ["WordPress setup", "Content management", "Site management", "Professional websites"],
    intro:
      "A beginner-friendly route into building and managing professional websites with WordPress.",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    shortName: "Graphic design",
    description: "Master Photoshop, Illustrator, and visual design principles.",
    durationLabel: "Creative",
    icon: "palette",
    skills: ["Photoshop", "Illustrator", "Visual design principles", "Creative composition"],
    intro:
      "Develop a practical grounding in visual design using the tools professional designers rely on.",
  },
];

export const products = [
  { name: "Networking Cables", description: "CAT5, CAT6, Fiber Optic", icon: "cable" },
  { name: "Routers & Switches", description: "Enterprise Grade", icon: "router" },
  { name: "CPUs & Processors", description: "Intel & AMD", icon: "cpu" },
  { name: "Printers", description: "Laser & Inkjet", icon: "printer" },
  { name: "Wireless Mouse", description: "Ergonomic Design", icon: "mouse" },
  { name: "Wireless Keyboards", description: "Premium Quality", icon: "keyboard" },
  { name: "Tablets", description: "Various Brands", icon: "tablet" },
  { name: "Tablet Pouches", description: "Protective Cases", icon: "briefcase" },
  { name: "IT Accessories", description: "Complete Range", icon: "package" },
] as const;

export const cbtCentres = [
  { name: "STATO CBT Center", location: "Igbo Elerin" },
  { name: "SUBLIME CBT Center", location: "Cele-Nica" },
  { name: "MUSLIM TEENS CBT Center", location: "Ijegun" },
] as const;

export const whyRiit = [
  {
    title: "Genuine UK equipment",
    description:
      "All our IT equipment is sourced directly from the United Kingdom, ensuring international quality standards.",
    icon: "package",
  },
  {
    title: "Certified professionals",
    description:
      "Our team consists of certified experts with years of experience in IT solutions and support.",
    icon: "users",
  },
  {
    title: "Reliable support",
    description:
      "24/7 customer support to ensure your systems run smoothly without any interruptions.",
    icon: "headset",
  },
  {
    title: "Affordable pricing",
    description:
      "Premium quality services and products at competitive prices without compromise.",
    icon: "tag",
  },
] as const;

export const values = [
  {
    title: "Excellence",
    description:
      "We are committed to excellence in every engagement, from a single repair to a full network deployment.",
  },
  {
    title: "Innovation",
    description:
      "We help individuals, schools and businesses stay ahead in a fast-moving digital world.",
  },
  {
    title: "Reliability",
    description:
      "Reliable support and dependable systems are part of the service, not an afterthought.",
  },
  {
    title: "Quality",
    description:
      "We import genuine, high-quality equipment from the United Kingdom that meets international standards of quality and durability.",
  },
] as const;

export const capabilityAreas = [
  {
    title: "School portals & websites",
    description:
      "Website development and school portal design and management for educational institutions.",
    tag: "Digital",
  },
  {
    title: "CBT/CBE centre infrastructure",
    description:
      "Complete workstation, networking and configuration setup for computer-based examination centres.",
    tag: "Infrastructure",
  },
  {
    title: "E-commerce & payments",
    description:
      "Online stores with payment integration, inventory management and order tracking.",
    tag: "Digital",
  },
  {
    title: "Networking & servers",
    description:
      "LAN/WAN setup, network security, server setup and system configuration.",
    tag: "Infrastructure",
  },
  {
    title: "UK-sourced equipment",
    description:
      "Genuine laptops, desktops, servers, networking hardware and IT accessories.",
    tag: "Supply",
  },
  {
    title: "Practical ICT training",
    description:
      "Cisco Networking Academy training across networking, cybersecurity, data analysis and more.",
    tag: "Academy",
  },
] as const;

export const faqs = [
  {
    question: "How do I enrol for a course?",
    answer:
      "Contact us by phone, WhatsApp or the enquiry form. We will confirm the next available schedule and the steps to register.",
  },
  {
    question: "Are course fees published?",
    answer:
      "Fees are not published on this site. Contact us for current fees and payment options.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Requirements vary by programme. Some courses, such as WordPress Training, are beginner-friendly; contact us and we will advise on the right starting point.",
  },
  {
    question: "Is training delivered under Cisco Networking Academy?",
    answer:
      "Our ICT training is offered under the Cisco Networking Academy, as stated in our existing service information. Contact us for current course availability and certification details.",
  },
  {
    question: "Where is training held?",
    answer:
      "Our address is 25, Ijegun Road, Oropo Bus Stop, Ikotun, Alimosho, Lagos. Contact us before visiting so we can confirm the right person is available.",
  },
  {
    question: "Do you offer corporate training or consultancy?",
    answer:
      "Yes. We provide corporate ICT consultancy and can discuss training requirements for teams. Contact us with your requirements.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceCategories: ServiceCategory[] = ["Infrastructure", "Digital", "Training", "Support"];
