// Старался по максимуму скопировать поведение методов и рассмотреть все кейсы
// 1) функция вместо slice

const arrForSlice = [1, 2, 3, 4, 5];

function mySlice(arr, start, end) {
	if (arr === undefined || !Array.isArray(arr)) {
		return undefined; // если не передать массив или передать не массив
	}
	const notInitial = [...arr]; // чтобы случайно не изменить исходный массив
	if (typeof start !== 'number') {
		// возвращаем поверхностную копию исходного массива если не передать 2-ой аргумент
		return notInitial;
	} else if (typeof start === 'number' && end === undefined) {
		// если передать 2-ой аргумент, то возвращаем копию с данного индекса
		if (start < 0) {
			start = start * -1 - 1;
			return notInitial
				.reverse()
				.filter((el, ind) => {
					if (ind <= start) {
						return el;
					}
				})
				.reverse();
		} else {
			// если start 0 или положительный
			return notInitial.filter((el, ind) => {
				if (ind >= start) {
					return el;
				}
			});
		}
	} else if (typeof start === 'number' && typeof end === 'number') {
		if (start < 0 || end === 0) {
			return [];
		} else if (end > 0) {
			for (i = 0; i < start; i++) {
				notInitial.shift();
			}
			if (end > notInitial.length) {
				return notInitial; // новый массив если переданное end больше длины исходного массива
			} else if (end < notInitial.length) {
				for (i = 0; i < notInitial.length - end + 2; i++) {
					notInitial.pop();
				}
			}
			return notInitial;
		} else {
			// end меньшe 0
			for (i = 0; i < start; i++) {
				notInitial.shift();
			}
			for (i = 0; i < end * -1; i++) {
				notInitial.pop();
			}
			return notInitial;
		}
	}
}

// console.log(arrForSlice.slice(1, 3)); // сравнить с поведением оригинального метода
// console.log(mySlice(arrForSlice, 1, 3)); // мой метод
// console.log(arrForSlice); // проверить исходный массив

// 2) функция вместо IndexOf

const arrForInd = ['c', 'b', 'c', 'd', 'c'];

function myIndexOf(arr, item, from) {
	if (arr === undefined || !Array.isArray(arr)) {
		return undefined;
	}
	const notInitial = [...arr];
	if (typeof from !== 'number') {
		const result = [];
		notInitial.forEach((el, ind) => {
			el === item ? result.push(ind) : result;
		});
		if (result.length !== 0) {
			return result[0];
		} else {
			return -1;
		}
	} else {
		const result = [];
		notInitial.forEach((el, ind) => {
			el === item && ind >= from ? result.push(ind) : result;
		});
		if (result.length !== 0) {
			return result[0];
		} else {
			return -1;
		}
	}
}

// console.log(arrForInd.indexOf('c', 2));
// console.log(myIndexOf(arrForInd, 'c', 2));

// 2) функция вместо includes (тк до этого речь была о массивах, моя функция только для массивов)
const arrForIncl = ['cat', 'dog', 'bat'];

function myIncludes(arr, item, from) {
	if (arr === undefined || !Array.isArray(arr)) {
		return undefined;
	} else if (typeof from !== 'number') {
		for(i = 0; i < arr.length; i++){
            if(arr[i] === item){
                return true;
            }
        }
        return false;
	} else {
        for(i = from; i < arr.length; i++){
            if(arr[i] === item){
                return true;
            }
        }
        return false;
	}
}

console.log(arrForIncl.includes('cat', 1));
console.log(myIncludes(arrForIncl, 'cat', 1));
