
// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.



if (confirm('Почати тестування?')) {

	function getDayOfWeek(dayNumber) {
		if (dayNumber >= 1 && dayNumber <= 5) {
			return "Це робочий день."
		} else if (dayNumber === 6 || dayNumber === 7) {
			return "Це вихідний день."
		} else {
			return "Невірний номер дня."
		}
	}
	const weekDay = parseInt(prompt("Day number"))
	document.write(getDayOfWeek(weekDay))
}

// function getDayOfWeek(dayNumber) {


// 	switch (dayNumber) {
// 		case 1:
// 		case 2:
// 		case 3:
// 		case 4:
// 		case 5:
// 			return "Це робочий день."

// 		case 6:
// 		case 7:
// 			return "Це вихідний день."

// 		default:
// 			return "Невірний номер дня."
// 	}
// }

// document.write(getDayOfWeek(1))