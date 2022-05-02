const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {

  if(names.length === 0) {
    return names
  }
  let resArr = [names[0]];
  names.shift()
 
  names.forEach(item => {
    let number = 0;
    for (let i = 0; i<resArr.length; i++) {
     if (number === 0) {
       if (item === resArr[i]) {
         number++
       }
     } else {
       if (`${item}(${number})` === resArr[i]) {
         number++
       }
     }
    }
   
    if (number !== 0) {
      item = `${item}(${number})`
     }
    resArr.push(item)
  });
  
// console.log(resArr)  
return resArr 
}

module.exports = {
  renameFiles
};
