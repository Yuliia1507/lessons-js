/* З клавіатури вводиться кількість місяців, які пройшли від деякого моменту
часу. Вивести повну кількість років і місяців.
Наприклад, дано 28 місяців, а вивести 2 роки і 4 місяці.*/

//

let monthsNumber = parseInt(prompt('Кількість місяців', '0'))


//

let fullYears = Math.floor(monthsNumber / 12)

let remainingMonths = monthsNumber % 12;

//

document.write(`${fullYears} роки (років) і ${remainingMonths} місяців`);
