const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.length
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.result.push('( )')
    } else {
      this.result.push(`( ${value} )`)
    }  
    return this
  },
  removeLink(position) {
    if (this.result.length-1 < position || !Number.isInteger(position) || position <= 0 ) { 
      throw new Error ('You can\'t remove incorrect link!')
    } else {
      this.result.splice(position-1, 1)
  
    }
  return this  
  
  },
  reverseChain() {
    this.result.reverse();
    return this
  },
  finishChain() {
    try {
      return this.result.join('~~')
    }
    finally {
      this.result = []
    }
  }
};


module.exports = {
  chainMaker
};

