// Есть два компьютера (первый загадывает / второй угадывает / диапазон 1-100 / бинарный поиск)

//Компьютер-1 загадывает

let counter = 0;
const arr = [50];
const arrToReduce = [25, 12, 7, 4, 3, 2, 1];

function randomNum(variant) {
	counter += 1;
	if (counter === 1) {
		return Math.ceil(Math.random() * (100 - 0) + 0);
	} else {
		if (variant > num) {
			console.log('Компьютер 2: Меньше.');
			return guess('less');
		} else if (variant < num) {
			console.log('Компьютер 2: Больше.');
			return guess('more');
		} else if (variant === num){
			console.log('Компьютер 2: Угадал!');
			return;
		}
	}
}

const num = randomNum();
console.log(`Первый компьютер загадал ${num}`);

// Компьютер-2 отгадывает num

function guess(answer) {
	if (counter === 1) {
		console.log(`Компьютер 1: Пробую число ${arr[0]}`);
		return randomNum(arr[0]);
	} else {
		for(i = 0; i < arrToReduce.length; i++){
			if (answer === 'more') {
				arr.unshift(arr[0] + arrToReduce[i + counter - 2]);
				console.log(`Компьютер 1: Пробую число ${arr[0]}`);
				return randomNum(arr[0]);
			} else if (answer === 'less'){
				arr.unshift(arr[0] - arrToReduce[i + counter - 2]);
				console.log(`Компьютер 1: Пробую число ${arr[0]}`);
				return randomNum(arr[0]);
			} 
				return;
		}
	}
}

guess();
