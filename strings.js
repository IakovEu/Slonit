// 1) поднять первый символ строки

const changeStr = 'hello';

function UpFirstLetter(str) {
	return str[0].toUpperCase() + str.slice(1);
}

// console.log(UpFirstLetter(changeStr));

// 2) Обрезаем строку больше 40 символов (40 включительно) / обрезаем по пробелу или (,.!?:;) / на конце + ...

const strToCut = 'cut me Cut me Cut me,;;;; cut me! cutMecutcutcut';

function cutStr(str) {
	if (str.length <= 40) {
		return str;
	} else {
		if (
			str[40] === ' ' ||
			str[40] === ',' ||
			str[40] === '.' ||
			str[40] === '!' ||
			str[40] === '?' ||
			str[40] === ':' ||
			str[40] === ';'
		) {
			return str.slice(0, 40) + '...'; // когда 41 символ = символам по которым обрезаем
		} else {
			const noSpace = str.slice(0, 40).lastIndexOf(' '); // после запятых и тд. всегда идет пробел, значит находим первый
			const result = str.slice(0, noSpace);
			if (
				result.at(-1) === ',' ||
				result.at(-1) === '.' ||
				result.at(-1) === '!' ||
				result.at(-1) === '?' ||
				result.at(-1) === ':' ||
				result.at(-1) === ';'
			) {
				return result.slice(0, -1) + '...';
			}
			return result + '...';
		}
	}
}

// console.log(cutStr(strToCut));

// 3) проверка на подстроку

const str1 = 'abcdefg higklmnop';
const str2 = 'hiig';

function checkSubStr (str, sub){
    return str.includes(sub)
}

// console.log(checkSubStr(str1, str2));
