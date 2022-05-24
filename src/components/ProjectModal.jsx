import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaStar } from 'react-icons/fa';
import { formatTitle } from '../modules/formatString';

const ProjectModal = ({ project, onCloseModal }) => {
  console.log(project);
  const { name, topics, description, homepage, html_url, stargazers_count } =
    project;

  // todo: get pictures url

  /* 
  https://api.github.com/repos/williamrolando88/Hotelzilla-UI
  languages_url: /languages -> todo
  contents_url: /contents/screenshots -> download_url


  */

  return (
    // Modal background
    <div className="h-screen w-full bg-black/90 flex justify-center items-center">
      {/* Modal window */}
      <article className="bg-slate-50 min-h-[50%] max-h-[90%] w-4/5 p-6 flex flex-col relative">
        <button
          className="rounded-full bg-transparent hover:bg-neutral-400 p-1 absolute top-2 right-2"
          onClick={onCloseModal}
        >
          <FaTimes className="h-5 w-5" />
        </button>
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl grow">{formatTitle(name)}</h3>
          <div className="border-2 border-neutral-500 p-2 rounded-md mr-2 flex gap-2 items-center">
            <FaStar className="text-yellow-400" />
            <span>{stargazers_count}</span>
          </div>
        </div>
        {/* Technologies objects */}
        <div className="mt-6 flex flex-wrap gap-4">
          {topics.map((topic) => (
            <a key={topic} className="px-3 py-2 border border-black">
              {topic}
            </a>
          ))}
        </div>
        {/* Screenshot responsive rendering */}
        <div className="mt-6 overflow-y-auto hide-scroll overscroll-none flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="md:flex-1 grid items-center">
            <img
              className="md:hidden w-full"
              src={''}
              alt="Project screenshot"
            />
            <img
              className="hidden md:block w-full"
              src={''}
              alt="Project screenshot"
            />
          </div>
          <div className="md:flex-1">
            <p className="">{description}</p>
            <div className="flex justify-between gap-6 md:justify-start text-sm mt-4">
              {homepage && (
                <a
                  className="btn-primary flex gap-2 items-center"
                  href={homepage}
                  target="_blank"
                >
                  <span>See Live</span>
                  <FaExternalLinkAlt />
                </a>
              )}
              <a
                className="btn-primary flex gap-2 items-center"
                href={html_url}
                target="_blank"
                rel="noopener"
              >
                <span>See Source</span>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectModal;
