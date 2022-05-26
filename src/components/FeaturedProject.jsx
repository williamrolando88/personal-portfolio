import React, { useEffect, useRef } from 'react';
import { formatTitle, trimString } from '../modules/formatString';

const FeaturedProject = ({ project, onOpenModal }) => {
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  }, []);

  const { name, description, topics } = project;

  return (
    <article className="mt-20">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          className="object-contain md:w-72 md:block lg:grow"
          src={`https://raw.githubusercontent.com/williamrolando88/${name}/dev/screenshots/responsive_design.png`}
          alt={`Snapshot for ${formatTitle(name)}`}
        />
        <div className="flex flex-col gap-3 lg:w-5/12">
          <h3 className="text-2xl font-serif lg:text-4xl">
            {formatTitle(name)}
          </h3>
          <p className="lg:text-xl">{trimString(description, 100)}</p>
          <div className="flex flex-wrap gap-4">
            {topics.map((topic) => (
              <a key={topic} className="px-3 py-2 border border-black">
                {topic}
              </a>
            ))}
          </div>
          <button
            className="btn-primary self-start"
            onClick={() => onOpenModal(project)}
          >
            See Project
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
