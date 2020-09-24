const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');

  if (Number.isNaN(Number(sampleActivity)) || Number(sampleActivity) == 0 || typeof (sampleActivity) != "string" || Number(sampleActivity)<0 || Number(sampleActivity)>15 ){
 
    return false
  } else{
    let k = 0.693/HALF_LIFE_PERIOD
    return Number(sampleActivity)>0|| Number(sampleActivity)<= MODERN_ACTIVITY?  -Math.ceil(Math.log(Number(sampleActivity)/MODERN_ACTIVITY)/k -1): false
  }  

 
  
};
