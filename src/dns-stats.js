const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  let matrix = []

domains.forEach(item => {matrix.push(item.split('.').reverse())})

for (let i=0; i < matrix.length; i++) {
  let first = `.${matrix[i][0]}`
    if(matrix[i][0]) {
      (!obj[`${first}`]) ? obj[`${first}`] = 1 : obj[`${first}`] += 1;
    }

    let second = `.${matrix[i][1]}`;
    if (matrix[i][1]) {
      (!obj[`${first}${second}`]) ? obj[`${first}${second}`] = 1 : obj[`${first}${second}`] +=1
    }
    
    let third = `.${matrix[i][2]}`;
    if(matrix[i][2]) {
      (!obj[`${first}${second}${third}`]) ? obj[`${first}${second}${third}`] = 1 : obj[`${first}${second}${third}`] +=1
    }

}
  return obj
}

module.exports = {
  getDNSStats
};
