
/* Дано поточну кількість годин, хвилин, секунд (як на годиннику). Визначити 1) яка кількість секунд буде на годиннику через
N секунд.
2) яка кількість хвилин буде на годиннику через N секунд, X хвилин.*/

//Введення даних

let hours = parseInt(prompt('Кількість годин'),'0')

let minutes = parseInt(prompt('Кількість хвилин','0'))

let seconds = parseInt(prompt('Кількість секунд', '0'))

let secondsAdd = parseInt(prompt('Скільки секунд пройшло', '0'))



//Обчислення результату
let totalSeconds = hours * 3600 + minutes * 60 + seconds;

totalSeconds += secondsAdd;

let newHours = Math.floor((totalSeconds / 3600) % 24)

let newMinutes = Math.floor((totalSeconds % 3600) / 60)

let newSeconds = totalSeconds % 60

//Виведення даних

document.write(`Через ${secondsAdd} секунд буде ${newSeconds} секунд на годиннику`)
