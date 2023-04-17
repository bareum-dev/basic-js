const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = String(num).split("");
  let min = Math.min(...arr);
  let index = arr.indexOf(String(min), 0);
  arr.splice(index, 1);
  return Number(arr.join(""));
}

module.exports = {
  deleteDigit
};
