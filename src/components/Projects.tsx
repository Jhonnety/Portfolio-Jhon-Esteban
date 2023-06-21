import { useEffect, useState } from "react";
import { PROJECTS } from "../utils/Data";

export const Projects = () => {
  const [currentProjects, setCurrentProjects] = useState<number>(0);
  const projectsToShow: number = 2;

  const projects = PROJECTS;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextProject();
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [currentProjects]);

  const handleNextProject = () => {
    if (currentProjects + projectsToShow < projects.length) {
      setCurrentProjects(currentProjects + 1);
    } else {
      setCurrentProjects((currentProjects + 1) % projects.length);
    }
  };

  const handlePreviousProject = () => {
    if (currentProjects > 0) {
      setCurrentProjects(currentProjects - 1);
    } else {
      setCurrentProjects(projects.length - projectsToShow);
    }
  };

  const displayedProjects = projects
    .slice(currentProjects, currentProjects + projectsToShow)
    .concat(
      currentProjects + projectsToShow >= projects.length
        ? projects.slice(0, (currentProjects + projectsToShow) % projects.length)
        : []
    );

  return (
    <div className="projectsView">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <button onClick={handlePreviousProject}><i className="fa-solid fa-chevron-left"></i></button>

        {displayedProjects.map((project) => (
          <div key={project.id} className="projectContainer">
            <img src={project.foto}/>
            <div className="descriptionProject">
              <div className="description">
                <h2>{project.name}</h2>
                <p>
                {project.description}
                </p>
              </div>
              <div className="links">
                <div style={{
                  background: `linear-gradient(to right, #01c4e7 ${project.porcent}%, white 50%)`
                }}><h2>{project.porcent}%</h2></div>
                <a target="_blank" href={project.github}><i className="fa-brands fa-github"></i>Ver repositorio</a>
                <a target="_blank" href={project.link}><i className="fa-solid fa-link"></i>Ver programa</a>
              </div>
            </div>

          </div>
        ))}

        <button onClick={handleNextProject}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  );
};