// Задача 3. Дано масив імен учнів.З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування?')) {

	let pupilsNames = ['Іван', 'Сергій', 'Микола', 'Анна', 'Іван', 'Катерина', 'Іван', 'Микола', 'Анна', 'Іван']

	function countNameIvan(names) {
		let count = 0;
		for (let i = 0; i < names.length; i++) {
			if (names[i] === 'Іван') {
				count++
			}
		}
		return count
	}

	let nameIvan = countNameIvan(pupilsNames)

	document.write(`<p>Імена: ${pupilsNames}</p><p>Учнів з іменем Іван: ${nameIvan}</p>`)
}


