import React from 'react';
import { FaAward } from 'react-icons/fa';
import ME from "../../../src/assets/Me.JPG";
import './intro.css';

const Introduction = () => {
  return (
    <section id="about">
      <h5>Faisons connaissance</h5>
      <h2>À propos de moi</h2>
      <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>  
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Expérience</h4>
              <small>1 an</small>
            </article>
          </div>
          <p>
          Je m'appelle Thomas, j'ai 28 ans et je suis développeur web, actuellement à la recherche d'une alternance pour préparer un bachelor en chef de projets digitaux spécialisation développement d'applications et cybersécurité à l'EEMI.
            </p>
            <p>  
              Après avoir obtenu mon titre professionnel DWWM après mon passage à l'école O'Clock suite à une reconversion professionnelle, je suis un jeune diplômé en bac +2 à la recherche d'une opportunité d'apprentissage en alternance pour poursuivre mon parcours académique en bachelor.
            </p>  
            <p>
              Ouvert aux opportunités de collaboration et de travail, n'hésitez pas à me contacter !
            </p>  
            <p>
              Merci de votre visite !
            </p>
          <a href="#contact" className="btn btn-primary">Discutons</a>
        </div>
      </div>
    </section>
  )
}

export default Introduction
