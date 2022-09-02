import React from "react";
import "./Portfolio.css";
import Img from "../../assets/maxresdefault.jpeg";
import Snake from "../../assets/snake.jpeg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div>
              <img src={Img} alt="img" />
            </div>
            <h3>Voice Automated Robot</h3>
            <div className="portfolio__item-cta">
              {/* <a href="https://www.github.com" target="_blank" className="btn">
                Github
              </a> */}
              <a
                href="https://youtube.com/shorts/rIjHnXHsLiI?feature=share"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div>
              <img src={Snake} alt="img" />
            </div>
            <h3>Snake Game</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" target="_blank" className="btn">
                Github
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
