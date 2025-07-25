
/* Задача 3
Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ
(5 % від загальної вартості).*/

//Введення даних

let productPrice = parseFloat(prompt('Вартість одиниці товару','0'))

let productQuantity = parseInt(prompt('Кількість товару','0'))

// Обчислення результату

const percent = 5 

let totalAmount = productPrice * productQuantity

let vatAmount = totalAmount * (percent / 100)

//Виведення 
document.write( `
<p>Загальна вартість = ${totalAmount}</p>
<p>ПДВ (5%) = ${vatAmount}</p>
`)

