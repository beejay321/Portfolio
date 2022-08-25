import React from "react";
import { useState } from "react";
import { Container, Row, Navbar, Button } from "react-bootstrap";

function NavBar(props) {
  const [hideMenu, setHideMenu] = useState(false);

  const Toggle = () => {
    if (hideMenu === false) setHideMenu(true);
    else if (hideMenu === true) setHideMenu(false);
  };
  return (
    <>
      <Navbar className="nav-bar">
        <Navbar.Brand className="nav-brand" href="#home">
          Oluwabusola Jibodu
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="nav-menu">
            {hideMenu && (
              <div className=" nav-links  ">
                <a href="#about">
                  <span>ABOUT</span>
                </a>
                <a href="#skills">
                  <span>SKILLS</span>
                </a>
                <a href="#projects">
                  <span>PROJECTS</span>
                </a>
                <a href="#contact">
                  <span> CONTACT ME</span>
                </a>
              </div>
            )}
            <div className="menubtn" onClick={Toggle}>
              MENU
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
