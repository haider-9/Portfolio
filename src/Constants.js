import voyagertravels from "../public/assets/VoyagerTravels.png";

export const projects = [
  {
    id: 1,
    name: "Voyager Travels",
    description: "Welcome to Voyager, my first frontend project. This project showcases my skills in frontend development and includes various features that enhance user experience.",
    image_url: voyagertravels,
    preview_url: "https://voyagertravels.vercel.app/",
    code_url: "https://github.com/haider-9",
    video_url: "/assets/Voyager.mp4",
    tech_stack: [
      { url: "/assets/tailwind.svg", name: 'Tailwind CSS' }
    ]
  },
  {
    id: 2,
    name: "Animadom",
    description: "Welcome to Animadom, my first Next.js project. This project demonstrates my ability to create dynamic web applications using modern frameworks.",
    image_url: "/assets/animadom.png",
    preview_url: "https://animadom.vercel.app/",
    code_url: "https://github.com/haider-9",
    video_url: "/assets/Animadom.mp4",
    tech_stack: [
      { url: "/assets/nextjs.svg", name: 'Next.js' },
      { url: "/assets/react.svg", name: 'React' },
      { url: "/assets/tailwind.svg", name: 'Tailwind CSS' },
    ]
  },
  {
    id: 3,
    name: "MangaDom",
    description: "MangaDom, a part of Animadom project, also made in nextjs. It focuses on providing a seamless experience for manga enthusiasts with a user-friendly interface.",
    image_url: "/assets/mangadom.jpg",
    preview_url: "https://mangadom.vercel.app",
    code_url: "https://github.com/haider-9",
    video_url: "/assets/Mangadom.mp4",
    tech_stack: [
      { url: "/assets/nextjs.svg", name: 'Next.js' },
      { url: "/assets/react.svg", name: 'React' },
      { url: "/assets/tailwind.svg", name: 'Tailwind CSS' },
    ]
  }
];