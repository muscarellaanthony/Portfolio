import project1 from "../assets/projects/vibrawood3.jpg";
import project2 from "../assets/projects/BookSearchEngine.png";
import project3 from "../assets/projects/portfolio-pic.png";
import project4 from "../assets/projects/XP-Archive.png";

export const HERO_CONTENT = `I am a full stack developer eager to advance into a professional career path. I am disciplined in MongoDb, Express, React, Node, Apollo GraphQl, Postgresql and more. Confident with my stack, I am ready to tackle any challenge laid in front of me with intent to create the most ideal user experiences technology has to offer. I continue to hone my skills everyday as I work toward the ability to achieve this goal.`;

export const ABOUT_TEXT = `What started from a required intro to coding class, my coding journey has developed into my biggest passion. Everyone has a desire to find fulfillment in their work, I am among the few who are lucky enough to truly find it. I prefer to stay continuously challenged due to my addiction to expanding my knowledge base in order to provide cutting edge solutions to users around the globe. The reward comes with the solution, and the more difficult the challenge, the greater the reward. I work best in team based environments and love learning from other developers. Outside of the coding world, I am physically active, family oriented, and always eager to try new things.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Junior Full Stack Developer",
    company: "EdEx University of Central Florida",
    description: `I completed a 12 week comprehensive bootcamp that `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Vibrawood Guitars",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Tailwind", "React", "Node.js", "MongoDB", "Apollo GraphQL", "JWT", "Express"],
    url: 'https://vibrawood-guitars.onrender.com/'
  },
  {
    title: "Book Search Engine",
    image: project2,
    description:
      "An api based application that allows a user to search for any book and get live results.",
    technologies: ["HTML", "Bootstrap", "React", "Node.js", "MongoDb", "Apollo GraphQL", "JWT", "Express"],
    url: 'https://book-search-engine-lilac.vercel.app/'
  },
  {
    title: "XP-Archive",
    image: project4,
    description:
      "A social gaming platform that allows users to create profiles and add games to a wishlist and library using REST methods.",
    technologies: ["HTML", "Tailwind", "Node.js", "Express", "PostegreSQL", "Handlebars"],
    url: 'https://the-wild-coders.onrender.com/'
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind", "Framer Motion"],
    url: 'https://portfolio-snowy-rho-50.vercel.app/'
  },

];

export const CONTACT = {
  address: "Grand Rapids, MI",
  phoneNo: "616-916-7564",
  email: "muscarellaanthony1@gmail.com",
};
