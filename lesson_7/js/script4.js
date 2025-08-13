
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість
// додатних, кількість більших за 100.



if (confirm('Почати тестування?')) {

	function getEvenNumbers(num1, num2, num3) {
		let evenNumbers = 0
		if (num1 % 2 === 0)
			evenNumbers++
		if (num2 % 2 === 0)
			evenNumbers++
		if (num3 % 2 === 0)
			evenNumbers++

		return evenNumbers
	}

	function getPositiveNumbers(num1, num2, num3) {
		let positiveNumbers = 0
		if (num1 > 0)
			positiveNumbers++
		if (num2 > 0)
			positiveNumbers++
		if (num3 > 0)
			positiveNumbers++

		return positiveNumbers
	}

	function getNumbersOver100(num1, num2, num3) {
		let over100Numbers = 0
		if (num1 > 100)
			over100Numbers++
		if (num2 > 100)
			over100Numbers++
		if (num3 > 100)
			over100Numbers++

		return over100Numbers
	}

	const number1 = parseInt(prompt(`num1 = `, ''))
	const number2 = parseInt(prompt(`num2 = `, ''))
	const number3 = parseInt(prompt(`num3 = `, ''))

	const evenNum = getEvenNumbers(number1, number2, number3)
	const positiveNum = getPositiveNumbers(number1, number2, number3)
	const over100Num = getNumbersOver100(number1, number2, number3)

	document.write(`
Кількість парних: ${evenNum}<br>
Кількість додатних: ${positiveNum}<br>
Кількість більших за 100: ${over100Num}
`)
}