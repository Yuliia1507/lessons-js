// Задача 1. Дано масив, який містить оцінки з К предметів.Знайти середній бал і з’ясувати до якої категорії він відноситься(відмінник, двійочник(має хоча би одну двійку), хорошист(оцінки добре і відмінно),
// 	трійочник(є хоча би	одна трійка)).

if (confirm('Почати тестування?')) {

	let subjectsNum = parseInt(prompt('Введіть кількість предметів'))

	let marks = []
	for (let i = 0; i < subjectsNum; i++) {
		let mark = parseInt(prompt(`Введіть оцінку за предмет ${i + 1} (1-5)`))
		marks.push(mark)
	}

	// Функція для обчислення середнього балу
	function calculateAverage(marksArray) {
		let sum = 0
		for (let i = 0; i < marksArray.length; i++) {
			sum += marksArray[i]
		}
		return sum / marksArray.length
	}

	// Функція для визначення категорії
	function determineCategory(marksArray) {
		let minMark = marksArray[0];
		for (let i = 1; i < marksArray.length; i++) {
			if (marksArray[i] < minMark) {
				minMark = marksArray[i]
			}
		}

		if (minMark <= 2) return 'Двійочник'
		if (minMark === 3) return 'Трійочник'
		if (minMark === 4) return 'Хорошист'
		if (minMark === 5) return 'Відмінник'
	}


	let averageScore = calculateAverage(marks)
	let category = determineCategory(marks)

	document.write(`<p>Оцінки: ${marks} </p>
        <p>Середній бал: ${averageScore.toFixed(1)}</p>
        <p>Категорія: ${category}</p>`)
}
