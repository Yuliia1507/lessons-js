"use strict";
// 	Задача 3. Дано масив 30 випадкових цілих чисел.Підрахувати скільки було обмінів під час сортування
// включеннями.
function insertionSort() {
    const arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 1);
    let swapCount = 0;
    for (let k = 1; k < arr.length; k++) {
        let key = arr[k];
        let i = k - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]; // переміщення вправо
            swapCount++;
            i--;
        }
        arr[i + 1] = key;
    }
    console.log("Відсортований масив:", arr);
    return swapCount;
}
const insertionExchanges = insertionSort();
console.log(`Кількість обмінів: ${insertionExchanges}`);
