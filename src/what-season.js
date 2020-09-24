const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date instanceof Date) {
    return date.getMonth() > 1 & date.getMonth() < 5 ?
      "spring" : date.getMonth() > 4 & date.getMonth() < 8 ?
      "summer" : date.getMonth() > 7 & date.getMonth() < 11 ?
      "autumn" : date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1 ?
      "winter" :  new Error
  } else {
    if (typeof date == "number") {
       throw new Error
    }
    if (typeof date == "string") {
      throw new Error
    }
    if (date == null) {
      return 'Unable to determine the time of year!'

    }
    throw new Error
  }
};