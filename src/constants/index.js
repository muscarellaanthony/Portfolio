import project1 from "../assets/projects/vibrawood3.jpg";
import project2 from "../assets/projects/socialmediaapp.jpg";
import project3 from "../assets/projects/Volli-Up.png";
import project4 from "../assets/projects/portfolio-pic.png";

export const HERO_CONTENT = `As a dedicated full-stack developer, I am committed to advancing my career and delivering impactful solutions. Proficient in MongoDB, Express, React, Node, Apollo GraphQL, PostgreSQL, and more, I am confident in my technical stack and eager to tackle new challenges. My goal is to craft exceptional user experiences through innovative technology, and I continuously refine my skills to stay at the forefront of the ever-evolving tech landscape.`;

export const ABOUT_TEXT = `What began as a required intro to coding class has grown into my greatest passion. While many seek fulfillment in their work, I am fortunate enough to have truly found it in software development. I thrive on being continuously challenged, driven by a deep curiosity to expand my knowledge and deliver innovative solutions for users worldwide. The true reward lies in solving complex problems, and the greater the challenge, the more satisfying the outcome. I excel in collaborative team environments and am always eager to learn from fellow developers. Outside of coding, I am a dedicated swim coach, helping young athletes lead healthier lives and reach their full potential.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full-Stack Developer",
    company: "Volli-Up",
    description: "At Volli-Up, I develop and implement features using TypeScript, PostgreSQL, and React Native, contributing to both the front-end andback-end. My responsibilities include designing and building RESTful endpoints, as well as crafting user interfaces that align seamlessly with the app's overall theme and design standards. I ensure each feature delivers a cohesive, high-quality user experience.",
    technologies: ["React Native", "Typescript", "Postgres"],
  }
];

export const PROJECTS = [
  {
    title: "AM Social Media App",
    image: project2,
    description:
      "Functional social media app where users can signup, create posts, and follow/block their friends. Mobile friendly. Lots of fun. Follow me! @anthony_muscarella",
    technologies: ["Typescript", "Tailwind", "Next.js", "Prisma ORM", "Clerk"],
    url: 'https://amsocialmedia.net/'
  },
  {
    title: "Volli-Up",
    image: project3,
    description:
      "An app that hosts volleyball tournaments, creates brackets, and updates scores live as the competition progreses. Currently branching out to additional sports.",
    technologies: ["React Native", "Typescript", "PostegreSQL"],
    url: 'https://www.volli-up.com/'
  },
  {
    title: "Vibrawood Guitars",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Tailwind", "React", "MongoDB", "Apollo GraphQL", "JWT", "Express.js"],
    url: 'https://vibrawood-guitars.onrender.com/'
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    url: 'https://portfolio-snowy-rho-50.vercel.app/'
  },

];

export const CONTACT = {
  address: "Grand Rapids, MI",
  phoneNo: "616-916-7564",
  email: "muscarellaanthony1@gmail.com",
};
