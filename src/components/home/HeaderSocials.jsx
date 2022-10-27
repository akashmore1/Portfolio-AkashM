import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <h2>Let's Connect</h2>
      <div className="social__links">
        <div className="social__link">
          <a href="https://www.linkedin.com/in/akash-k-more44/" target="_blank">
            <BsLinkedin size={69} />
          </a>
          <a href="https://twitter.com/imAkashMore" target="_blank">
            <FaTwitterSquare size={80} />
          </a>
        </div>
        <div className="social__link">
          <a href="https://www.instagram.com/akashmore1/" target="_blank">
            <GrInstagram size={74} />
          </a>
          <a href="https://github.com/akashmore1" target="_blank">
            <FaGithub size={77} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSocials;
