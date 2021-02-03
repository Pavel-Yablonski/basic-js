const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
	
	let optionArr = [], strArr = [];
	let	optionStr= null;
	let	optionRepeatTimes = 1;
	let	separator = '+';
	let	optionSeparator = null;
  let repeatTimes = 1;

	if (options !== undefined && options.addition !== undefined) {
		optionStr = String(options.addition);
	}

	if (options !== undefined && options.additionRepeatTimes !== undefined) {
		optionRepeatTimes = options.additionRepeatTimes;
	}

	if (options !== undefined && options.separator !== undefined) {
		separator = options.separator;
	}

	if (options !== undefined && options.additionSeparator !== undefined) {
		optionSeparator = options.additionSeparator;
	}

	if (options !== undefined && options.repeatTimes !== undefined) {
		repeatTimes = options.repeatTimes;
	}

	for (let i = 0; i < optionRepeatTimes; i++) {
		optionArr.push(optionStr);
	}

	optionStr = optionArr.join(optionSeparator);

	str = str + optionStr;

	for (let i = 0; i < repeatTimes; i++) {
		strArr.push(str);
	}

	return strArr.join(separator)
};
  