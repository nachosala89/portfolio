import React from "react";
import photo from "../img/cutted-photo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="grid md:grid-cols-2 grey-ctm pt-20 md:pt-0">
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="poppins text-2xl text-center pb-2">Full-Stack Software Engineer</h2>
          <h1 className="poppins text-7xl text-center">Nacho Sala</h1>
        </div>
        <ul className="flex text-xl justify-center">
          <li className="p-3 brand-icon-header">
            <a href="https://github.com/nachosala89">
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="p-3 brand-icon-header">
            <a href="https://www.linkedin.com/in/nacho-sala">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="p-3 brand-icon-header">
            <a href="https://angel.co/u/nacho-sala">
            <FontAwesomeIcon icon={faAngellist} />
            </a>
          </li>
          <li className="p-3 brand-icon-header">
            <a href="https://twitter.com/nachosala89">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="p-3 brand-icon-header">
            <a href="https://medium.com/@nachosala89">
            <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src={photo} alt="Nacho Sala" />
      </div>
    </header>
  );
}

export default Header;