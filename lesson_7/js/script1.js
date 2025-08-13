
/*     Задача 1 Створити функцію, яка за номером місяця повертає його назву.
*/


if (confirm('Почати тестування?')) {

	function getMonthName(monthNumber) {
		switch (monthNumber) {
			case 12:
				return 'December'
			case 1:
				return 'January'
			case 2:
				return 'February'
			case 3:
				return 'March'
			case 4:
				return 'April'
			case 5:
				return 'May'
			case 6:
				return 'June'
			case 7:
				return 'July'
			case 8:
				return 'August'
			case 9:
				return 'September'
			case 10:
				return 'October'
			case 11:
				return 'November'

			default:
				return 'Invalid month number'
		}
	}
	const month = parseInt(prompt(`Month number = `, ''))
	document.write(getMonthName(month))
}


