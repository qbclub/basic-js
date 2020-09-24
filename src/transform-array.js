const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let transformedArray = []
    let elementDiscarded
    for (let i = 0; i < arr.length; i++) {
      transformedArray.push(arr[i])

      if (arr[i] == "--double-next") {
        transformedArray.pop()
        i < arr.length - 1 ? transformedArray.push(arr[i + 1]) : transformedArray = transformedArray
      }
      if (arr[i] == "--double-prev") {
        transformedArray.pop()
        if (elementDiscarded) {
          transformedArray = transformedArray
        } else {
          i > 0 ? transformedArray.push(arr[i - 1]) : transformedArray = transformedArray
          elementDiscarded = false
        }

      }
      if (arr[i] == "--discard-next") {
        transformedArray.pop()
        i < arr.length - 1 ? i++ : transformedArray = transformedArray
        elementDiscarded = true
      }
      if (arr[i] == "--discard-prev") {
        transformedArray.pop()
        if (elementDiscarded) {
          transformedArray = transformedArray
        } else {
        i > 0 ? transformedArray.pop() : transformedArray = transformedArray
        }
      }

    }
    return transformedArray
  } else {
    throw new Error
  }
};