const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let innerObj = {
        repeatTimes: 1,
        separator: "+",
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|',

    }

    for (let key in options) {
        innerObj[key] = options[key];
      }


  if(typeof str !== 'string' && str) {
      str = `${str}`
  }
  if (typeof innerObj.addition !== 'string' && innerObj.addition) {
    innerObj.addition = `${innerObj.addition}`
  }
  console.log(innerObj.addition)
  // if (innerObj.additionRepeatTimes <= 1 && innerObj.additionSeparator === undefined) {
  //   innerObj.additionSeparator = "|"
  // }

 let arr = [];
 let addString = (innerObj.addition + innerObj.additionSeparator).repeat(innerObj.additionRepeatTimes);
 let finAddString = addString.slice(0, addString.length - innerObj.additionSeparator.length)

  for (let i = 0; i< innerObj.repeatTimes; i++) {
     if(i === innerObj.repeatTimes-1){
          arr.push(str + finAddString)
      } else {
         arr.push(str + finAddString + innerObj.separator) 
      }
  }
  return arr.join('')
}

module.exports = {
  repeater
};
