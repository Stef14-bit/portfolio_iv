type Links = { id: number; href: string; name: string };

const navLinks: Links[] = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/#skills", name: "Skills" },
  { id: 3, href: "/#projects", name: "Projects" },
  { id: 4, href: "../contact", name: "Contact me" },
];

export default navLinks;
