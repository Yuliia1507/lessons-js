// Задача 2. Дано масив 30 випадкових цілих чисел.Підрахувати скільки було обмінів під час сортування змішуванням.

function cocktailSort() {
	const arr: number[] = Array.from(
		{ length: 30 },
		() => Math.floor(Math.random() * 30) + 1
	);

	let swapCount = 0
	let left = 0
	let right = arr.length - 1
	let swapped : boolean = true

	while (swapped) {
		swapped = false

		// зліва направо
		for (let i = left; i < right; i++) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				swapCount++
				swapped = true
			}
		}
		right--

		if (!swapped) break

		swapped = false

		// справа наліво
		for (let i = right; i > left; i--) {
			if (arr[i] < arr[i - 1]) {
				const temp = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = temp
				swapCount++
				swapped = true
			}
		}
		left++;
	}
	console.log("Відсортований масив:", arr)

	return swapCount

}
const cocktailExchanges = cocktailSort()

console.log(`Кількість обмінів: ${cocktailExchanges}`)
