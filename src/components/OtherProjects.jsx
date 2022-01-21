import React from 'react';

const OtherProjects = (props) => {
  const {
    project: { title, thumbnail, shortDescription, technologies, index },
    onOpenModal,
  } = props;

  const getImageUrl = (file) => {
    return new URL(`../../${file}`, import.meta.url).href;
  };

  return (
    <article className="flex flex-col">
      <img
        className="h-full w-full object-contain object-top"
        src={getImageUrl(thumbnail)}
        alt=""
      />
      <div className="-mt-52">
        <div className="flex flex-col gap-3 justify-end p-4 bg-gradient-to-b from-transparent via-black to-black text-white">
          <h3 className="text-2xl font-serif">{title}</h3>
          <p>{shortDescription}</p>
          <div className="flex flex-wrap gap-4">
            {technologies.map((technology, index) => (
              <a key={index} className="px-3 py-2 bg-white/30">
                {technology}
              </a>
            ))}
          </div>
        </div>
        <button
          onClick={() => onOpenModal(index)}
          className="btn-primary w-full">
          See Project
        </button>
      </div>
    </article>
  );
};

export default OtherProjects;
