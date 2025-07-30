
/*     Задача 1
З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
*/

//Крок 0. Позначення величин
// firstChildName - ім'я першої дитини
// secondChildName - ім'я другої дитини
// firstChildCandiesNumber - кількість цукерок в першої дитини
// secondChildCandiesNumber - кількість цукерок в другої дитини


//Крок 1. Введення величин
let firstChildName = prompt('Ім`я першої дитини', 'Марійка')

let firstChildCandiesNumber = parseInt(prompt('Кількість цукерок в першої дитини'))

let secondChildName = prompt('Ім`я другої дитини', 'Назар')

let secondChildCandiesNumber = parseInt(prompt('Кількість цукерок в другої дитини'))


// Крок 2. Обчислення
if (firstChildCandiesNumber > secondChildCandiesNumber)
	document.write(`${firstChildName} має більше цукерок.`)
else if (firstChildCandiesNumber === secondChildCandiesNumber)
	document.write(`У дітей однакова кількість цукерок.`)
else
	document.write(`${secondChildName} має більше цукерок.`)
