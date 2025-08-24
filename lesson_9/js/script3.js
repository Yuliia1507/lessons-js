// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.




if (confirm('Почати тестування?')) {

	const elementsNumber = parseInt(prompt('Введіть кількість елементів'))

	const arr = Array(elementsNumber).fill(1, 0, 5)
		.fill(7, 5)

	document.write(`<p>Кількість елементів: ${elementsNumber}</p>
		<p>${arr}</p>`)
}




