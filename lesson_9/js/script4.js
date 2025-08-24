// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100



if (confirm('Почати тестування?')) {

	const elementsList = [20, 200, 50, 500, 150, 300]

	for (const element of elementsList) {
		if (element > 100) {
			document.write(`${element}<br>`)
		}
	}
}
