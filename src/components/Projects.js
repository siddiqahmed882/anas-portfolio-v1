import { useState, useEffect } from 'react';
import SanityClient from '../client';

import '../assets/css/projects.css';

import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "projects"]{
        name,
        description, 
        image{asset->{_id, url}},
        githubLink,
        hostedLink
      }`
    ).then(data => setProjects(data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <section className='projects__section'>
      <header className='projects__header'>
        <h3>Projects</h3>
        <p>
          {`These are my projects below. I'm Frontend Developer in addition to this I'm also
          a UI/UX designer. And doing it for the last year & making clients happy. This is
          all about me now have a look on these projects.`}
        </p>
      </header>
      <div className='projects'>
        {projects && projects.length > 0 && projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
