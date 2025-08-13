// Створити окремі функції, які для 4 чисел знаходять:
// 1) суму;
// 2) добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

// getSum
//getProduct
//getAvarageValue
//getMinValue

if (confirm('Почати тестування?')) {
	function getSum(num1, num2, num3, num4) {
		return num1 + num2 + num3 + num4
	}

	function getProduct(num1, num2, num3, num4) {
		return num1 * num2 * num3 * num4
	}
	function getAvarageValue(num1, num2, num3, num4) {
		return (num1 + num2 + num3 + num4) / 4
	}

	function getMinValue(num1, num2, num3, num4) {
		let minValue = num1
		if (num2 < minValue)
			minValue = num2

		if (num3 < minValue)
			minValue = num3

		if (num4 < minValue)
			minValue = num4
		return minValue
	}

	const number1 = parseInt(prompt(`num1 = `, ''))
	const number2 = parseInt(prompt(`num2 = `, ''))
	const number3 = parseInt(prompt(`num3 = `, ''))
	const number4 = parseInt(prompt(`num4 = `, ''))

	const sum = getSum(number1, number2, number3, number4)
	const prod = getProduct(number1, number2, number3, number4)
	const avarageValue = getAvarageValue(number1, number2, number3, number4)
	const minNumber = getMinValue(number1, number2, number3, number4)


	document.write(`1) Sum : ${sum}<br>
		2) Product : ${prod}<br>
		3) Avarage value : ${avarageValue.toFixed(1)}<br>
		4) Min value : ${minNumber}<br>`)
}


