const Project = ({ project }) => {
  const { name, description, image, githubLink, hostedLink } = project;
  return (
    <div className='project'>
      <div className='project__details'>
        <h4 className='project__title'>{name}</h4>
        <p className='project__description'>{description}</p>
        <div className='project__links'>
          <a href={hostedLink} className='btn btn--accent' target="_black" rel="noreferrer noopener">
            Hosted Site
          </a>
          <a href={githubLink} className='btn' target="_black" rel="noreferrer noopener">
            Github Repo
          </a>
        </div>
      </div>
      <img src={image.asset.url} alt={name} className='project__img' />
    </div>
  );
};

export default Project;
