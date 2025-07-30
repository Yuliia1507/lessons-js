
/*  Задача 4
З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).*/

//Крок 0. Позначення величин
//userAge - вік користувача


//Крок 1. Введення величин

const userAge = parseInt(prompt('Введіть свій вік'))

// Крок 2. Обчислення

if(userAge < 6)
	document.write(`Це дитина`)
else if (userAge <=17)
	document.write(`Це школяр`)
else if (userAge <= 23)
	document.write(`Це студент`)
else if (userAge <= 60)
	document.write(`Це працівник`)
else 
	document.write(`Це пенсіонер`)



