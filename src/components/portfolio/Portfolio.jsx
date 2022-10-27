import React from "react";
import "./Portfolio.css";
import Img from "../../assets/maxresdefault.jpeg";
import Snake from "../../assets/snake.jpeg";
import TikTacToe from "../../assets/tik-tac-toe.png";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
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
              <a href="https://www.github.com" target="_blank" className="btn">
                Github
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div>
              <img src={Snake} alt="img" />
            </div>
            <h3>Snake Game(Work in Progress)</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://www.github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a href="https://www.github.com" target="_blank" className="btn">
                Github
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div>
              <img src={TikTacToe} alt="img" />
            </div>
            <h3>Tik Tac Toe Game</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://akashmore1.github.io/Tik-Tak-Toe/"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/akashmore1/Tik-Tak-Toe"
                target="_blank"
                className="btn"
              >
                Github
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
