const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 
  
    let Obj = {} 

    Obj.turns = 2**disksNumber -1
    Obj.seconds = Math.floor(Obj.turns*3600/turnsSpeed)   
  
    return Obj
};

