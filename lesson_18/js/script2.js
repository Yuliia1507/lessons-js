// Задача 2. Зробити конвертер валют(курси валют – константи у скрипті)


window.onload = function () {
	document.querySelector('#convert').onclick = getConvert
}

function convert(sumUAH, rate) {
	return (sumUAH / rate).toFixed(2)
}

function getConvert() {
	const courseUSD = 42
	const courseEUR = 49
	const sumUAH = parseFloat(document.getElementById('sumUAH').value)

	document.getElementById('sumUSD').value = convert(sumUAH, courseUSD)
	document.getElementById('sumEUR').value = convert(sumUAH, courseEUR)
}