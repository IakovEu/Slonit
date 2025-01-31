// Есть два компьютера (первый загадывает / второй угадывает / диапазон 1-100 / бинарный поиск)
// Через циклы решение не смог придумать, если оно есть, то покажите мне пожалуйста. Мой вариант не лучший, но требования выполняет.

//Компьютер-1 загадывает

let counter = 0;

function randomNum(variant) {
	counter += 1;
	if (counter === 1) {
		return Math.ceil(Math.random() * (100 - 0) + 0);
	} else if (counter === 2) {
		if (variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(75);
		} else if (variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(25);
		} else if (variant === num) {
			console.log('Компьютер 2: Угадал');
		}
	} else if (counter === 3) {
		if (variant === 25 && variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(37);
		} else if (variant === 25 && variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(12);
		} else if (variant === 75 && variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(87);
		} else if (variant === 75 && variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(63);
		} else if (variant === num) {
			console.log('Компьютер 2: Угадал');
		}
	} else if (counter === 4) {
		if (variant === 12 && variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(13, 24);
		} else if (variant === 12 && variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(1, 11);
		} else if (variant === 37 && variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(38, 49);
		} else if (variant === 37 && variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(25, 36);
		} else if (variant === 63 && variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(64, 74);
		} else if (variant === 63 && variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(51, 62);
		} else if (variant === 87 && variant < num) {
			console.log('Компьютер 2: Больше');
			return guess(88, 100);
		} else if (variant === 87 && variant > num) {
			console.log('Компьютер 2: Меньше');
			return guess(76, 86);
		} else if (variant === num) {
			console.log('Компьютер 2: Угадал');
		} // и тд. так можно проверять далее, я закончу перебором, чтобы ускорить процесс
	} else if (counter === 5) {
		console.log('Компьютер 2: Угадал');
	}
}

const num = randomNum();
console.log(`Первый компьютер загадал ${num}`);

// Компьютер-2 отгадывает num

function guess(answer = 50, secondAnswer) {
	if (counter === 1) {
		console.log('Компьютер 1: Пробую число 50');
		return randomNum(answer);
	} else if (counter === 2) {
		console.log(`Компьютер 1: Пробую число ${answer}`);
		return randomNum(answer);
	} else if (counter === 3) {
		console.log(`Компьютер 1: Пробую число ${answer}`);
		return randomNum(answer);
	} else if (counter === 4) {
		for (i = answer; i <= secondAnswer; i++) {
			if (i === num) {
				console.log(`Компьютер 1: Пробую число ${i}`);
				return randomNum(i);
			}
		}
	}
}

guess();
