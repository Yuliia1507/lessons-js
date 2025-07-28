
/*Визначити скільки повних тижнів є у вказаній кількості днів.
 */

//Введення даних

let daysNumber = parseInt(prompt('Кількість днів'))

//Обчислення результату

let fullWeeks = Math.floor(daysNumber / 7)

//Виведення даних

document.write(`Повних тижнів ${fullWeeks}`)