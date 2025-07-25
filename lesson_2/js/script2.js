
// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

//Введення даних

const currentYear = 2025
let birthYear = parseInt(prompt('Year of Birth'))

// Обчислення результату

let age = currentYear - birthYear

//Виведення даних

document.write(`
Ваш вік = ${age}
`)