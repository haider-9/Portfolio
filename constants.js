import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiReactrouter,
  SiShadcnui,
  SiRadixui,
  SiAppwrite,
  SiFramer,
  SiKonva
} from "react-icons/si";

export const techIcons = {
  React: <FaReact style={{ color: "rgba(97, 218, 251, 1)" }} />,
  "Next.js": <SiNextdotjs style={{ color: "white" }} />,
  TypeScript: <SiTypescript style={{ color: "rgba(49, 120, 198, 1)" }} />,
  GraphQL: <SiGraphql style={{ color: "rgba(229, 53, 171, 1)" }} />,
  Tailwind: <SiTailwindcss style={{ color: "rgba(56, 178, 172, 1)" }} />,
  Express: <SiExpress style={{ color: "rgba(55, 65, 81, 1)" }} />,
  "Node.js": <SiNodedotjs style={{ color: "rgba(51, 153, 51, 1)" }} />,
  MongoDB: <SiMongodb style={{ color: "rgba(71, 162, 72, 1)" }} />,
  ReactRouter: <SiReactrouter style={{ color: "rgba(202, 66, 69, 1)" }} />,
  ShadcnUI: <SiShadcnui style={{ color: "rgba(55, 65, 81, 1)" }} />,
  RadixUI: <SiRadixui style={{ color: "rgba(20, 184, 166, 1)" }} />,
  Appwrite: <SiAppwrite style={{ color: "rgba(240, 46, 101, 1)" }} />,
  Framer: <SiFramer style={{ color: "rgba(0, 85, 255, 1)" }} />,
  Konva: <SiKonva style={{ color: "rgba(0, 150, 136, 1)" }} />
  
};

export const techColors = {
  React: { from: "rgba(97, 218, 251, 0.05)", to: "rgba(97, 218, 251, 0.1)" },
  "Next.js": { from: "rgba(55, 65, 81, 0.1)", to: "rgba(17, 24, 39, 0.05)" },
  TypeScript: {
    from: "rgba(49, 120, 198, 0.05)",
    to: "rgba(49, 120, 198, 0.1)",
  },
  GraphQL: { from: "rgba(229, 53, 171, 0.05)", to: "rgba(229, 53, 171, 0.1)" },
  Tailwind: { from: "rgba(56, 178, 172, 0.05)", to: "rgba(56, 178, 172, 0.1)" },
  Express: { from: "rgba(55, 65, 81, 0.05)", to: "rgba(31, 41, 55, 0.1)" },
  "Node.js": { from: "rgba(51, 153, 51, 0.05)", to: "rgba(51, 153, 51, 0.1)" },
  MongoDB: { from: "rgba(71, 162, 72, 0.05)", to: "rgba(71, 162, 72, 0.1)" },
  ReactRouter: {
    from: "rgba(202, 66, 69, 0.05)",
    to: "rgba(202, 66, 69, 0.1)",
  },
  ShadcnUI: { from: "rgba(55, 65, 81, 0.05)", to: "rgba(31, 41, 55, 0.1)" },
  RadixUI: { from: "rgba(20, 184, 166, 0.05)", to: "rgba(20, 184, 166, 0.1)" },
  Appwrite: { from: "rgba(240, 46, 101, 0.05)", to: "rgba(240, 46, 101, 0.1)" },
  Framer: { from: "rgba(0, 85, 255, 0.05)", to: "rgba(0, 85, 255, 0.1)" },
  Konva: { from: "rgba(0, 150, 136, 0.05)", to: "rgba(0, 150, 136, 0.1)" }
  
};

