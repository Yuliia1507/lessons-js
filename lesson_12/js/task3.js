"use strict";
// Задача 3. Дано масив 30 випадкових цілих чисел.Підрахувати скільки було обмінів під час сортування включеннями.
function insertionSort() {
    // Масив випадкових чисел від 1 до 30
    const arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 1);
    let swapCount = 0; // Лічильник обмінів
    // Класичний алгоритм сортування включеннями
    for (let k = 1; k < arr.length; k++) {
        let key = arr[k];
        let i = k - 1;
        // Переміщуємо елементи arr[0..i-1], що більші за key, на одну позицію вправо
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]; // зсуваємо елемент
            swapCount++; // рахуємо як обмін
            i--;
        }
        arr[i + 1] = key; // вставляємо key
        swapCount++; // вставка теж вважається обміном
    }
    console.log("Відсортований масив:", arr);
    console.log("Кількість обмінів (включеннями):", swapCount);
}
// Виклик функції
insertionSort();
