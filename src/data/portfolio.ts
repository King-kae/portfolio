
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  end?: string;
  thumbnail: string;
  hoverColor?: React.CSSProperties;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    libraries: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Kayode Raimi",
  role: "FullStack Developer",
  about: `Aspiring Full Stack Developer with foundational skills in front-end (HTML, CSS, JavaScript, React/Vue.js,
    Next.js) and back-end (Node.js, Express, MongoDB, SQL) technologies. Eager to build on my
    experience, learn new tools, and contribute to creating scalable web applications while collaborating
    with cross-functional teams.`,
  profileImage: "/images/kayode.jpg",
  blogUrl: "",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/King-kae",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kayode-raimi-32a640218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: "Linkedin",
    },
    {
      platform: "X",
      url: "https://x.com/kingkae_001?s=21",
      icon: "Twitter", // Lucide might not have X yet, using Twitter as fallback or X if available in next step
    },
    {
      platform: "Email",
      url: "mailto:kayode.raimi123@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    libraries: [
      "React",
      "NextJS",
      "Vue.js",
    ],
    web: [
      "REST APIs",
      "Node.js",
      "MySQL",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Cypress",
      "Jest"
    ],
    tools: ["Git", "Postman", "VS Code", "GitHub"],
  },
  experience: [
    {
      company: "Ostivities",
      role: "Frontend Developer",
      period: "Aug 2024 - Present",
      description: [
        "Translated Figma designs into responsive, high-quality user interfaces.",
        "Developed and integrated reusable frontend components and consumed REST APIs.",
        "Wrote unit and end-to-end tests to ensure reliability of critical features.",
      ],
    },
    {
      company: "LeadingAlpha",
      role: "Frontend Developer (Independent Project)",
      period: "2025",
      description: [
        "Designed and developed the LeadingAlpha website independently from concept to deployment.",
        "Implemented Figma designs into a fully responsive and production-ready web application.",
        "Integrated MongoDB for data storage and management.",
        "Configured deployment and hosting using Cloudflare and GoDaddy, including domain setup and performance optimization.",
      ],
    },
    {
      company: "Stackron",
      role: "Intern - Frontend Developer",
      period: "Feb 2025 - Jul 2025",
      description: [
        "Implemented the doctor's profile page UI based on provided Figma designs.",
        "Integrated the corresponding API for the doctor's profile page",
        "Built and maintained admin dashboard pages, ensuring consistency and usability.",
        "Collaborated with team members to refine UI behavior and improve user experience.",
      ],
    },
  ],
  projects: [
    {
      title: "Ostivities",
      description:
        "A full-featured event management and ticketing platform designed to help organizers publish events and drive ticket sales through an intuitive web interface.",
      techStack: ["NextJS", "MongoDB", "Rest APIs", "TailwindCSS"],
      link: "https://www.ostivities.com/",
      github: "https://github.com/Ostivities",
      thumbnail: "/images/projects/ostivities.png",
      hoverColor: { color: "#e20000" },
    },
    {
      title: "Chatter",
      description:
        "Chatter is a blogging and content-publishing platform where users can create, publish, and explore written content in a streamlined digital environment.",
      techStack: ["NextJS", "MongoDB", "NextAuth", "TailwindCSS"],
      link: "https://nextjs-chatter-teal.vercel.app/",
      github: "https://github.com/King-kae/nextjs-chatter",
      thumbnail: "/images/projects/chatter.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A previous version of my personal portfolio website showcasing my projects, work experience, and resume before launching the further iterations built in more modern tech stack.",
      techStack: ["NextJS", "Bootstrap", "JQuery"],
      link: "https://portfolio-king-kaes-projects.vercel.app/",
      github: "https://github.com/King-kae/",
      thumbnail: "/images/projects/portfolio.png",
    },
    {
      title: "GitHub Repository",
      description:
        "A personal GitHub portfolio website that dynamically showcases my repositories, project details, and development activity through the GitHub API.",
      techStack: ["React", "HTML", "TailwindCSS"],
      link: "https://alt-school-assignment-ss.vercel.app/",
      github: "https://github.com/King-kae/AltSchool-Assignment-SS-",
      thumbnail: "/images/projects/repos.png",
    },
    {
      title: "Authentication and Authorization",
      description:
        "A RESTful backend API implementing secure authentication and authorization using Passport.js, including local strategy and third-party OAuth (Google and GitHub). The service enables authenticated users to create and manage book resources via protected routes.",
      techStack: ["NodeJS", "ExpressJS", "ejs", "MongoDB"],
      github: "https://github.com/King-kae/Authentication-and-Authorization",
      end: "backend",
      thumbnail: "/images/projects/node.png",
    },
    {
      title: "PropTech API(incomplete)",
      description:
        "Built scalable backend services for a real-estate platform, enabling property owners to publish listings and facilitating property search and selection for potential clients.",
      techStack: ["NodeJS", "ExpressJS", "MongoDB"], 
      github: "https://github.com/King-kae/Group-45-Capstone-Project-Backend",
      end: "backend",
      thumbnail: "/images/projects/node.png",
    },
  ],
};
