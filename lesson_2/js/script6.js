
/* Задача 6
З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та
загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки. */


// Введення даних

let snikersPrice = parseFloat(prompt('Вартість Сніекрса', '0'))

let snikersNumber = parseInt(prompt('Кількість Снікерсів ', '0'))


let breadPrice = parseFloat(prompt('Вартість Хліба', '0'))

let breadNumber = parseInt(prompt('Кількість Хлібин ', '0'))

let chipsPrice = parseFloat(prompt('Вартість Чіпсів', '0'))

let chipsNumber = parseInt(prompt('Кількість Чіпсів ', '0'))

// Обчислення

let snikersTotalPrice = snikersPrice * snikersNumber

let breadTotalPrice = breadNumber * breadPrice

let chipsTotalPrice = chipsPrice * chipsNumber

let totalProductPrice = snikersTotalPrice + breadTotalPrice + chipsTotalPrice

//Виведення 
document.write(`
<div class="result">
	<p >Snikers x ${snikersNumber} = ${snikersTotalPrice}UAH</p>
	<p >Bread x ${breadNumber} = ${breadTotalPrice}UAH</p>
	<p >Chips x ${chipsNumber} = ${chipsTotalPrice}UAH</p>
	<p >Total Price  ${totalProductPrice.toFixed(2)}UAH</p>
</div>

`)