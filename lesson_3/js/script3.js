
/* Задача 3
Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
*/

//Крок 0. Позначення величин
//randomNumber - випадкове число
// firstTry - перша спроба
//secondTry - друга спрба

//Крок 1. Введення величин
let randomNumber = Math.floor(Math.random() * 5) + 1;
let firstTry = parseInt(prompt('Спроба 1.Вгадайте число від 1 до 5','1'))
let secondTry = parseInt(prompt('Спроба 2. Вгадайте число від 1 до 5', '1'))

// Крок 2. Обчислення


if (firstTry === randomNumber) {
	document.write(`Спроба 1 : Ви вгадали! Загадане число було ${randomNumber}.<br>`)
} else {
	document.write(`Спроба 1 : Невірно, ви ввели ${firstTry}<br>`);

	if (secondTry === randomNumber) {
		document.write(`Спроба 2 : Ви вгадали! Загадане число було ${randomNumber}.<br>`)
	} else {
		document.write(`Спроба 2 : Невірно, ви ввели ${secondTry}<br>`);
		document.write(`На жаль, ви не вгадали. Загадане число було ${randomNumber}.<br>`)
	}
}
