import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = (props) => {
  const {
    project: {
      title,
      technologies = [],
      thumbnail,
      screenshot,
      longDescription,
    },
    onCloseModal,
  } = props;

  return (
    // Modal background
    <div className="h-screen w-full bg-black/90 flex justify-center items-center">
      {/* Modal window */}
      <div className="bg-slate-50 min-h-[50%] max-h-[90%] w-4/5 p-6 flex flex-col">
        <div className="flex justify-between items-start w-full text-2xl">
          <h3 className="font-bold">{title}</h3>
          <button className="" onClick={onCloseModal}>
            <FaTimes />
          </button>
        </div>
        {/* Technologies objects */}
        <div className="mt-6 flex flex-wrap gap-4">
          {technologies.map((technology, index) => (
            <a key={index} className="px-3 py-2 border border-black">
              {technology}
            </a>
          ))}
        </div>
        {/* Screenshot responsive rendering */}
        <div className="mt-6 overflow-y-auto hide-scroll overscroll-none flex flex-col gap-4">
          <div>
            <img
              className="md:hidden w-full"
              src={`./src/assets/${thumbnail}`}
              alt="Project screenshot"
            />
            <img
              className="hidden md:block w-full"
              src={`./src/assets/${screenshot}`}
              alt="Project screenshot"
            />
          </div>
          <p className="">{longDescription}</p>
          <div className="flex justify-between text-sm">
            <a className="btn-primary flex gap-2 items-center" href="">
              <span>See Live</span>
              <FaExternalLinkAlt />
            </a>
            <a className="btn-primary flex gap-2 items-center" href="">
              <span>See Source</span>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
