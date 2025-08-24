// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.



if (confirm('Почати тестування?')) {

	const elementsNumber = parseInt(prompt('Введіть кількість елементів'))

	const arr = Array(elementsNumber).fill(1, 0, Math.floor(elementsNumber / 2))
		.fill(7, Math.floor(elementsNumber / 2))

	document.write(`<p>Кількість елементів: ${elementsNumber}</p>
		<p>${arr}</p>`)
}


// if (confirm('Почати тестування?')) {

// 	const elementsNumber = parseInt(prompt('Введіть кількість елементів'))

// 	const arr = []

// 	for (let i = 0; i < elementsNumber; i++) {
// 		if (i < Math.floor(elementsNumber / 2)) {
// 			arr.push(1)
// 		} else {
// 			arr.push(7)
// 		}
// 	}

// 	document.write(`<p>Кількість елементів: ${elementsNumber}</p>
//        <p>${arr}</p>`)
// }
