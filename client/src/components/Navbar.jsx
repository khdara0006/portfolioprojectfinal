function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">HK-DARA</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;