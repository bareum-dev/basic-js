const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let self = this;
    if (array.every((el) => !Array.isArray(el)) || array.length == 0) {
      return 1;
    } else {
      let depth = 1;
      for (let el of array) {
        if (Array.isArray(el)) {
          depth += self.calculateDepth(el);
        }
      }
      return depth;
    }
  }
}

module.exports = {
  DepthCalculator
};
