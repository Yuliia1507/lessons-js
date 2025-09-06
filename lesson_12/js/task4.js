"use strict";
// 	Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць зазразком.
function bubbleSortStepsExample() {
    const arr = [5, 2, 4, 1, 3];
    let swapCount = 0;
    console.log("Початковий масив:", arr.join(','));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // обмін елементів
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapCount++;
                // Вивід поточного стану масиву після обміну
                console.log(`Обмін ${swapCount}:`, arr.join('\t'));
            }
        }
    }
    console.log("Відсортований масив:", arr.join(','));
    console.log("Кількість обмінів:", swapCount);
}
// Виклик функції
bubbleSortStepsExample();
function cocktailSortStepsExample() {
    const arr = [5, 2, 4, 1, 3];
    let swapCount = 0;
    let left = 0;
    let right = arr.length - 1;
    let swapped = true;
    console.log("Початковий масив:", arr.join(','));
    while (swapped) {
        swapped = false;
        // зліва направо
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // обмін
                swapCount++;
                swapped = true;
                console.log(`Обмін ${swapCount}:`, arr.join('\t'));
            }
        }
        right--;
        if (!swapped)
            break;
        swapped = false;
        // справа наліво
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]; // обмін
                swapCount++;
                swapped = true;
                console.log(`Обмін ${swapCount}:`, arr.join('\t'));
            }
        }
        left++;
    }
    console.log("Відсортований масив:", arr.join(','));
    console.log("Кількість обмінів:", swapCount);
}
// Виклик функції
cocktailSortStepsExample();
function insertionSortStepsExample() {
    const arr = [5, 2, 4, 1, 3];
    let swapCount = 0; // Лічильник обмінів
    for (let k = 1; k < arr.length; k++) {
        let key = arr[k];
        let i = k - 1;
        // Переміщуємо елементи arr[0..i-1], що більші за key, на одну позицію вправо
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]; // зсуваємо елемент
            swapCount++; // рахуємо як обмін
            console.log(`Обмін ${swapCount}:`, arr.join('\t')); // вивід після кожного зсуву
            i--;
        }
        arr[i + 1] = key; // вставляємо key
        swapCount++; // вставка теж вважається обміном
        console.log(`Обмін ${swapCount}:`, arr.join('\t'));
    }
    console.log("Відсортований масив:", arr.join(','));
    console.log("Кількість обмінів:", swapCount);
}
// Виклик функції
insertionSortStepsExample();
