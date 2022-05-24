import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FeaturedProject from './FeaturedProject';
import OtherProjects from './OtherProjects';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState({});

  const { featuredRepo, reposInfo } = useSelector((store) => store.repos);

  const handleOpenModal = (project) => {
    setModalOpen(true);
    setModalProject(project);
  };

  return (
    <div className="w-full">
      <section
        id="projects"
        className="bg-slate-50 w-full px-6 py-28 md:px-[10%]"
      >
        <div>
          <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-6">
            <h2 className="text-3xl md:text-4xl font-serif self-center min-w-fit">
              My Recent Works
            </h2>
            <div className="h-px w-full bg-black my-6" />
          </div>
          <div>
            {Object.keys(featuredRepo).length > 0 && (
              <FeaturedProject
                key={featuredRepo.id}
                project={featuredRepo}
                onOpenModal={handleOpenModal}
              />
            )}

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.keys(reposInfo).map((repo) => (
                <OtherProjects
                  key={reposInfo[repo].name}
                  project={reposInfo[repo]}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {modalOpen && (
        <div className="block fixed top-0 left-0 z-10 w-full">
          <ProjectModal
            project={modalProject}
            onCloseModal={() => setModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
