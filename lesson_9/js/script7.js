//7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.


const pricesList = [500, 7000, 300, 1500, 200]

const discountedPrices = pricesList.map(price => price > 1000 ? price * 0.7 : price)
document.write(`<p>Ціни: ${pricesList}</p>
	<p>Зі знижкою: ${discountedPrices}</p>`)
