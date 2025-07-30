
/* Задача 6
З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
 */


//Крок 0. Позначення величин
//dayOfWeekNumber - номер дня тижня

//Крок 1. Введення величин

let dayOfWeekNumber = parseInt(prompt('Enter the number of the day of the week', '1'))

let dayName

// Крок 2. Обчислення

switch (dayOfWeekNumber) {
	case 1: dayName = "It's Monday"
		break;
	case 2: dayName = "It's Tuesday"
		break;
	case 3: dayName = "It's Wednesday"
		break;
	case 4: dayName = "It's Thursday"
		break;
	case 5: dayName = "It's Friday"
		break;
	case 6: dayName = "It's Saturday"
		break;
	case 7: dayName = "It's Sunday"
		break;
	default: dayName = "Invalid day number"
		break;
}

document.write(dayName)