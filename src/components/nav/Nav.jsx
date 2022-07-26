import React, { useState, useEffect } from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiBook, FiMessageCircle } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";

import "./Nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  const changeNavbarColor = () => {
    if (window.scrollY > 0 && window.scrollY < 621) {
      setActiveNav("#home");
    } else if (window.scrollY >= 621 && window.scrollY < 2124) {
      setActiveNav("#portfolio");
    } else if (window.scrollY >= 2124) {
      setActiveNav("#contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => {
          setActiveNav("#home");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNav("#portfolio");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <FiMessageCircle />
      </a>
    </nav>
  );
}

export default Nav;
