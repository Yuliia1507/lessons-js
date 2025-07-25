
/*     Задача 7
Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).*/

// Вводимо дані
let randomMonth = Math.floor(Math.random() * 12) + 1
let randomDay = Math.floor(Math.random() * 7);

// Обчислення результату

let sum = randomMonth + randomDay;


// Виведення результату


document.write(`
	<p>
		Випадковий номер місяця  = ${randomMonth}
	
</p>
	<p>
		Випадковий номер дня  = ${randomDay}
</p>
<p>
	Сума випадкового номера місяця та випадкового номера дня = ${sum}
</p>
`)