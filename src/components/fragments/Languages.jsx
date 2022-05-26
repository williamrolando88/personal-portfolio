import React from 'react';

const Languages = ({ languages }) => {
  const languagesKeys = Object.keys(languages);
  const languagesValues = Object.values(languages);

  const languagesTotal = languagesValues.reduce((a, b) => a + b, 0);
  const languagesPercentage = languagesValues.map((language) =>
    parseFloat(((100 * language) / languagesTotal).toFixed(2))
  );

  return (
    <>
      <h4 className="text mt-4">Languages:</h4>
      <div className="flex text-sm md:justify-between flex-wrap gap-2 mt-2">
        {languagesKeys.map((language, index) => (
          <div
            key={language}
            className="border bg-orange-200 border-orange-800 md:border-2 rounded-md md:px-4 md:py-2 flex gap-2 items-center px-1 "
          >
            <span>{language}:</span>
            <span>{languagesPercentage[index]}%</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
