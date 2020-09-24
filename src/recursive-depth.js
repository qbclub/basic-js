const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor() {
    this.deep = 0;
    this.deepArr = [];
    }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      this.deep = this.deep + 1
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i])
        }
      }
      this.deepArr.push(this.deep)

    }
    this.deep = 1
    return this.deepArr.sort(function (a, b) {
      return b - a
    })[0]
  }
  
};