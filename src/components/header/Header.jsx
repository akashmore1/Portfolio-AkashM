import React, { useContext } from "react";
import { MouseContext } from "../../features/MouseContext";

import "./Header.css";

const Header = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <section className="header__section">
      <ul>
        <li>
          <a
            href="#home"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
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
