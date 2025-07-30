
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

//Крок 0. Позначення величин

//productPrice - ціна товару
//usermoney - кількість грошей


//Крок 1. Введення величин

const productPrice = parseFloat(prompt('Product price', '0'))
const userMoney = parseFloat(prompt('User money', '0'))


// Крок 2. Обчислення

if (userMoney >= productPrice) {
	const remainingFunds = userMoney - productPrice;
	document.write(`Вітаю! Ви можете придбати цей товар.<br>`)

	if (remainingFunds >= 4) {
		document.write(`У вас залишилось ${remainingFunds.toFixed(2)} грн. Ви можете придбати лотерею.`)
	}
} else {
	document.write('На жаль, у вас недостатньо коштів для покупки товару.')
}