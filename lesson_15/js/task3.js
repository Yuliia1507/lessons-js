"use strict";
// Задача 5. Розробити клас «Керівник танців»
// Поля 
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців
if (confirm("Почати тестування?")) {
    class TutorOfDance {
        constructor(girls, boys) {
            this.girls = girls;
            this.boys = boys;
        }
        // Методи
        // Метод випадкового вибору імені хлопця
        getRandomBoy() {
            const index = Math.floor(Math.random() * this.boys.length);
            return this.boys[index];
        }
        // Метод випадкового вибору імені дівчини
        getRandomGirl() {
            const index = Math.floor(Math.random() * this.girls.length);
            return this.girls[index];
        }
        // Метод виведення пари для танців
        getDancePair() {
            const girl = this.getRandomGirl();
            const boy = this.getRandomBoy();
            return `${girl} і ${boy}`;
        }
        // Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців
        run() {
            setInterval(() => {
                console.log(this.getDancePair());
            }, 5000);
        }
    }
    const tutor = new TutorOfDance(["Anna", "Maria", "Olga"], ["John", "Peter", "Ivan"]);
    console.log("Список дівчат:", tutor.girls);
    console.log("Список хлопців:", tutor.boys);
    tutor.run();
}
