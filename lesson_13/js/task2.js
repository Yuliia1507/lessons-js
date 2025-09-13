"use strict";
// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання
//двох цифр і робиться перевірка.
if (confirm("Запустити тренажер додавання?")) {
    setInterval(() => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        const correct = a + b;
        const answer = prompt(`${a} + ${b} = ?`);
        if (answer === null) {
            alert("Ви скасували відповідь.");
            return;
        }
        if (parseInt(answer) === correct) {
            alert("Правильно!");
        }
        else {
            alert(`Ні. Правильна відповідь: ${correct}`);
        }
    }, 10000);
}
