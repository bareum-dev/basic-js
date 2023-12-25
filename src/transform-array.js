const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
let array = [1, 2, 3, "--discard-prev", 4, 5];

function transform(array) {
  if (!Array.isArray(array))
    throw new error(
      "Array parameter must be an instance of the Array! if the arr is not an Array"
    );

  const skipIndex = [];
  const transform = [...array].reduce((acc, el, index, arr) => {
    if (skipIndex.includes(index)) {
      return acc;
    }
    if (typeof el === "number") {
      acc.push(el);
    }
    if (typeof el === "string") {
      switch (el) {
        case "--discard-next":
          acc.push(null);
          acc.push(null);
          arr[index + 1] ? skipIndex.push(index + 1) : skipIndex;
          break;
        case "--discard-prev":
          if (acc[index - 1] && acc[index - 1] !== null) {
            acc.splice([index - 1], 1, null);
          }
          break;
        case "--double-next":
          if (array[index + 1]) {
            acc.push(array[index + 1]);
          }
          break;
        case "--double-prev":
          if (acc[index - 1] && acc[index - 1] !== null) {
            acc.push(acc[index - 1]);
          }
          break;
      }
      return acc;
    }
    return acc;
  }, []);
  return transform.filter((el) => el !== null);
}

module.exports = {
  transform
};
