import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import  logo  from "../../img/Logo.png";


const Menu = () => (
  <>
    <p>
      <a href="#home">find a trip</a>
    </p>
    <p>
      <a href="#wgpt3">destinations</a>
    </p>
    <p>
      <a href="#possibility">why us</a>
    </p>
    <p>
      <a href="#features">Contact</a>
    </p>

  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="NavbarContainer wrapper">
      <div className="logoWrap">
        <img src={logo} alt="logo" />
      </div>


      <div className="pc PCMenuContainer">
      <Menu />
      </div>

      <div className="mb MobMenuContainer">
        {toggleMenu? (
            <RiCloseLine
            color="white"
            size={27}
            onClick= {() => setToggleMenu(false)}
            />
          ):(
            <RiMenu3Line
            color="white"
            size={27}
            onClick = { () => setToggleMenu(true)}
            />
          )}

          {toggleMenu &&(
            <div className="MobMenu scale-up-center">
              <Menu/>
            </div>
          )}
      </div>

    </div>
  );
};

export default Navbar;
