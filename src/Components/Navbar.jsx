import React, { useRef } from "react";
import "./Navbar.css";
import { IoMdClose } from "react-icons/io";
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

   const menuRef = useRef();

   const openMenu = () =>{
         menuRef.current.style.right = "0"
   }

   const closeMenu = () =>{
    menuRef.current.style.right = "-350px"
}

  return (
    <div className="navbar">
      <h2>
        Rutuja <span className="mahale">Mahale</span>
      </h2>
       <IoMenuOutline onClick={openMenu} className="nav-icon-open"/>
      <ul ref={menuRef} className="nav-menu">
        <IoCloseSharp onClick={closeMenu} className="nav-icon-close"/>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#skills">
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#project">
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
  
          Connect With Me
        </AnchorLink>
      </div>
    
    </div>
  );
};

export default Navbar;
