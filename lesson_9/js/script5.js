// Задача 5.5.Дано масив елементів. Знайти добуток додатних елементів


if (confirm('Почати тестування?')) {

	const elementsList = [2, 3, -4, 5, -7, 10, -15]
	let product = 1

	for (const element of elementsList) {
		if (element > 0) {
			product *= element
		}
	}

	document.write(`Добуток додатних елементів: ${product}`)
}