import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="container-fluid position-fixed bottom-0 footer">
    <div className="d-flex justify-content-center align-items-center">
      <ul className="flex text-xl justify-center">
        <li className="p-2 brand-icon">
          <a href="https://github.com/nachosala89">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="p-2 brand-icon">
          <a href="https://www.linkedin.com/in/nacho-sala">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="p-2 brand-icon">
          <a href="https://angel.co/u/nacho-sala">
          <FontAwesomeIcon icon={faAngellist} />
          </a>
        </li>
        <li className="p-2 brand-icon">
          <a href="https://twitter.com/nachosala89">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="p-2 brand-icon">
          <a href="https://medium.com/@nachosala89">
          <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);


export default Footer;