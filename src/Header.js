import React from "react";
import "./Header.css";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <nav className="nav-bar" id="home">
        <div className="name">leslie.dev</div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#"> Home</a>
          </li>
          <li className="nav-item">
            <a href="#about"> About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Project</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* <Footer /> */}
      </nav>
    </div>
  );
};

export default Header;
