import React, { useEffect, useRef } from 'react';
import { formatTitle, trimString } from '../modules/formatString';

const OtherProjects = ({ project, onOpenModal }) => {
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  }, []);

  const { name, description, topics } = project;

  console.log(count.current, name);

  // !Delete this variable and connect to modal
  const index = 1;

  return (
    <article className="flex flex-col border">
      <div className="flex grow flex-col gap-2 bg-gradient-to-b from-transparent text-white to-black ">
        <img
          className="h-full w-full object-contain object-top"
          src={`https://raw.githubusercontent.com/williamrolando88/${name}/dev/screenshots/responsive_design.png`}
          alt={`Snapshot for ${formatTitle(name)}`}
        />
        <div className="flex gap-2 flex-col px-4 py-2">
          <h3 className="text-2xl font-serif">{formatTitle(name)}</h3>
          <p>{trimString(description, 80)}</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span key={topic} className="px-2 py-1 text-sm bg-white/30">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => onOpenModal(index)} className="btn-primary w-full">
        See Project
      </button>
    </article>
  );
};

export default OtherProjects;
