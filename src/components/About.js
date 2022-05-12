import React from "react";

const About = () => {
  return (
    <section>
      <h2>About me</h2>
      <p>
        I'm a highly motivated Software Engineer who loves to face challenges, work collaboratively with others, and learn new technologies.
      </p>
      <p>
        I graduated as Information System Engineer in college, where I learned the basics of programming, mathematical and algorithmic thinking, software engineering, and project management. Now I built my path on being a remote Full-Stack Developer, focused on the back-end, but with intuition and good taste for the front-end.
      </p>
      <p>
        I have an exceptional growth mindset. I'm a committed team player, always fostering good collaboration environments. I can be very positive and motivate others to achieve their goals too.
      </p>
      <h3>Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <h4 className="text-center">Front-end</h4>
          <ul>
            <li className="text-center">HTML5</li>
            <li className="text-center">CSS3</li>
            <li className="text-center">JavaScript</li>
            <li className="text-center">React</li>
            <li className="text-center">Redux</li>
            <li className="text-center">Bootstrap</li>
            <li className="text-center">Tailwind CSS</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-center">Back-end</h4>
          <ul>
            <li className="text-center">Ruby</li>
            <li className="text-center">Rails</li>
            <li className="text-center">Python</li>
            <li className="text-center">Django</li>
            <li className="text-center">PostgreSQL</li>
            <li className="text-center">Java</li>
            <li className="text-center">C</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-center">Tools & Methods</h4>
          <ul>
            <li className="text-center">Git</li>
            <li className="text-center">GitHub</li>
            <li className="text-center">Heroku</li>
            <li className="text-center">Netlify</li>
            <li className="text-center">Responsive Development</li>
            <li className="text-center">Rspec</li>
            <li className="text-center">TDD</li>
            <li className="text-center">UML</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-center">Professional</h4>
          <ul>
            <li className="text-center">Teamwork</li>
            <li className="text-center">Remote pair-programming</li>
            <li className="text-center">Mob-programming</li>
            <li className="text-center">Mentoring</li>
            <li className="text-center">Scrum development</li>
          </ul>
        </div>
      </div>
      <a href="#contact-section"><button>Contact</button></a>
    </section>
  );
}

export default About;