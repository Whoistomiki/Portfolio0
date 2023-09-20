import React from 'react'
import './projects.css'
import Gamerhelper from "../../assets/Gamerhelper.png"

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Mes projets récents (à venir)</h5>
      <h2>Portfolio</h2>
      <div className="projects__container "  >
        <article className="projects__item">
            <h3>Gamer Helper</h3>
            <div className="projects__item-image width-image">
              <img src={Gamerhelper} alt="Aperçu du projet"/>
            </div>
            <div className="projects__item-cta">
              <a href="https://github.com/Whoistomiki/gamer-helper" className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://gamer-helper.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">
                Visiter le site
              </a>
            </div>
          </article>
      </div>
    </section>
  )
}

export default Projects