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
import {SiPython} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import { SiPhp } from "react-icons/si"
import { SiMysql } from "react-icons/si"


const Skills = () => {
  return (
    <section id="skills">
      <h5>Compétences</h5>
      <h2>Soft skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end</h3>

          <article className="skills__details">
              <SiCss3 className="skills__details-icon" />
              <h4>CSS3</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
          <article className="skills__details">
              <TiHtml5 className="skills__details-icon" />
              <h4>HTML5</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <FaJava className="skills__details-icon" />
              <h4>Java</h4>
              <small className='text-light'>{"Débutant"}</small>
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

        </div>

        <div className="skills__backend">
          <h3>Back-end</h3>

            <article className="skills__details">
              <SiDocker className="skills__details-icon" />
              <h4>Docker</h4>
              <small className='text-light'>{"Débutant"}</small>
            </article>
            <article className="skills__details">
              <FaGitAlt className="skills__details-icon" />
              <h4>Git / GitHub</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiMysql className="skills__details-icon" />
              <h4>MySQL</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <DiNodejs className="skills__details-icon" />
              <h4>Node JS / Express</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiPhp className="skills__details-icon" />
              <h4>PHP</h4>
              <small className='text-light'>{"Intermédiaire"}</small>
            </article>
            <article className="skills__details">
              <SiPostgresql className="skills__details-icon" />
              <h4>PostgreSQL</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiPython className="skills__details-icon" />
              <h4>Python</h4>
              <small className='text-light'>{"Intermédiaire"}</small>
            </article>
            <article className="skills__details">
              <AiOutlineConsoleSql className="skills__details-icon" />
              <h4>SQL</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>
            <article className="skills__details">
              <SiSwagger className="skills__details-icon" />
              <h4>Swagger</h4>
              <small className='text-light'>{"Avancé"}</small>
            </article>

        </div>
      </div>
    </section>
  )
}

export default Skills
