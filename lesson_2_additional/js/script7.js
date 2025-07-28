
/*     Задача 7
Скласти алгоритм, який обчислює цілу і дробову частину даного числа х. Наприклад: число 23,56  => ціла: 23, дробова: 0,56.
*/

// Вводимо дані
let numberX = parseFloat(prompt('Введіть число х', '0'))

// Обчислення результату

let integerPart = Math.trunc(numberX) // Ціла частина
let fractionalPart = numberX - integerPart // Дробова частина

// Виведення результату


document.write(`
	<p>
	Ціла частина числа ${numberX} = ${integerPart} 
</p>
	<p>
Дробова частина числа ${numberX} = ${fractionalPart.toFixed(2)}</p>

`)