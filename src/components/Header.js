import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <ul class="">
          <li>
            <a href="https://github.com/nachosala89">
              <img src="./images/social-links/github.png" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nacho-sala">
              <img src="./images/social-links/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/nacho-sala">
              <img src="./images/social-links/angelist.png" alt="AngelList" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/nachosala89">
              <img src="./images/social-links/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@nachosala89">
              <img src="./images/social-links/medium.png" alt="Medium" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Full-stack Software Engineer</h2>
        <h1>I'm Nacho Sala</h1>
      </div>
      <div>
        <img src="https://picsum.photos/1000" alt="Nacho Sala" />
      </div>
    </header>
  );
}

export default Header;