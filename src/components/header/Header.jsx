import React, { useContext, useEffect, useState } from "react";
import { MouseContext } from "../../features/MouseContext";

import "./Header.css";

const Header = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const [activeNav, setActiveNav] = useState("#home");

  const changeNavbarColor = () => {
    if (window.scrollY > 0 && window.scrollY < 640) {
      setActiveNav("#home");
    } else if (window.scrollY >= 400 && window.scrollY < 1596) {
      setActiveNav("#portfolio");
    } else if (window.scrollY >= 1596) {
      setActiveNav("#contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <section className="header__section">
      <ul>
        <li>
          <a
            href="#home"
            className={activeNav === "#home" ? "active" : ""}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onClick={() => {
              setActiveNav("#home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeNav === "#portfolio" ? "active" : ""}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onClick={() => {
              setActiveNav("#portfolio");
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeNav === "#contact" ? "active" : ""}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onClick={() => {
              setActiveNav("#contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div
        className="source__code"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <a
          href="https://github.com/akashmore1/Portfolio-AkashM"
          target="_blank"
        >
          See Source Code
        </a>
      </div>
    </section>
  );
};

export default Header;
