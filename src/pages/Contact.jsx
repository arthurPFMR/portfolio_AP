import React from "react";

import MailImg from "../assets/images/mail.png"
import gitImg from "../assets/images/github.png"
import linkImg from "../assets/images/linkedin.png"

const Contact = () => {
  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <div className="barForTitle"></div>
      <div className="contactContent">
      <p className="thanks">Merci de votre visite !</p>
        <div className="contactMe">
        <p>ME CONTACTER :</p>
        </div>
        <div className="socialImg">
        <div className="mailLink">
        <address>
          <a href="mailto:arthur.pulfermuller@gmail.com">
          <img className="mailImg" src={MailImg} alt="lien vers email" />
          </a>
        </address>
        </div>
        <div className="socialMedia">
          <a href="https://github.com/arthurPFMR">
            <img className="gitImg" src={gitImg} alt="lien vers github" />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/arthur-pulfermuller-358561230/">
            <img className="linkImg" src={linkImg} alt="lien vers github" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
