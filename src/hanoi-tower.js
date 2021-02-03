const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  disksNumber = 2 ** disksNumber - 1;
  turnsSpeed = Math.floor((3600 * disksNumber) / turnsSpeed);

  const obj = {
    turns: disksNumber,
    seconds: turnsSpeed
  }

  return obj;
};
