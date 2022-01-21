import React, { useEffect, useState } from 'react';
import FeaturedProject from './FeaturedProject';
import OtherProjects from './OtherProjects';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState({});

  // useEffect(() => {
  //   const getProjects = async () => {
  //     let response = await fetch('../json/projects.json');
  //     setProjects(await response.json());
  //   };
  //   getProjects();
  //   return () => {
  //     setProjects([]);
  //   };
  // }, []);

  const handleOpenModal = (index) => {
    setModalOpen(true);
    setModalProject(projects[index]);
  };

  return (
    <div className="w-full">
      <section
        id="projects"
        className="bg-slate-50 w-full px-6 py-28 md:px-[10%]">
        <div>
          <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-6">
            <h2 className="text-3xl md:text-4xl font-serif self-center min-w-fit">
              My Recent Works
            </h2>
            <div className="h-px w-full bg-black my-6" />
          </div>
          <div>
            {projects.map((project, index) => {
              if (project.featured) {
                return (
                  <FeaturedProject
                    key={index}
                    project={project}
                    onOpenModal={handleOpenModal}
                  />
                );
              }
            })}

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                if (!project.featured) {
                  return (
                    <OtherProjects
                      key={index}
                      project={project}
                      onOpenModal={handleOpenModal}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          modalOpen ? 'block fixed top-0 left-0 z-10 w-full' : 'hidden'
        }>
        {true && (
          <ProjectModal
            project={modalProject}
            onCloseModal={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
