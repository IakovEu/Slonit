// Логгер

function createLogger() {
	const arr = [];
	return {
		log: function (message) {
			arr.push(message);
		},
		getLogs: function () {
			console.log(arr);
		},
	};
}

const result = createLogger();

result.log(111);
result.log(888);
// result.getLogs();

//Генератор случайных чисел из диапазона

function createRandomGenerator(min, max) {
	return function () {
		return Math.floor(Math.random() * max) + min;
	};
}

const resultat = createRandomGenerator(1, 10);

console.log(resultat());
