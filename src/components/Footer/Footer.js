import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-info">
        <div className="footer-brand">
          {/* <img className="footer-logo" src={logo} alt=""></img> */}
          <h2 className="footer-title"> </h2>
          <h3>Guillermo Quattrocchi</h3>
          <p> Full Stack Web Developer</p>
          <p>
            <a href="mailto:gq4dev@gmail.com">gq4dev@gmail.com</a>
          </p>
        </div>

        <div className="footer-icons">
          <h4>Follow Me</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/guillermoquattrocchi/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/guillote87"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/gq4dev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=1156150502&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
              class="float"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="footer-info" >
                    <h4>Menu</h4>
                    <a href="/">Home</a>
                    <a href="/#about">About Me</a>
                    <a href="/#projects">My Projects</a>
                </div> */}
    </footer>
  );
};
