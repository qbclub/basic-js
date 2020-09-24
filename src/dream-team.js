const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let team = ""

    for (let index = 0; index < members.length; index++) {

     typeof(members[index])== "string"?  team = team + members[index].trim()[0].toUpperCase():team 
      
    }
  return team.split("").sort(function (a, b) {
    return a.localeCompare(b);
  }).join("")
  }
return false
};

