// 		Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою



// Створюємо масив з 30 випадкових цілих чисел від 1 до 30
function bubbleSort() {
	const arr: number[] = Array.from(
		{ length: 30 },
		() => Math.floor(Math.random() * 30) + 1
	)

	let swapCount = 0
	let swapped: boolean
	const n = arr.length

	do {
		swapped = false

		for (let j = 0; j < n - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp

				swapCount++
				swapped = true
			}
		}
	} while (swapped)

	console.log("Відсортований масив:", arr)
	console.log("Кількість обмінів:", swapCount)
}

bubbleSort()


