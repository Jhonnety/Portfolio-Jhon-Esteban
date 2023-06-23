import { useContext, useEffect, useState } from "react";
import { PROJECTS } from "../utils/Data";
import { LanguageContext } from "../contexts";

export const Projects = () => {
  const [currentProjects, setCurrentProjects] = useState<number>(0);
  const [projectsToShow, setProjectsToShow] = useState(2);
  const { language } = useContext(LanguageContext);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setProjectsToShow(1);
      } else {
        setProjectsToShow(2);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="projectsView">
      <h1 id="projects">{language == 'es' ? "Proyectos" : "Projects"}</h1>
      <div className="projectsContainer">
        <button onClick={handlePreviousProject}><i className="fa-solid fa-chevron-left"></i></button>
        {projectsToShow == 1 && <button onClick={handleNextProject} className="rightButton"><i className="fa-solid fa-chevron-right"></i></button>}
        {displayedProjects.map((project) => (
          <div key={project.id} className="projectContainer fadeInUp">
            <img src={project.foto} />
            <div className="descriptionProject">
              <div className="description">
                <h2>{language == 'es' ? project.nameEs : project.nameEn}</h2>
                <p>
                  {language == 'es' ? project.descriptionEs : project.descriptionEn}
                </p>
              </div>
              <div className="links">
                <div style={{
                  background: `linear-gradient(to right, #01c4e7 ${project.porcent}%, white 50%)`
                }}>
                  <h2>{project.porcent}%</h2>
                </div>
                <a target="_blank" href={project.github}><i className="fa-brands fa-github"></i>{language == 'es' ? "Ver repositorio" : "View source code"}</a>
                <a target="_blank" href={project.link}><i className="fa-solid fa-link"></i>{language == 'es' ? "Ver página" : "View page"}</a>
              </div>
            </div>

          </div>
        ))}
        {projectsToShow > 1 && <button onClick={handleNextProject}><i className="fa-solid fa-chevron-right"></i></button>}
      </div>
    </div>
  );
};