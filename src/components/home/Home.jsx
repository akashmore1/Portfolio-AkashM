import React from "react";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

// import ME from "../../assets/ME.jpg";

import "./Header.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="container header__container">
        <div className="header__container__info">
          <h5>Hello I'm</h5>
          <h1>Akash More</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <p className="home-info__intro">
            Front-end developer with in-depth knowledge of JavaScript, React JS,
            software development, basic testing and agile development.
          </p>
          <CTA />
        </div>
        <HeaderSocials />
      </div>
    </section>
  );
}

export default Home;
