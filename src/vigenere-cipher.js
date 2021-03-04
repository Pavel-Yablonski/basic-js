const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(_mod) {
    this.mod = _mod;
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    keycode = keycode.repeat(Math.ceil(message.length / key.length)).split('');

    let code = "";
    for(let i = 0; i < message.length; i += 1) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }

    if(this.mod === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }  

  decrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    keycode = keycode.repeat(Math.ceil(message.length / key.length)).split('');

    let code = "";
    for(let i = 0; i < message.length; i += 1) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + 26 - keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }

    if(this.mod === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
}

module.exports = VigenereCipheringMachine;
