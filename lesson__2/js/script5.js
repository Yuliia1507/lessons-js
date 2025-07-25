
/* Задача 5
Дано кількість секунд, що пройшла від початку доби. Визначити скільки це
						годин і хвилин. */


// Ведення даних

let seconds = parseInt(prompt('Кількість секунд'))

// Обчислення

let minutes = seconds / 60

let hours = minutes/ 60

//Виведення 
document.write(`
<p>${seconds}сек = ${minutes.toFixed(2)}хв</p>
<p>${seconds}сек = ${hours.toFixed(5)}год</p>
`)