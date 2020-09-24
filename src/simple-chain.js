const CustomError = require("../extensions/custom-error");



const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value === undefined ? this.chain.push("( )") : this.chain.push("( " + value + " )")
    return this
  },
  removeLink(position) {

    if (typeof position !== 'number') {
      this.chain = []
      throw new Error("Не число")
    } else {
      if ((position ^ 0) === position) {
        console.log(this.getLength())
        if (this.getLength() >= position & position > 0) {
          this.chain.splice(position - 1, 1)
        } else {
          this.chain = []
          throw new Error("Позиция вне диапазона")
        }

      } else {
        this.chain = []
        throw new Error("Не целое число")
      }
    }
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain
    this.chain = []
    return result.join('~~')

  }
};

module.exports = chainMaker;