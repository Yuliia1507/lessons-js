// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1) двійок
// 2)	кількість хороших оцінок(добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if (confirm('Почати тестування?')) {

	let marks = [5, 2, 5, 3, 2, 5, 4, 5, 5, 3, 4, 4, 5]

	// функція для підрахунку двійок
	function countTwos(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 2)
				count++
		}
		return count
	}

	// функція для підрахунку хороших оцінок (4 і 5)
	function countGoodMarks(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 4 || arr[i] === 5)
				count++
		}
		return count
	}

	// функція для обчислення середнього значення
	function getAverage(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum / arr.length
	}

	// функція для підрахунку оцінок нижче середнього
	function countLessAverage(arr, average) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < average)
				count++
		}
		return count
	}

	// Виклик 
	let average = getAverage(marks)
	let badMarks = countTwos(marks)
	let goodMarks = countGoodMarks(marks)
	let lowAverageMarks = countLessAverage(marks, average)

	document.write(`<p>оцінки : ${marks}</p>
		<p>кількість двійок : ${badMarks}</p>
		<p>кількість хороших оцінок : ${goodMarks}</p>
		<p>середній бал : ${average.toFixed(1)}, кількість оцінок нижче середнього : ${lowAverageMarks}</p>
	`)
}