export const projectData = [
  {
    title:'GaminDom',
    description:
      "Welcome to GaminDom, your ultimate destination for everything gaming! Whether you're a seasoned gamer or a curious newcomer, our website is designed to bring you closer to the vibrant world of gaming",
    image: "/assets/projects/GaminDom.png",
    technologies: [
      "React",
      "Tailwind",
      "TypeScript",
      "ReactRouter",
      "ShadcnUI",
      "RadixUI",
      'Next.js',

    ],
    githubLink: 'https://github.com/haider-9/GaminDom',
    previewLink: 'https://gamin-dom.vercel.app',
    year: '2025',
    category: 'Frontend',
    theme: '#361518', // Deep indigo from gaming collage
  },
  {
    title: "Animadom",
    description:
      "Welcome to AnimaDom, your ultimate destination for everything anime! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of anime",
    image: "/assets/projects/Animadom.png",
    technologies: [
      "Express",
      "GraphQL",
      "React",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "ReactRouter",
      "ShadcnUI",
      "RadixUI",
    ],
    githubLink: "https://github.com/haider-9/Animadom",
    previewLink: "https://animadom.vercel.app",
    year: "2024",
    category: "Full Stack",
    theme: "#1c1b2e", // Deep indigo from anime collage
  },
  {
    title:"Scriblr",
    description:"A whiteboarding app like excalidraw.",
    image:"/assets/projects/Scriblr.png",
    technologies:["React","Tailwind","ShadcnUI","Konva"],
    githubLink:"https://github.com/haider-9/scriblr",
    previewLink:"https://scriblr-green.vercel.app",
    year:"2025",
    category:"SaaS",
    theme:"#2d1818",
  },
  {
    title: "Audix",
    description:
      "Audix earbuds deliver premium sound, deep bass, and all-day comfort. Shop wireless earbuds engineered for music lovers, gamers, and everyday listeners.",
    image: "/assets/projects/Audix.png",
    technologies: ["Next.js", "React", "Tailwind", "Framer"],
    githubLink: "https://github.com/haider-9/Audix",
    previewLink: "https://audixs.vercel.app",
    year: "2025",
    category: "Frontend",
    theme: "#4c3f91", // Blueish purple from earbuds product shot
  },
  {
    title: "Tipu Electrics",
    description:
      "Tipu Electrical Services has been providing top-quality electrical solutions to residential, commercial, and industrial clients for over 15 years. Founded with a commitment to excellence, we have grown to become one of the most trusted names in the industry.",
    image: "/assets/projects/Tipu.png",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/haider-9/Tipu-Electrics",
    previewLink: "https://tipu-electrics.vercel.app/",
    year: "2025",
    category: "Frontend",
    theme: "#0c1c33", // Dark blue from brand colors
  },
  {
    title: "MangaDom",
    description:
      "Welcome to MangaDom, your ultimate destination for everything manga! Whether you're a seasoned otaku or a curious newcomer, our website is designed to bring you closer to the vibrant world of manga",
    image: "/assets/projects/Mangadom.png",
    technologies: [
      "Next.js",
      "GraphQL",
      "React",
      "Tailwind",
      "ShadcnUI",
      "RadixUI",
    ],
    githubLink: "https://github.com/haider-9/MangaDom",
    previewLink: "https://mangadom.vercel.app",
    year: "2024",
    category: "Frontend",
    theme: "#2d1e1e", // Muted maroon from manga imagery
  },
  {
    title: "DevHive",
    description:
      "DevHive is a modern developer community platform where tech professionals can connect, share knowledge, and stay updated with the latest industry trends. We are building a comprehensive social platform for developers to collaborate, learn, and grow together.",
    image: "/assets/projects/Devhive.png",
    technologies: ["Next.js", "React", "Tailwind", "Appwrite"],
    githubLink: "https://github.com/haider-9/DevHive",
    previewLink: "https://devhsr.vercel.app",
    year: "2025",
    category: "Full Stack",
    theme: "#1c1c1c", // Solid dark gray from dashboard UI
  },
  {
    title: "Samurai Systems",
    description:
      "Samurai -Team of solution architects, developers and consultants having only one aim in mind deliver the best, nothing else ",
    image: "/assets/projects/Samurai.png",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/Sharoon166/Samurai_Systems",
    previewLink: "https://samurai-systems166.vercel.app/",
    year: "2024",
    category: "Frontend",
    theme: "#1a0c0c", // Deep red-black from branding
  },
  {
    title: "Z-Digitizing",
    description:
      "Welcome to Z Digitizing, your trusted partner for high-quality embroidery digitizing services.",
    image: "/assets/projects/z.png",
    technologies: ["Next.js", "React"],
    githubLink: "https://github.com/Sharoon166/z_digitizing",
    previewLink: "https://z-digitizing.vercel.app/",
    year: "2024",
    category: "Frontend",
    theme: "#1f1f1f", // Neutral dark from embroidery theme
  },
  {
    title: "Break Time",
    description:
      "This web application serves as the admin dashboard for Braketime's backoffice operations. It provides a centralized interface for managing various aspects of the business, including employee records, customer data, inventory management, and more. 💼🏢",
    image: "/assets/projects/Shop.png",
    technologies: ["Tailwind", "React"],
    githubLink: "https://github.com/Sharoon166/brake-time",
    previewLink: "https://brake-time.vercel.app/",
    year: "2024",
    category: "Frontend",
    theme: "#1a2e1a", // Dark green from dashboard UI
  },
  {
    title: "Resume-Crew",
    description:
      "A sleek and interactive resume builder with multiple template options and real-time preview.",
    image: "/assets/projects/Resume.png",
    technologies: ["Tailwind", "React"],
    githubLink: "https://github.com/haider-9/Resume-Crew",
    previewLink: "https://resumecrew.vercel.app/",
    year: "2025",
    category: "Frontend",
    theme: "#0a1e22", // Dark blue from templates
  },
  {
    title: "Voyager",
    description:
      "Voyager is a modern travel experience platform designed to help users discover, plan, and share their travel adventures. With an intuitive interface and comprehensive features, Voyager makes travel planning seamless and enjoyable.",
    image: "/assets/projects/Voyager.png",
    technologies: [
      "Express",
      "GraphQL",
      "React",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "ReactRouter",
      "ShadcnUI",
      "RadixUI",
    ],
    githubLink: "https://github.com/haider-9/Voyager",
    previewLink: "https://voyagermern.vercel.app/",
    year: "2024",
    category: "Full Stack",
    theme: "#0a1e22", // Dark cyan/navy from travel imagery
  },
];
