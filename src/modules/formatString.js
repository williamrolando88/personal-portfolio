/**
 * Delete hypens ('-') and capitalize a given string
 * @param {string} nonFormattedString String to be formated
 * @returns {string}
 */
export const formatTitle = (nonFormattedString) => {
  let arr = nonFormattedString.split('-');

  let capArr = arr.map((word) => capitalize(word));

  return capArr.join(' ');
};

const capitalize = (string) => {
  if (string.length < 4) return string.toUpperCase();

  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Shortens a given string to a desired lenght and add '...' at the end of it
 * @param {string} longString String to be trimmed
 * @param {number} requiredLength Decired lenght after trim
 * @returns {string}
 */
export const trimString = (longString, requiredLength) => {
  if (longString.length < requiredLength) return longString;

  if (longString.length > requiredLength) {
    return longString.slice(0, requiredLength) + '...';
  }
};
