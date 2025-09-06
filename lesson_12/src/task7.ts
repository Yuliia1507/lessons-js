// 	Задача 7. Сформувати двовимірний масив(4 * 8) з номерами днів(описати окремий тип для днів).
// Заповнити його випадковим чином.Підрахувати для кожного рядка кількість неділь.

// Створюємо тип для днів тижня.
type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

//масив днів тижня, де кожен елемент належить типу WeekDay
const weekDays: WeekDay[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

//  Функція для отримання випадкового дня
function getRandomDay(): WeekDay {
	const randomIndex = Math.floor(Math.random() * weekDays.length)
	return weekDays[randomIndex]
}

//Створюємо двовимірний масив, спочатку порожній

const arrDays: WeekDay[][] = []

// заповнюємо випадковими днями
for (let i = 0; i < 4; i++) {
	const row: WeekDay[] = [];
	for (let j = 0; j < 8; j++) {
		row.push(getRandomDay()) // додаємо випадковий день
	}
	arrDays.push(row) // додаємо рядок у двовимірний масив
}

console.log(arrDays)

// рахуємо кількість неділь у кожному рядку
arrDays.forEach((row, i) => {
	const sundaysCount = row.filter(day => day === "Sunday").length
	console.log(`Кількість неділь у рядку ${i + 1}: ${sundaysCount}`)
})
