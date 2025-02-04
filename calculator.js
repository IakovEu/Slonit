// Простой калькулятор (+-*/) /  оператор - слово / без условных операторов

const doPlus = function (a, b) {
	return a + b;
};

const doMinus = function (a, b) {
	return a - b;
};

const doMultiply = function (a, b) {
	return a * b;
};

const doDivide = function (a, b) {
	return a / b;
};

function calculate(operand1, operand2, cb) {
    return cb(operand1, operand2);
}

const operations = {
	plus: doPlus,
	minus: doMinus,
	multiply: doMultiply,
	divide: doDivide
};

const selectedOperation = 'multiply';

console.log(calculate(8, 8, operations[selectedOperation]));
