// Задача 1. Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних,
// кількість входжень деякого числа (статичні методи)

class ArrayCounter {

	// кількість додатних чисел у масиві
	static countPositive(arr: number[]): number {
		return arr.filter(num => num > 0).length;
	}

	// кількість від’ємних чисел у масиві
	static countNegative(arr: number[]): number {
		return arr.filter(num => num < 0).length;
	}

	// кількість входжень певного числа у масив
	static countNumber(arr: number[], value: number): number {
		return arr.filter(num => num === value).length;
	}
}

const arr: number[] = [1, -2, 3, 0, -5, 3, 3];

console.log(ArrayCounter.countPositive(arr)); 
console.log(ArrayCounter.countNegative(arr)); 
console.log(ArrayCounter.countNumber(arr, 3)); 
