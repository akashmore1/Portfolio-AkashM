import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article>
          <div className="portfolio__item-image">
            <h3>This is portfolio item title</h3>
            <a href="https://www.github.com" target="_blank">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
