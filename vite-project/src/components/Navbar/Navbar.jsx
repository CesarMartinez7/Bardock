import React from "react";
import { Form, Link, Outlet } from "react-router-dom";
import { LogoDesign } from "../../assets/Logos";
import { GatoIcon } from "../../assets/Logos";
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
        className="navbar box p-2"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-size-1">
          <Link className="navbar-item is-size-1" to="/">
            <GatoIcon width={500} height={200}></GatoIcon>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={handleIsActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/documentacion" className="navbar-item">
              Documentacion
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <Link to="datosv1" className="navbar-item">
                  Datos Preview V1
                </Link>
                <Link to="datosv2" className="navbar-item">
                  Datos Preview V2
                </Link>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="form" className="button is-link">
                  Registro
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
