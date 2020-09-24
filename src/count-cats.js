const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let cat = 0;
  array.forEach(element => {
    element.forEach(el => {
      el == "^^" ? cat++ : cat
    })

  });
  return cat
  
};