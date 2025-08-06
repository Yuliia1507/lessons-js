
/* Задача 3
Вивести таблицю з одним рядком і  7 стовпцями.

*/

//Крок 0. Позначення величин
//tableColumn - стовпчик

//Крок 1. Введення величин



// Крок 2. Обчислення

if (confirm('Почати тестування?')) {

	document.write('<table><tr>')

	for (let tableColumn = 1; tableColumn <= 7; tableColumn++) {
		document.write(`<td>${tableColumn}</td>`)
	}
	document.write('</tr></table>')
} 
