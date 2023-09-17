type Project = {
  id: number;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  gitUrl: string;
};

const myProjects: Project[] = [
  {
    id: 1,
    projectName: "VEAL",
    projectDescription:
      "In our team project, we created a presentation webpage for a fictional country using HTML, CSS, and JavaScript technologies",
    projectUrl: "https://matt0107.github.io/imaginaryCountry/",
    gitUrl: "https://github.com/Matt0107/imaginaryCountry",
  },
  {
    id: 2,
    projectName: "Space Explorer",
    projectDescription:
      "Second team project utilizing JavaScript, React, and various Node packages.",
    projectUrl: "https://wild-space-explorer.netlify.app/",
    gitUrl: "https://github.com/Stef14-bit/Space-explorer",
  },
  {
    id: 3,
    projectName: "Star Car",
    projectDescription:
      "My first personal project is a car rental web app, and I've used the following technologies: Next.js for the frontend, Tailwind CSS for styling, and Supabase for the backend.",
    projectUrl: "https://star-rentals.vercel.app/",
    gitUrl: "https://github.com/Stef14-bit/car_rental_app",
  },
  {
    id: 4,
    projectName: "My Portfolio 1.0",
    projectDescription:
      "For my initial portfolio, I was enthusiastic about implementing my idea by designing it in the style of Windows XP. I utilized technologies such as React.js with CSS modules and various Node.js packages. However, in the end, I opted for a new portfolio page to achieve a more simplified and improved overview.",
    projectUrl: "https://ivnwin.vercel.app/",
    gitUrl: "https://github.com/Stef14-bit/Portfolio",
  },
  {
    id: 5,
    projectName: "Become Kind",
    projectDescription:
      "First client project: a blog-style web app designed for travelers to provide assistance and support to families in need worldwide. The app is constructed using Next.js and Tailwind CSS, with AWS utilized for file storage. The backend, which is currently in development, will utilize PostgreSQL for the database and employ Express for APIs.",
    projectUrl: "https://become-kind.vercel.app/",
    gitUrl: "https://github.com/Stef14-bit/become-kind",
  },
  {
    id: 6,
    projectName: "API routes for a future grocery delivery App",
    projectDescription:
      " This application is currently in development and is intended to deliver a smooth and hassle-free experience for customers who want to place online grocery orders. It has been constructed using Express and is configured to work with a MySQL database.",
    projectUrl: "https://github.com/Stef14-bit/backend-groceries_delivery",
    gitUrl: "https://github.com/Stef14-bit/backend-groceries_delivery",
  },
];

export default myProjects;
