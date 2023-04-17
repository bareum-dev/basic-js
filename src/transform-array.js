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
  if (!Array.isArray(array)) {
    throw new Error(`"arr" parameter must be an instance of the Array!`);
  }

  let arr = array.slice();
  let sortArr = [];

  arr.forEach((el, index) => {
    if (typeof el === "number") {
      sortArr.push(el);
    } else if (el === "--discard-next" && arr[index + 1]) {
      arr.splice(index + 1, 1, null);
    } else if (el === "--discard-prev" && arr[index - 1]) {
      typeof arr[index - 1] === "number" && sortArr.length
        ? sortArr.pop()
        : sortArr;
    } else if (el === "--double-next" && arr[index + 1]) {
      typeof arr[index + 1] === "number"
        ? sortArr.push(arr[index + 1])
        : sortArr;
    } else if (el === "--double-prev" && arr[index - 1]) {
      typeof arr[index - 1] === "number"
        ? sortArr.push(arr[index - 1])
        : sortArr;
    }
  });

  return sortArr;
}

module.exports = {
  transform
};
