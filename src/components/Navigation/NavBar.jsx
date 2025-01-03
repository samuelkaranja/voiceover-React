import { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            Benjamin's VoiceOver
          </NavLink>

          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/gallery"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/blog"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/about-Me"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  About Benjamin
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className="nav__link"
                  onClick={closeMenuOnMobile}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
