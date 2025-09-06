//		Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє
// вказуючи координати.Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm('Почати гру Морський бій?')) {
	// Створюємо ігрове поле 6x6
	let field = Array.from({ length: 6 }, () => Array(6).fill(0))

	// Випадково розташовуємо 5 кораблів
	let shipsRemaining = 5
	while (shipsRemaining > 0) {
		let row = Math.floor(Math.random() * 6)
		let col = Math.floor(Math.random() * 6)
		if (field[row][col] === 0) {
			field[row][col] = 1
			shipsRemaining--
		}
	}

	let shotsLeft = parseInt(prompt('Введіть кількість пострілів', 5))

	for (let i = 0; i < shotsLeft; i++) {
		let shotRow = parseInt(prompt('Введіть координату рядка (0-5)'))
		let shotCol = parseInt(prompt('Введіть координату стовпця (0-5)'))

		if (field[shotRow][shotCol] === 1) {
			field[shotRow][shotCol] = -1 // позначаємо потоплений корабель
			shipsRemaining--
			alert(`Влучання! Залишилось ${shipsRemaining} кораблів`)
			if (shipsRemaining === 0) {
				alert('Вітаю! Ви потопили всі кораблі!')
				break;
			}
		} else {
			alert('Промах!')
		}
	}

	if (shipsRemaining > 0) {
		alert('Гру закінчено! Не всі кораблі були потоплені')
	}
}
