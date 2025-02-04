// Аналог метода фильтр

const arrToFilter = [1, 2, 3, 4, 5];

function myFilter(arr, callback) {
	const newArr = [];
	for (i = 0; i < arr.length; i++) {
        callback(arr[i]) ? newArr.push(arr[i]) : newArr;
	}
	return newArr;
}

function cbf(el) {
    return el > 3;
}

console.log(arrToFilter);
console.log(myFilter(arrToFilter, cbf));
