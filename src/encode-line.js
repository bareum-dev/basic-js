const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == "") {
    return "";
  }
  
  let arr = str.split("");
  let result = "";
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      stack.push(arr[i]);
    } else {
      if (arr[i] == stack[stack.length - 1]) {
        stack.push(arr[i]);
      } else {
        if (stack.length > 1) {
          result += `${stack.length}${stack[stack.length - 1]}`;
        } else {
          result += `${stack[stack.length - 1]}`;
        }
        stack = [];
        stack.push(arr[i]);
      }
    }
  }

  if (stack.length > 1) {
    result += `${stack.length}${stack[stack.length - 1]}`;
  } else {
    result += `${stack[stack.length - 1]}`;
  }
  return result;
}

module.exports = {
  encodeLine
};
