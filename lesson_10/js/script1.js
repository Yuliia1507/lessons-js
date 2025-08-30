
// 15 випадкових цін від 1 до 10000
const pricesList = Array.from(
	{ length: 15 },
	() => 1 + Math.floor(Math.random() * 10000)
)

document.write(`
	<p>Масив цін: ${pricesList}</p>
	`)

// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

const pricesOver1000 = pricesList.filter(price => price > 1000)

document.write(`
	<p>Новий масив, у якому є тільки ті, що більші за 1000 грн: ${pricesOver1000}</p>
	`)


// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

const indexesList = pricesList
	.map((price, index) => price > 1000 ? index : -1)
	.filter(index => index !== -1)
document.write(`
	<p>Масив, у якому є номери тільки тих, що більші за 1000 грн : ${indexesList}</p>
	`)

// 3)Сформувати список з тих цін, які більші за попереднє значення

const pricesHigherThanPrevious = pricesList.filter((price, index, arr) => index > 0 && price > arr[index - 1])

document.write(`
	<p> Список з тих цін, які більші за попереднє значення: ${pricesHigherThanPrevious}</p>
	`)

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

// 1. Знайдемо максимальне значення
const maxPrice = Math.max(...pricesList)

// 2. Перетворимо всі елементи у відсотки від max 
const pricesInPercent = pricesList.map(price => ((price / maxPrice) * 100));

document.write(`
  <p>Масив, що містить значення цін у відсотках стосовно максимального: ${pricesInPercent}</p>
`)

// 5)Підрахувати кількість змін цін
const pricesChange = pricesList.reduce(
	(prevCount, el, index, arr) =>
		index > 0 && el !== arr[index - 1] ? prevCount + 1 : prevCount,
	0
)
document.write(`кількість змін цін: ${pricesChange}`)

// 6) Визначити, чи є ціна, що менше 1000

const priceLess1000 = pricesList.some(price => price < 1000)
document.write(`
  <p>чи є ціна, що менше 1000: ${priceLess1000}</p>
`)
// 7) Визначати, чи усі ціни більше за 1000
const pricesMoreThan1000 = pricesList.every(price => price > 1000)
document.write(`
  <p>чи усі ціни більше за 1000: ${pricesMoreThan1000}</p>
`)
// 8)Підрахувати кількість цін, що більше за 1000
const countOver1000 = pricesList.reduce((prevNum, el) => prevNum + (el > 1000 ? 1 : 0), 0)
// 9)Підрахувати суму цін, що більше за 1000
const pricesSum = pricesList.reduce((prevSum, el) => el > 1000 ? prevSum + el : prevSum, 0)

// 10)Знайти першу ціну, що більше за 1000
const firstPriceOver1000 = pricesList.find(el => el > 1000)

document.write(`
  <p>Перша ціна, що більше за 1000: ${firstPriceOver1000}</p>
`)

// 11)Знайти індекс першої ціни, що більше за 1000
const priceIndex = pricesList.findIndex(el => el > 1000)
document.write(`
  <p>індекс першої ціни, що більше за 1000: ${priceIndex}</p>
`)
// 12)Знайти останню ціну, що більше за 1000
const lastPriceOver1000 = [...pricesList].reverse().find(el => el > 1000)

document.write(`
  <p>Остання ціна, що більше за 1000: ${lastPriceOver1000}</p>
`);

// 13)Знайти індекс останньої ціни, що більше за 1000
const lastPriceIndex = pricesList.findLastIndex(el => el > 1000)
document.write(`
  <p>індекс останньої ціни, що більше за 1000: ${lastPriceIndex}</p>
`)