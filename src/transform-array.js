const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  let result = [];

  for (i=0; i< arr.length; i++) {
    if (arr[i] === '--discard-next') {
        i+=2
        result.push(arr[i])
        result.pop()
    } else if (arr[i] === '--discard-prev') { 
        i++
        result.pop()
        result.push(arr[i])
    } else if (arr[i] === '--double-next') {
        result.push(arr[i+1])
        i++
        result.push(arr[i])
    } else if (arr[i] === '--double-prev') {
        result.push(result[result.length-1])
        i++
        result.push(arr[i])
    } else{
        result.push(arr[i])
    }   
  }

return result.filter(i => i != undefined)
}

module.exports = {
  transform
};
