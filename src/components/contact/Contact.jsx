import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm('service_qyz8ho4','template_uhxpx5f',formRef.current,'4_AtqXbpkoaK9pKGs')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">

      <h5>Contact</h5>
      <h2>Me contacter</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thomasyu@hotmail.fr</h5>
            <a href="mailto:thomasyu@hotmail.fr">Envoyer un message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom prénom"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer un message
          </button>
          {message && <span>Merci pour votre message !</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
