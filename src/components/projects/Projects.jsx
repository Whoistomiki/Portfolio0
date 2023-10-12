import React from 'react'
import './projects.css'
import Gamerhelper from "../../assets/Gamerhelper.png"
import CS from "../../assets/CS.png"

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Mes projets récents (à venir)</h5>
      <h2>Projets</h2>
      <div className="projects__container "  >
        <div className="projects__item">

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
            </div>

        <div className="projects__item">

            <h3>Projet 2</h3>

            <div className="projects__item-image width-image">
              <img src={CS} alt="Aperçu du projet"/>
            </div>
            </div>
          </div>
    </section>
  )
}

export default Projects