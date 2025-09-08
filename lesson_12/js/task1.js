"use strict";
// Задача 1. Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів під час сортування бульбашкою
function bubbleSort() {
    const arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 1);
    let swapCount = 0;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                const tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
                swapCount++;
                swapped = true;
            }
        }
    } while (swapped);
    console.log("Відсортований масив:", arr);
    return swapCount;
}
const bubbleExchanges = bubbleSort();
console.log(`Кількість обмінів: ${bubbleExchanges}`);
