"use strict";
// Задача 5. Дано масив імен.Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» іпід яким індексом.
// Приклад масиву
const names = ["Ivan", "Olga", "Maria", "Alex", "Dmytro", "Olena"];
console.log("Початковий масив:", names.join(', '));
//сортуємо масив
const sortedNames = [...names].sort();
console.log("Відсортований масив:", sortedNames.join(', '));
// Функція бінарного пошуку
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid; // знайдено
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1; // не знайдено
}
const target = "Olga";
const index = binarySearch(sortedNames, target);
if (index !== -1) {
    console.log(`${target} знайдено під індексом ${index} у відсортованому масиві.`);
}
else {
    console.log(`${target} не знайдено.`);
}
