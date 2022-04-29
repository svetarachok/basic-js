const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor (mode = true) {
    this.mode = mode
  }

  
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!')
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];
    let messageLetters = message.match(/[a-zA-Z]*/g).join('')
    let messageArr = message.split('')
    let keyEqualMessageArr = []
    
    //make code full string
    let i=0
    while (keyEqualMessageArr.length < messageLetters.length) {
        keyEqualMessageArr.push(key.charAt(i))
        if (i<key.length-1) {
            i++   
          } else i=0
      }      
      
  //convert string
      let keyString = keyEqualMessageArr.join('')
     
      for (let i=0; i<messageLetters.length; i++) {
      let m = messageLetters.charAt(i).toUpperCase()
      let mNum = alphabet.indexOf(m)

      let k = keyString.charAt(i).toUpperCase()
      let kNum = alphabet.indexOf(k)

      let resNum = 0; 
      if ((mNum+kNum) >= 26) {
            resNum = Math.abs(26 - (mNum+kNum))
            result.push(alphabet.charAt(resNum))
        } else {
            resNum = mNum+kNum
            result.push(alphabet.charAt(resNum))
        }
    }

      messageArr.forEach((item, index) => {
          if (!alphabet.includes(item.toUpperCase())) {
              result.splice(index, 0, item)
          }})

   if (this.mode) {
       return result.join('')
    } else {
        return result.reverse().join('')
    }

   }
  


  decrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!')
    }
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];
    let messageLetters = message.match(/[A-Z]*/g).join('')
    let messageArr = message.split('')
    let keyEqualMessageArr = []
    
    
    //make code full string
    let i=0
    while (keyEqualMessageArr.length < messageLetters.length) {
        keyEqualMessageArr.push(key.charAt(i))
        if (i<key.length-1) {
            i++   
          } else i=0
      }      

  //convert string
      let keyString = keyEqualMessageArr.join('')
     
      for (let i=0; i<messageLetters.length; i++) {
      let m = messageLetters.charAt(i).toUpperCase()
      let mNum = alphabet.indexOf(m)

      let k = keyString.charAt(i).toUpperCase()
      let kNum = alphabet.indexOf(k)

      let resNum = 0; 
          if (mNum < kNum) {
              resNum = 26-kNum+mNum
              result.push(alphabet.charAt(resNum))
          } else {
              resNum = mNum-kNum
              result.push(alphabet.charAt(resNum))
          }
      }

      messageArr.forEach((item, index) => {
          if (!alphabet.includes(item)) {
              result.splice(index, 0, item)
          }})
 
          if (this.mode) {
              return result.join('')
           } else {
               return result.reverse().join('')
      }
     
  }
}

module.exports = {
  VigenereCipheringMachine
};
