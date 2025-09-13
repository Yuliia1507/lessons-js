"use strict";
// Розробити функцію, у яку передають об’єкт(день, місяць, рік).Визначити, який буде рік через N місяців.
if (confirm('Почати тестування')) {
    const dataInfo = {
        day: 1,
        month: 8,
        year: 2025
    };
    const N = parseInt(prompt("Введіть кількість місяців") || "0");
    function getYearAfterMonths(data, N) {
        const totalMonths = data.month + N;
        const newYear = data.year + Math.floor((totalMonths - 1) / 12);
        return newYear;
    }
    const newYear = getYearAfterMonths(dataInfo, N);
    document.write(`Через ${N} місяці(в) буде ${newYear} рік.<br>`);
}
