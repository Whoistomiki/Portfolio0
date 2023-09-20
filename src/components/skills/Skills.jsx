import React from 'react';
import './skills.css';
import {SiReact}  from 'react-icons/si'
import {TiHtml5} from 'react-icons/ti'
import {SiCss3} from 'react-icons/si'
import {DiNodejs} from 'react-icons/di'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {SiPostgresql} from 'react-icons/si'
import {SiSwagger} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {FaGitAlt} from 'react-icons/fa'


const Skills = () => {
  return (
    <section id="skills">
      <h5>Compétences</h5>
      <h2>Soft skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end</h3>
          <div className="skills__content">
          <article className="skills__details">
              <TiHtml5 className="skills__details-icon" />
              <h4>HTML</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiCss3 className="skills__details-icon" />
              <h4>CSS</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiJavascript className="skills__details-icon" />
              <h4>JavaScript</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiReact className="skills__details-icon" />
              <h4>React</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <FaJava className="skills__details-icon" />
              <h4>Java</h4>
              <small className='text-light'>{"Débutant"}</small>
            </article>

          </div>
        </div>
        <div className="skills__backend">
          <h3>Back-end</h3>
          <div className="skills__content">
          <article className="skills__details">
              <DiNodejs className="skills__details-icon" />
              <h4>Node / Express</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <AiOutlineConsoleSql className="skills__details-icon" />
              <h4>SQL</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiPostgresql className="skills__details-icon" />
              <h4>PostgreSQL</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiSwagger className="skills__details-icon" />
              <h4>Swagger</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <FaGitAlt className="skills__details-icon" />
              <h4>Git / GitHub</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
