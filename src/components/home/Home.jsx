import React from "react";

import CTA from "./CTA";
// import HeaderSocials from "./HeaderSocials";

// import ME from "../../assets/ME.jpg";

import "./Header.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akash More</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        {/* <HeaderSocials /> */}
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </section>
  );
}

export default Home;
