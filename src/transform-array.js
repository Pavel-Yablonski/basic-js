const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  
  if(arr.find(item => item === '--discard-next' || item === '--discard-prev' || item === '--double-prev' || item === '--double-next' ) === undefined){
    return arr;
  }

  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if(arr[i-2] !== '--discard-next'){
          arrCopy.pop();
        }
        break;
      case '--double-next':
        if(arr[i+1] !== undefined){
          arrCopy.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if(arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next'){
          arrCopy.push(arr[i - 1]);
        }
        break;
      default:
        arrCopy.push(arr[i]);
        break;
    }

  }
  
  return arrCopy;

};