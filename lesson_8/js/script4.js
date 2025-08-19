// Задача 4. Дано послідовність номерів автомобілів.Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;



if (confirm('Почати тестування?')) {

	let carNumbers = [
		'AA1234BB',
		'BC5678CD',
		'AA1234BB',
		'DE9012EF',
		'G56IJ',
		'BC5678CD',
		'K78K'
	]

// Функція для пошуку номерів, що починаються на літеру А
	function countStartsWithA(numbers) {
		let count = 0
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i][0].toUpperCase() === 'A') count++
		}
		return count
	}
	// Функція для пошуку номерів, де перша і остання літери співпадають

	function countSameFirstLast(numbers) {
		let count = 0
		for (let i = 0; i < numbers.length; i++) {
			let num = numbers[i]
			if (num[0].toUpperCase() === num[num.length - 1].toUpperCase()) count++
		}
		return count
	}
	// Функція для пошуку номерів,що складаються з більше ніш 5 символів
	function countLongerThan5(numbers) {
		let count = 0;
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i].length > 5) count++
		}
		return count
	}

	let startsWithA = countStartsWithA(carNumbers)
	let sameLetters = countSameFirstLast(carNumbers)
	let longerThan5 = countLongerThan5(carNumbers)

	document.write(`<div>Кількість номерів, які <br>
        починаються на букву «А»: ${startsWithA} <br>
        перша і остання літери співпадають: ${sameLetters} <br>
        складаються з більше ніж 5 символів: ${longerThan5}
		  <br>
		  
		  номери: ${carNumbers}</div>`)
}
