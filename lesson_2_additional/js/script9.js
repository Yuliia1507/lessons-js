/* Задача 9
Скласти програму для розв’язування задачі: йде N-а секунда доби, визначити
скільки повних годин і повних хвилин пройшло
до цього моменту. */

// Вводимо дані

let secondsNumber = parseInt(prompt('Введіть кількість секунд', '0'))

let fullHours = Math.floor(secondsNumber / 3600)              // повні години
let fullMinutes = Math.floor((secondsNumber % 3600) / 60)     // повні хвилини після годин

// Виведення результату
document.write(`Пройшло повних годин: ${fullHours} <br>`)
document.write(`Пройшло повних хвилин: ${fullMinutes}`)