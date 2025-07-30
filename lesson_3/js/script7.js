
/*     Задача 7
З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься*/

//Крок 0. Позначення величин

//monthNumber - номер місяця

//Крок 1. Введення величин

const monthNumber = parseInt(prompt('Ведіть номер місяця', '1'))

// Крок 2. Обчислення

if(monthNumber === 12 || monthNumber === 1 || monthNumber === 2)
	document.write(`Пора року - зима.`)

else if( monthNumber === 3 || monthNumber === 4 || monthNumber === 5)
	document.write(`Пора року - весна.`)

else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8)
	document.write(`Пора року - літо.`)

else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11)
	document.write(`Пора року - осінь.`)

else document.write(`Невірний номер місяця. Введіть номер від 1 до 12.`)


