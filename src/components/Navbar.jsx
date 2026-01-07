import "./Navbar.css";

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <ul className="navbar">
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("skills")}>Skills</li>
      </ul>
    </header>
  );
};

export default Navbar;
