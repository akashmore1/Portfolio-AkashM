import React, { useContext } from "react";
import Akash from "../../assets/AkashMore-resume.pdf";
import { MouseContext } from "../../features/MouseContext";
import "./Header.css";

function CTA() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="cta">
      <a
        href={Akash}
        download
        className="btn"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        Download Resume
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
