import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Lodging App',
      description: 'This app allows the user to reserve a room in a hotel in an easy way.',
      fullDescription: 'This app allows the user to reserve a room in a hotel in an easy way. The API was created with Ruby on Rails and the front-end with React.',
      image: {
        src: '../img/projects/lodging.png',
        alt: 'Project image',
      },
      technologies: ['Bootstrap', 'Rails', 'React'],
      linkLive: 'https://goofy-panini-7f9108.netlify.app/',
      linkSource: 'https://github.com/nachosala89/lodging-app-backend',
    },
    {
      id: 2,
      name: 'Recipes App',
      description: "This app allows the users to manage different types of food and recipes, view other's recipes and generate a shopping list.",
      fullDescription: "This app allows the users to manage different types of food and recipes, view other's recipes and generate a shopping list. Made with Ruby on Rails.",
      image: {
        src: 'https://nachosala.me/my-portfolio/images/projects/recipes.png',
        alt: 'Project image',
      },
      technologies: ['Bootstrap', 'Ruby on Rails'],
      linkLive: 'https://recipe-app-nacho.herokuapp.com/',
      linkSource: 'https://github.com/nachosala89/recipe-app-rails',
    },
    {
      id: 3,
      name: "Space Traveler's Hub",
      description: 'In this website we worked with real live data from the SpaceX API. Our task was to build a web app for a company that provides commercial and scientific space travel services.',
      fullDescription: 'In this website we worked with real live data from the SpaceX API. Our task was to build a web app for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      image: {
        src: '../img/projects/space-travelers.png',
        alt: 'Project image',
      },
      technologies: ['JavaScript', 'Bootstrap', 'React'],
      linkLive: 'https://youthful-lichterman-4505b6.netlify.app/',
      linkSource: 'https://github.com/DyaryRaoof/space-travelers-hub',
    },
    {
      id: 4,
      name: 'The Crypto Cave',
      description: 'Website to display some data about the most important cryptocurrencies in real time.',
      fullDescription: 'Website to display some data about the most important cryptocurrencies in real time. The data is consumed from the API https://docs.coincap.io/. The currencies can be filter by the price change in the last 24 hours or by position in the ranking. The design was based on this template.',
      image: {
        src: '../img/projects/screenshot-crypto.png',
        alt: 'Project image',
      },
      technologies: ['JavaScript', 'React', 'Bootstrap'],
      linkLive: 'https://thecryptocave.netlify.app/',
      linkSource: 'https://github.com/nachosala89/cryptocurrencies',
    },
    {
      id: 5,
      name: 'Breaking Bad Store',
      description: 'This app shows the characters of the world-famous series Breaking Bad.',
      fullDescription: 'This app shows the characters of the world-famous series Breaking Bad. It consumes two API: One to get the data about the Breaking Bad characters, and another to access and modify the data about comments and likes for the displayed content.',
      image: {
        src: 'src/img/projects/breaking-bad.png',
        alt: 'Project image',
      },
      technologies: ['Bootstrap', 'Javascript'],
      linkLive: 'https://wikitelmex.github.io/kanban-capstone/',
      linkSource: 'https://github.com/nachosala89/breaking-bad-app',
    },
  ];
  
  return (
    <section className="green-bcg p-10 rounded-3xl">
      <h2 className="poppins text-4xl">My recent works</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <li key={project.id} className="py-4">
            <div className="project-image h-96 w-full" style={{ backgroundImage: `url("https://nachosala.me/my-portfolio/images/projects/recipes.png")` }} />
            <div className="project-content">
              <div className="project-description">
                <p>{project.description}</p>
                <a href={project.linkLive} target="_blank" rel="noreferrer">
                  <button>Live</button>
                </a>
                <a href={project.linkSource} target="_blank" rel="noreferrer">
                  <button>Source</button>
                </a>
              </div>
            </div>
            <div className="project-header">
              <h2>{project.name}</h2>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div> 
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;