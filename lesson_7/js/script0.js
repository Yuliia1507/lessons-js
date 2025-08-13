//  Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

//monthNumber


if (confirm('Почати тестування?')) {
	function getSeason(monthNumber) {
		switch (monthNumber) {
			case 12:
			case 1:
			case 2:
				return "Зима"
			case 3:
			case 4:
			case 5:
				return "Весна"
			case 6:
			case 7:
			case 8:
				return "Літо"
			case 9:
			case 10:
			case 11:
				return "Осінь"
			default:
				return "Невірний номер місяця"
		}
	}
	const month = parseInt(prompt(`Month number = `, ''))

	document.write(getSeason(month))
}