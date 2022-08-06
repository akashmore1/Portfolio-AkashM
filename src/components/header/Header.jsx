import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <section className="header__section">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Let's Connect</a>
        </li>
      </ul>
      <div className="source__code">
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
