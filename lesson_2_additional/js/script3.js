
/* Задача 3
З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів. Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.

*/

//Введення даних

let chocolatePrice = parseFloat(prompt('Вартість шоколадки', '0'))
let chocolateNumber = parseInt(prompt('Кількість шоколадок', '0'))

let juicePrice = parseFloat(prompt('Вартість соку', '0'))
let juiceNumber = parseInt(prompt('Кількість соку', '0'))
// Обчислення результату

let chocolateTotalPrice = chocolatePrice * chocolateNumber
let juiceTotalPrice = juicePrice * juiceNumber

let productTotalPrice = chocolateTotalPrice + juiceTotalPrice
//Виведення 
document.write(`
	<div class="result">
	<p>Chocolate ${chocolatePrice}UAH x ${chocolateNumber} = ${chocolateTotalPrice}UAH</p>
	<p>Juice ${juicePrice}UAH x ${juiceNumber} = ${juiceTotalPrice}UAH</p>
<p>Total Price = ${productTotalPrice}</p>
	</div>
`)

