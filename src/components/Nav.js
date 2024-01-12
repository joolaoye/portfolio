import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = document.getElementById("menu-btn-icon");

    if (navLinks && menuBtnIcon) {
      if (isNavOpen) {
        navLinks.classList.add("open");
        menuBtnIcon.setAttribute("class", "ri-close-line");
      } else {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-3-line");
      }
    }
  }, [isNavOpen]);

  return (
    <nav>
      <div className="nav__bar">
        <span className="logo nav__logo">
          <img src="./assets/myLogo.png" width="50" alt="Logo" />
        </span>
        <div className="nav__menu__btn" id="menu-btn" onClick={handleMenuClick}>
          <i id="menu-btn-icon" className={isNavOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links" onClick={handleNavClick}>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#contributions">contributions</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
