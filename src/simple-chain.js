const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],

  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(`( ${value} )`); 
    return this;
  },
  removeLink(position) {
    if (position > 0) {
			this.str.splice(position - 1, 1);
		} else {
      this.str = [];
			throw Error ('Error');
		}
		 return this
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let arr = this.str.join("~~")
    
    this.str = [];

    return arr;
  }
};

module.exports = chainMaker;
