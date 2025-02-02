// 1) Получили объект, вернули сумму всех числовых полей

const someData = {
	notNum: 'Vasya',
	one: 1,
	four: 4,
	two: 2,
    three: 3,
    five: 5,
};

function returnSum(obj) {
	let counter = 0;
	for (let key in obj) {
		typeof obj[key] === 'number' ? (counter += obj[key]) : counter;
	}
	return counter;
}

console.log(returnSum(someData));

// 2) (*) // Перебрали объект - ключ-значения в массив - массив сортируем - перебираем массив - в нем перебираем объект и сравниваем по соответствию

function returnArr(obj) {
	const arr = [];
	for (let key in obj) {
		typeof obj[key] === 'number' ? arr.push(obj[key]) : arr;
	}
	return arr.sort((a, b) => b - a).map(el => {
        for (let key in obj) {
            if(obj[key] === el){
                return key;
            }
        }
    })
}

console.log(returnArr(someData));
