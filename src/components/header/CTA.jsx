import React from 'react';
import CV from "../../assets/CV Thomas.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Télécharger le CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Discutons
      </a>
    </div>
  );
};

export default CTA;
