"use strict";
// Задача 0, Дано два об’єкта.Обидва містять масив цілих чисел.При цьому у одному з них є функція знаходження суми, а у
// іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і	максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів(використати call, apply)
const obj1 = {
    numbers: [1, 2, 3],
    getSum: function () {
        return this.numbers.reduce((prevSum, el) => prevSum + el, 0);
    }
};
const obj2 = {
    numbers: [4, 5, 6, 7, 8],
    getProduct: function (min, max) {
        return this.numbers
            .filter(num => num > min && num < max)
            .reduce((prod, el) => prod * el, 1);
    }
};
const sum1 = obj1.getSum();
console.log(`"Сума чисел obj1:" ${sum1}`);
const prod1 = obj2.getProduct.call(obj1, 1, 3);
// const prod1 = obj2.getProduct.apply(obj1, [1, 3]);
console.log(`"Добуток чисел obj1: ${prod1}"`);
const prod2 = obj2.getProduct(4, 8);
console.log(`"Добуток чисел obj2:" ${prod2}`);
// const sum2 = obj1.getSum.call(obj2)
const sum2 = obj1.getSum.apply(obj2);
console.log(`"Сума чисел obj2:"${sum2}`);
