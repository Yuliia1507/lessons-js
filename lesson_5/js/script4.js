
/* Задача 3
Вивести таблицю з 3 рядків і 7 стовпців

*/

//Крок 0. Позначення величин
//tableColumn - стовпчик таблиці
//tableRow -рядок таблиці

//Крок 1. Введення величин


// Крок 2. Обчислення

if (confirm('Почати тестування?')) {
	document.write('<table>')

	for (let tableRow = 1; tableRow <= 3; tableRow++) {
		document.write('<tr>') 

		for (let tableColumn = 1; tableColumn <= 7; tableColumn++) {
			document.write(`<td>${tableColumn}</td>`)
		}

		document.write('</tr>') 
	}

	document.write('</table>')
}
