// Дано масив імен.Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

const namesArr: string[] = ["Ivan", "Olga", "Maria", "Olexandr", "Dmytro"]

console.log("Початковий масив:", namesArr.join(', '))

// Сортуємо масив для бінарного пошуку (за довжиною імен)
const sortedNamesArr = [...namesArr].sort((a, b) => a.length - b.length);
console.log("Відсортований масив за довжиною:", sortedNamesArr.join(', '));

// Функція бінарного пошуку по довжині
function binarySearchByLength(arr: string[], targetLength: number): number {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);

		if (arr[mid].length === targetLength) {
			return mid; // знайдено
		} else if (arr[mid].length < targetLength) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1; // не знайдено
}

const targetLength : number = 5
const indexOfName = binarySearchByLength(sortedNamesArr, targetLength)

if (indexOfName !== -1) {
	console.log(`Ім’я довжиною ${targetLength} символів знайдено: "${sortedNamesArr[indexOfName]}" під індексом ${indexOfName} у відсортованому масиві.`)
} else {
	console.log(`Ім’я довжиною ${targetLength} символів не знайдено.`)
}
