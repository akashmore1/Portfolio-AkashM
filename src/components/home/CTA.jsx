import React from "react";
import Akash from "../../assets/AkashMore-resume.pdf";
import "./Header.css";

function CTA() {
  return (
    <div className="cta">
      <a href={Akash} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
