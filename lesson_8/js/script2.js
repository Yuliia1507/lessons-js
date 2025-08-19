// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.



if (confirm('Почати тестування?')) {

	let visitors = [12, 25, 18, 30, 22, 15, 10]

	// 1. Номери днів, коли відвідувачів менше 20
	function getDaysWithLess20Visitors(visitors) {
		let days = []
		for (let i = 0; i < visitors.length; i++) {
			if (visitors[i] < 20) {
				days.push(i + 1)
			}
		}
		return days
	}

	// 2. Мінімальна кількість відвідувачів
	function getMinVisitors(visitors) {
		let min = visitors[0]
		for (let i = 1; i < visitors.length; i++) {
			if (visitors[i] < min) {
				min = visitors[i]
			}
		}
		return min
	}

	// 3. Максимальна кількість відвідувачів
	function getMaxVisitors(visitors) {
		let max = visitors[0]
		for (let i = 1; i < visitors.length; i++) {
			if (visitors[i] > max) {
				max = visitors[i]
			}
		}
		return max
	}

	// 4. Дні з мінімальною кількістю відвідувачів
	function getDaysWithVisitors(visitors, value) {
		let days = []
		for (let i = 0; i < visitors.length; i++) {
			if (visitors[i] === value) {
				days.push(i + 1)
			}
		}
		return days
	}

	// 5. Загальна кількість клієнтів у робочі дні (пн-пт)
	function getWorkdaysTotal(visitors) {
		let workdaysTotal = 0
		for (let i = 0; i < 5; i++) {
			workdaysTotal += visitors[i]
		}
		return workdaysTotal
	}

	// 6. Загальна кількість клієнтів на вихідних (сб-нд)
	function getWeekendTotal(visitors) {
		let weekendTotal = 0
		for (let i = 5; i < visitors.length; i++) {
			weekendTotal += visitors[i]
		}
		return weekendTotal
	}

	// Виклик функцій
	let lessThan20Visitors = getDaysWithLess20Visitors(visitors)
	let minVisitors = getMinVisitors(visitors)
	let maxVisitors = getMaxVisitors(visitors)
	let daysWithMinVisitors = getDaysWithVisitors(visitors, minVisitors)
	let daysWithMaxVisitors = getDaysWithVisitors(visitors, maxVisitors)
	let workdaysTotal = getWorkdaysTotal(visitors)
	let weekendTotal = getWeekendTotal(visitors)

	
	// Вивід результату
	document.write(`<p>Відвідувачі протягом тижня: ${visitors}</p>
		<p>Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${lessThan20Visitors}</p>
		<p>Номери днів, коли кількість відвідувачів була мінімальною: ${daysWithMinVisitors}</p>
		<p>Номери днів, коли кількість відвідувачів була максимальною: ${daysWithMaxVisitors}</p>
		<p>Загальна кількість клієнтів у робочі дні: ${workdaysTotal}, на вихідних: ${weekendTotal}</p>
	`)
}
