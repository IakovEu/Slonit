// Простой калькулятор (+-*/) /  оператор - слово / без условных операторов

const doPlus = (a, b) => a + b;

const doMinus =  (a, b) => a - b;

const doMultiply =  (a, b) => a * b;

const doDivide =  (a, b) => a / b;

function calculate(operand1, operand2, cb) {
	return cb(operand1, operand2);
}

const operations = {
	plus: doPlus,
	minus: doMinus,
	multiply: doMultiply,
	divide: doDivide,
};

const selectedOperation = 'multiply';

console.log(calculate(8, 8, operations[selectedOperation]));
