import React from 'react';

const FeaturedProject = (props) => {
  const {
    project: {
      title,
      shortDescription,
      thumbnail,
      screenshot,
      technologies,
      index,
    },
    onOpenModal,
  } = props;

  return (
    <article className="mt-20">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          className="object-contain md:hidden"
          src={`./src/assets/${thumbnail}`}
          alt={`Snapshot for ${title}`}
        />
        <img
          className="object-contain w-72 hidden md:block lg:grow"
          src={`./src/assets/${screenshot}`}
          alt={`Snapshot for ${title}`}
        />
        <div className="flex flex-col gap-3 lg:w-5/12">
          <h3 className="text-2xl font-serif lg:text-4xl">{title}</h3>
          <p className="lg:text-xl">{shortDescription}</p>
          <div className="flex flex-wrap gap-4">
            {technologies.map((technology, index) => (
              <a key={index} className="px-3 py-2 border border-black">
                {technology}
              </a>
            ))}
          </div>
          <button
            className="btn-primary self-start"
            onClick={() => onOpenModal(index)}>
            See Project
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
