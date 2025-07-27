export const links = {
  contactEmail: "utkarshkhajuria7@gmail.com",
  sourceCode: "https://github.com/UtkarsHMer05/threejs-portfolio",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "/assets/review1.png",
    review:
      "Working with Utkarsh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "/assets/review2.png",
    review:
      "Utkarsh's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "/assets/review3.png",
    review:
      "I can't say enough good things about Utkarsh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "/assets/review4.png",
    review:
      "Utkarsh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
] as const;

export const myProjects = [
  {
    title: "Sentiment Analysis with Live Detection",
    desc: "Sentiment Analysis with Live Detection is a cutting-edge application that leverages AI to analyze and interpret emotions in real-time. This innovative tool is designed for Medical patients, content creators, and marketers who want to understand audience reactions instantly.",
    subdesc:
      "Built with Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and Convex--> for frontend ,and python using pytorch openwisper---> for backend  ,and have stripe payment implementation and deployed to AWS , this application is optimized for performance and scalability.",
    href: "https://www.example.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Realtime Retail Store for Phone cases",
    desc: "This project is a real-time retail store application specifically designed for selling phone cases. It provides users with an intuitive shopping experience, featuring live inventory updates, user reviews, and a seamless checkout process.",
    subdesc:
      "Built with Next.js, Tailwind CSS, and PostgreSQL with stripe payment , this application ensures a smooth and responsive user experience, allowing customers to browse and purchase products effortlessly.",
    href: "https://www.example.com",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Suburbia Skateboarding - E-commerce 3D Platform",
    desc: "An innovative e-commerce platform designed for skateboard enthusiasts. It offers a wide range of skateboards, accessories, and apparel, providing a seamless shopping experience for users.",
    subdesc:
      "With a focus on user experience, Suburbia Skateboarding integrates real-time inventory management and personalized recommendations, by using Next.js, Appwrite, Twilio, and Sentry that enhance operational workflows.",
    href: "https://www.example.com",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.example.com",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Pictoria AI - Personalized AI Photo Generation Platform",
    desc: "Pictoria AI is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Pictoria AI combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.example.com",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "CSIR-IIIM",
    pos: "Web Developer",
    duration: "2025",
    title:
      "Did Sentiment Analysis with Live Detection is a cutting-edge application that leverages AI to analyze and interpret emotions in real-time. This innovative tool is designed for Medical patients, content creators, and marketers who want to understand audience reactions instantly.",
    icon: "/assets/iim.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Deeplearning And AI",
    pos: "Web Developer",
    duration: "2023-2024",
    title:
      "Learnt about AI and Deep Learning, focusing on practical applications and real-world problem-solving. This experience has equipped me with the skills to develop AI-driven solutions that enhance user experiences and drive innovation.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/UtkarsHMer05",
  }, {
    name: "LinkedIn",
    icon: "/assets/linkedin.svg",
    url: "https://www.linkedin.com/in/utkarsh-khajuria-4592a7293/",
  }

] as const;
