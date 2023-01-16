/**
 * A function that returns an array of all the values from an object
 * @params
 *  - @obj {object} - the object to get the values from
 * @returns {array} - an array of all the values from the object
 */
const getObjectValuesAsArray = (obj) => {
  return Object.keys(obj).map((key) => obj[key]);
};

export default getObjectValuesAsArray;
