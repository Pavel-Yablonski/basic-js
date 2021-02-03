const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (!sampleActivity || typeof sampleActivity !== "string" || sampleActivity > 15 || sampleActivity <= 0) return false;
  else {
    if (!Number(sampleActivity)) return false;
    
    sampleActivity = Number(sampleActivity);

    return res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  }
};
