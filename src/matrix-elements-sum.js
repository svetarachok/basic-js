const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) { 
  let result = 0;

  if (matrix.length != 1) {
    result += matrix[0].reduce((acc, item) => acc + item)

  for (let i = 0; i < matrix[1].length; i++) {
    for (let j=1; j < matrix.length; j++) {
      console.log(matrix[j][i])
      if (matrix[j-1][i] != 0) {
        result += matrix[j][i]
      }
    }
  }
  return result
  
  } else {
    result += matrix[0].reduce((acc, item) => acc + item)
    return result
  }
}

module.exports = {
  getMatrixElementsSum
};
