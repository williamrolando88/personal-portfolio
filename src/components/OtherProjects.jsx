import React, { useEffect, useRef } from 'react';
import { formatTitle, trimString } from '../modules/formatString';

const OtherProjects = ({ project, onOpenModal }) => {
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  }, []);

  const { name, description, topics, index } = project;

  console.log(count.current, name);

  return (
    <article className="flex flex-col border">
      <img
        className="h-full w-full object-contain object-top"
        src={`https://raw.githubusercontent.com/williamrolando88/${name}/dev/screenshots/responsive_design.png`}
        alt={`Snapshot for ${formatTitle(name)}`}
      />
      <h3 className="text-2xl font-serif">{formatTitle(name)}</h3>
      <p>{trimString(description, 100)}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className="px-3 py-2 bg-white/30">
            {topic}
          </span>
        ))}
      </div>
      <button onClick={() => onOpenModal(index)} className="btn-primary w-full">
        See Project
      </button>
    </article>
  );
};

export default OtherProjects;
