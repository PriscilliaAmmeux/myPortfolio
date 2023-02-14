import React from "react";
import certificatAgilite from "../../assets/certificatAgilite.png";
import certificatJS from "../../assets/certificatJS.png";
import certificatPHP from "../../assets/certificatPHP.png";
import certificatPython from "../../assets/certificatPython.png";
import certificatSecurite from "../../assets/certificatSecurite.png";
import "./services.css";

export default function Services() {
  return (
    <section id="services">
      <h2>Certifications</h2>
      <div className="certificat-display">
        <img
          className="img-certif"
          src={certificatAgilite}
          alt="Certificat découvrez la posture d'agilité"
        />
        <img
          className="img-certif"
          src={certificatJS}
          alt="Certificat Apprenez à programmer avec javascript"
        />
        <img
          className="img-certif"
          src={certificatPHP}
          alt="Certificat concevez votre site wev avec PHP et MySQL"
        />
        <img
          className="img-certif"
          src={certificatPython}
          alt="Certificat apprenez les bases du langage Python"
        />
        <img
          className="img-certif"
          src={certificatSecurite}
          alt="Certificat découvrez les bases de la sécurité numérique"
        />
      </div>
    </section>
  );
}
