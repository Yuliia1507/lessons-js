// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :




if (confirm('Почати тестування?')) {
	const profits = [
		[100, 1500, 1300, 1600, 1700, 100, 1900], // Магазин 1
		[800, 950, 1100, 1000, 1200, 1250, 1300],   // Магазин 2
		[2000, 100, 1900, 100, 2300, 2400, 2500]  // Магазин 3
	];

	// 1) загальний прибуток кожного масиву за тиждень;
	let shopIndex = 1


	for (const shop of profits) {

		let total = 0
		for (const day of shop) {
			total += day
		}
		document.write(`Загальний прибуток магазину ${shopIndex} за тиждень: ${total}<br>`)
		shopIndex++
	}


	// 2) загальний прибуток усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

	for (let i = 0; i < profits[0].length; i++) {
		let total = 0
		for (const shop of profits) {
			total += shop[i]
		}
		console.log(total)
	}
	// 3) загальний прибуток за робочі дні


	for (const shop of profits) {
		let total = 0;
		for (let i = 0; i < 5; i++) { // перші 5 днів
			total += shop[i];
		}
		console.log(total)
	}

	// 4) загальний прибуток за вихідні дні
	for (const shop of profits) {
		let total = 0
		for (let i = 5; i < 7; i++) {
			total += shop[i]
		}
		document.write(`${total} грн<br>`)
	}
	// 5) максимальний прибуток за середу
	let maxProfit = -Infinity

	for (const shop of profits) {
		if (shop[2] > maxProfit) {
			maxProfit = shop[2]
		}
	}

	document.write(`Максимальний прибуток за середу: ${maxProfit} грн <br>`)

	// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
	const arrValuesOver200 = profits.flat(Infinity).filter(value => value > 200)
	document.write(`масив зі значенням, які що більші за 200: ${arrValuesOver200}<br>`)

	// 7) відсортувати кожен тиждень за зростанням
	for (const shop of profits) {
		const sortedShop = [...shop].sort((a, b) => a - b)
		console.log(sortedShop)
	}
	// 8) відсортувати тижні(рядки) за спаданням максимального елементи у цьому тижні(рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
	profits.sort((a, b) => Math.max(...b) - Math.max(...a))

	for (const shop of profits) {
		console.log(shop)
	}
	// 9) упорядкувати тижні(рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

	profits.sort((a, b) => b.reduce((sum, val) => sum + val, 0) - a.reduce((sum, val) => sum + val, 0))

	for (const shop of profits) {
		console.log(shop)
	}

}






