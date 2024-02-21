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
      <div className="nav-bar">
        <div className="nav-brand" href="#home">
          Oluwabusola Ilechukwu
        </div>
        <div className=" d-flex justify-content-end ">
          <div className="nav-menu">
            {/* {hideMenu && ( */}
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
            {/* )} */}
            <div className="menubtn" onClick={Toggle}>
              MENU
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
