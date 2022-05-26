import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatTitle } from '../modules/formatString';
import Languages from './fragments/Languages';

const ProjectModal = ({ project, onCloseModal }) => {
  const { name, topics, description, homepage, html_url, stargazers_count } =
    project;

  const projectLanguages = useSelector(
    (store) => store.repos.reposLanguages[name]
  );

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
          <div className="border-2 border-neutral-500 p-2 rounded-md mr-8 flex gap-2 items-center">
            <span>GitHub Stars:</span>
            <span>{stargazers_count}</span>
            <FaStar className="text-yellow-400" />
          </div>
        </div>
        {/* Technologies objects */}
        <h4 className="mt-2">Technologies:</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          {topics.map((topic) => (
            <a key={topic} className="px-3 py-2 border border-black">
              {topic}
            </a>
          ))}
        </div>
        <Languages languages={projectLanguages} />
        {/* Screenshot responsive rendering */}
        <div className="mt-6 overflow-y-auto hide-scroll overscroll-none flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="md:flex-1 grid items-center">
            {/* Here comes the picture from the work card */}
            <img
              className="object-contain"
              src={`https://raw.githubusercontent.com/williamrolando88/${name}/dev/screenshots/responsive_design.png`}
              alt={`Snapshot for ${formatTitle(name)}`}
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
