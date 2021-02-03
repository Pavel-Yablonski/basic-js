const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  if (matrix.length) {
    let arr = matrix[0];

    for (let i = 1; i < matrix.length; i++) {
      arr = arr.concat(matrix[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == "^^") count++;
    }
  }

  return count;
};
