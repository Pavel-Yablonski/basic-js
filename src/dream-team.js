const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.filter(item => typeof item === "string").map((item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] != " ") return item[i].toUpperCase();
    }
  }).sort().join("");
};
