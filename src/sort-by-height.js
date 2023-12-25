const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr.includes(-1)) {
    return arr.sort((a, b) => a - b);
  }

  const indexes = [];
  const array = [];

  arr.forEach((el, index) => (el === -1 ? indexes.push(index) : indexes));
  arr.forEach((el) => (el !== -1 ? array.push(el) : array));

  array.sort((a, b) => a - b);
  indexes.forEach((el) => array.splice(el, 0, -1));

  return array;
}

module.exports = {
  sortByHeight
};
