import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Wild-NewsPaper",
    tools: "html, css, javascript",
    github: "https://github.com/PriscilliaAmmeux/Daily-Wilder---Projet-1",
    demo: "https://priscilliaammeux.github.io/Daily-Wilder---Projet-1/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Travel",
    tools: "React, css, API, Node, Express",
    github:
      "https://github.com/WildCodeSchool/2022-09-JS-Lille-project-2-g2-travel",
    demo: "https://www.linkedin.com/posts/priscillia-ammeux_travel-activity-7002001959821963264-eV4W?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    image: IMG3,
    title: "Origin Digital",
    tools:
      "React.js, Sass, node.js, express, mySQL, worbench, standards airbnb, méthodologie agile & scrum",
    github:
      "https://github.com/WildCodeSchool/2022-09-JS-Lille-project-3-g3-origin",
    demo: "https://www.linkedin.com/posts/priscillia-ammeux_react-node-express-activity-7030500056227008512-k9fn?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    image: IMG4,
    title: "SpaceVerse - Hackathon",
    tools: "React, node, express, standards airbnb, méthodologie agile & scrum",
    github: "https://github.com/Sax593/hackathon",
    demo: "https://www.linkedin.com/posts/priscillia-ammeux_hackathon-activity-7002943012326526978-GIRo?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    image: IMG5,
    title: "Siloc - Hackathon",
    tools:
      "React.js, node.js, express, mySQL, worbench, standards airbnb, méthodologie agile & scrum",
    github: "https://github.com/Sax593/hackathon",
    demo: "https://www.linkedin.com/posts/priscillia-ammeux_siloc-activity-7019661451359342592-VM1d?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    image: IMG6,
    title: "Se salir les doigts",
    tools:
      "React.js, sass, node.js, express, mySQL, worbench, standards airbnb",
    github: "https://github.com/PriscilliaAmmeux/SeSalirLesDoigts",
    demo: "https://www.linkedin.com/posts/priscillia-ammeux_se-salir-les-doigts-activity-7027019180411375616-H4xe?utm_source=share&utm_medium=member_desktop",
  },
  // {
  //   id: 7,
  //   image: IMG7,
  //   title: "PokeCard",
  //   tools: "React.js, css, node.js, express, mySQL, worbench, standards airbnb",
  //   github: "https://github.com/PriscilliaAmmeux/Poke-Cards/tree/dev",
  //   demo: "",
  // },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, tools, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <div>{tools}</div>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
