import React from "react";
import { Form, Link, Outlet } from "react-router-dom";
import { LogoDesign } from "../../assets/Logos";
import { GatoIcon } from "../../assets/Logos";
import { FaJava, FaJs } from "react-icons/fa";
// import  "../../assets/react.svg"

export const Navbar = () => {
  const handleIsActive = () => {
    const navBurgerIcon = document.querySelector(".navbar-burger");
    const navBurgerMenu = document.querySelector(".navbar-menu");
    navBurgerIcon.classList.toggle("is-active");
    navBurgerMenu.classList.toggle("is-active");
  };
  return (
    <>
      <nav
        className="navbar has-shadow p-2"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-medium is-size-1">
          <Link className="navbar-item is-size-1" to="/">
            <FaJs ></FaJs>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={handleIsActive}
          >
            <span aria-hidden="true" className="is-info"></span>
            <span aria-hidden="true" className="is-info"></span>
            <span aria-hidden="true" className="is-info"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/documentacion" className="navbar-item">
              Docs
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-dark">More</a>

              <div className="navbar-dropdown">
                <Link to="datosv2" className="navbar-item">
                  Data
                </Link>
                <Link to="contact" className="navbar-item">Contact</Link>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="registrer" className="button is-rounded " >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
