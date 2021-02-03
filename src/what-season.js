const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return `Unable to determine the time of year!`;
  if (typeof date !== typeof new Date()) throw Error ();
  
  const arrSeasons = ["spring", "summer", "autumn", "winter"];

  let month = Date.prototype.getMonth.call(date);

  if (month == 11 || month == 0 || month == 1) return arrSeasons[3];
  else if (month == 2 || month == 3 || month == 4) return arrSeasons[0];
  else if (month == 5 || month == 6 ||  month == 7) return arrSeasons[1];
  else if (month == 8 || month == 9 ||  month == 10) return arrSeasons[2];
};
