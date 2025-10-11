// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
const startTime = Date.now()

setInterval(() => {
	const now = Date.now()
	const minutes = Math.floor((now - startTime) / 1000 / 60)
	console.log(`Ви на сайті вже ${minutes} хвилин`)
}, 60000)


// Задача 2. Вводимо час початку процедури(процедура триває 30хв).Визначити, чи процедура ще триває.
function isProcedureActive(startHour, startMinute) {
	const startTime = new Date()
	startTime.setHours(startHour, startMinute, 0, 0)

	const endTime = new Date(startTime.getTime() + 30 * 60 * 1000)
	const now = new Date()

	if (now < startTime) return "Процедура ще не почалась"
	if (now > endTime) return "Процедура вже завершилась"
	return "Процедура триває"
}
console.log(isProcedureActive(13, 20))

// Задача 3. Визначити скільки залишилось до кінця робочого дня(до 17.00)
const currentTime = new Date()
const endOfWork = new Date()
endOfWork.setHours(17, 0, 0, 0)

const diffMs = endOfWork - currentTime
const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

console.log(`До кінця робочого дня залишилось ${diffHours} год ${diffMinutes} хв`)

// Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня(від понеділка 0 год, 0хв, до неділі 23год.59хв)
function isInCurrentWeek(dateStr) {
	const date = new Date(dateStr)
	const now = new Date()

	const firstDay = new Date(now)
	const day = now.getDay() === 0 ? 7 : now.getDay() 
	firstDay.setDate(now.getDate() - day + 1)
	firstDay.setHours(0, 0, 0, 0)

	const lastDay = new Date(firstDay)
	lastDay.setDate(firstDay.getDate() + 6)
	lastDay.setHours(23, 59, 59, 999)

	return date >= firstDay && date <= lastDay
}

console.log(isInCurrentWeek("2025-10-12"))

// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те, скільки хвилин залишилось до початку робочого дня(початок о 8.00).
const now = new Date()
const startWork = new Date()
startWork.setHours(8, 0, 0, 0)

if (now < startWork) {
	const diff = (startWork - now) / 60000
	console.log(`До початку робочого дня залишилось ${Math.floor(diff)} хвилин`)
} else {
	console.log("Доброго ранку! Гарного робочого дня ! ")
}

// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

function showTime(city, timeZone) {
	const now = new Date()
	console.log(`${city}: ${now.toLocaleTimeString('en-US', { timeZone })}`)
}

showTime('Лондон', 'Europe/London')
showTime('Париж', 'Europe/Paris')
showTime('Сідней', 'Australia/Sydney')



//Задача 7. Дано список студентів(ім’я і дата народження: у формі тексту(день.місяць.рік).Знайти найстаршого студента
const students = [
	{ name: "Оля", birth: "12.03.2000" },
	{ name: "Іра", birth: "15.05.1998" },
	{ name: "Максим", birth: "20.07.2001" },
]

function getOldest(students) {
	return students.reduce((oldest, current) => {
		const dateOld = new Date(...oldest.birth.split(".").reverse())
		const dateCur = new Date(...current.birth.split(".").reverse())
		return dateCur < dateOld ? current : oldest
	})
}

console.log(getOldest(students))

// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
const start = Date.now()

function onMouseMove() {
	const diffSec = Math.floor((Date.now() - start) / 1000)
	console.log(`Ви поворушили мишкою через ${diffSec} секунд`)
	window.removeEventListener("mousemove", onMouseMove)
}

window.addEventListener("mousemove", onMouseMove)

// Задача 9. Користувачка планувала оформила дектретну відпустку на 200 днів(дата початку відпустки вводиться).Визначити чи відпустка вже триває і чи не закінчилась.
function checkVacation(startDateStr) {
	const start = new Date(startDateStr)
	const end = new Date(start.getTime() + 200 * 24 * 60 * 60 * 1000)
	const now = new Date()

	if (now < start) return "Відпустка ще не почалась"
	if (now > end) return "Відпустка вже завершилась"
	return "Відпустка триває"
}

console.log(checkVacation("2025-04-01"))

// Задача 10 .Дано дата виробництва йогурта(вводимо рік, місяць, день) та кількість днів придатності.Визначити чи є він придатним на даний момент.
function isYogurtFresh(year, month, day, daysValid) {
	const production = new Date(year, month - 1, day)
	const expiry = new Date(production.getTime() + daysValid * 24 * 60 * 60 * 1000)
	const now = new Date()

	return now <= expiry ? "Придатний" : "Прострочений"
}

console.log(isYogurtFresh(2025, 9, 25, 15))

// Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою івставкою.
function bubbleSort(arr) {
	const copy = [...arr]
	for (let i = 0; i < copy.length - 1; i++) {
		for (let j = 0; j < copy.length - i - 1; j++) {
			if (copy[j] > copy[j + 1]) [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]]
		}
	}
	return copy
}

function insertionSort(arr) {
	const copy = [...arr]
	for (let i = 1; i < copy.length; i++) {
		let key = copy[i]
		let j = i - 1
		while (j >= 0 && copy[j] > key) {
			copy[j + 1] = copy[j]
			j--
		}
		copy[j + 1] = key
	}
	return copy
}

const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 800 + 1))

console.time("Bubble")
bubbleSort(arr)
console.timeEnd("Bubble")

console.time("Insertion")
insertionSort(arr)
console.timeEnd("Insertion")
