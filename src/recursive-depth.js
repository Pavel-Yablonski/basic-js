const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let coundDepth = this.calculateDepth(item);
        
        if (coundDepth >= count) {
          count = coundDepth + 1;
        }
      }
    }
    return count;
  }
};