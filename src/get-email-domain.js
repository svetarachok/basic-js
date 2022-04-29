const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let regexp = /(?<=@)[\d+\w+\-]*[\.][\w+]*$/;
  let result = email.match(regexp);
  return result.join()

}

module.exports = {
  getEmailDomain
};
