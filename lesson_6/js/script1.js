
/*  Задача 1
З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його. 
*/

//password
//userPassword



if (confirm('Почати тестування?')) {
	const password = 78
	let userPassword
	do {
		userPassword = parseInt(prompt('Введіть пароль'))
		if (userPassword !== password)
			alert('Спобуйте ще раз !')

	} while (userPassword !== password)

	document.write(`Вірно ! Правильний пароль - ${password}`)
}

