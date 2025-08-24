// 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm('Почати тестування?')) {

	const elementsNumber = parseInt(prompt('Введіть кількість елементів'))

	const arr = Array(elementsNumber).fill(0)

	document.write(`<p>Кількість елементів: ${elementsNumber}</p>
		<p>${arr}</p>`)

}
