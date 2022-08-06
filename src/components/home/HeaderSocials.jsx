import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";

import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <h2>Let's Connect</h2>
      <div className="social__links">
        <div className="social__link">
          <a href="https://www.linkedin.com/in/akash-k-more44/" target="_blank">
            <BsLinkedin size={70} />
          </a>
          <a href="https://github.com/akashmore1" target="_blank">
            <FaGithub size={77} />
          </a>
        </div>
        <div className="social__link">
          <a href="https://www.instagram.com/akashmore1/" target="_blank">
            <GrInstagram size={74} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100007991293244"
            target="_blank"
          >
            <AiFillFacebook size={72} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSocials;
