
/* Задача 5
Визначити, яку платню одержить на фірмі сумісник за виконану роботу, якщо йому нараховано S грн., а податок становить 20%. */


// Ведення даних

let salary = parseFloat(prompt('Нараховано'),'')

// Обчислення

const percent = 20

let vatFromSalary = salary * (20 / 100)

let receivedSalary = salary - vatFromSalary
//Виведення 
document.write(`
Сумісник отримає платню у розмірі ${receivedSalary} грн
`)