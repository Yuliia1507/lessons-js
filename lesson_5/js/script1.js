
/*     Задача 1
 Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.
*/
// userRandomNumber - Кількість випадкових чисел, що вводиться користувачем.
// randomNumber - випадкове число (1-100)

if (confirm('Почати тестування?')) {
	let userRandomNumber = parseInt(prompt('Введіть кількість випадкових чисел'))

		document.write('<ul>')
		for (let i = 1; i <= userRandomNumber; i++) {
			let randomNumber = Math.floor(Math.random() * 100) + 1
			document.write(`<li>${randomNumber}</li>`)
		}
		document.write('</ul>')
	} 



