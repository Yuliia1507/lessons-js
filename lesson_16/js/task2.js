"use strict";
// Задача 2. Створити клас TMoney для роботи з грошовими сумами.Сума повинна зберігатися у вигляді доларового еквіваленту.Реалізувати методи додавання / вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.
class TMoney {
    constructor(initialDollars, rate) {
        this._dollarsSum = initialDollars;
        this._rate = rate;
    }
    // --- геттер для доларів ---
    get Dollars() {
        return this._dollarsSum;
    }
    // --- геттер для гривень ---
    get UAH() {
        return this._dollarsSum * this._rate;
    }
    // --- встановити курс ---
    setRate(newRate) {
        if (newRate <= 0)
            throw new Error("Невірний курс");
        this._rate = newRate;
    }
    // --- додати суму в гривнях ---
    addUAH(amountUAH) {
        if (amountUAH < 0)
            throw new Error("Недостатня сума");
        this._dollarsSum += amountUAH / this._rate;
    }
    // --- вилучити суму в гривнях ---
    subtractUAH(amountUAH) {
        if (amountUAH < 0)
            throw new Error("Невірна сума");
        const dollarsToSubtract = amountUAH / this._rate;
        if (dollarsToSubtract > this._dollarsSum)
            throw new Error("Недостатньо грошей");
        this._dollarsSum -= dollarsToSubtract;
    }
    rateForIncreaseUAH(increaseUAH) {
        if (increaseUAH <= 0)
            throw new Error("Невірна сума");
        return (this._dollarsSum * this._rate + increaseUAH) / this._dollarsSum;
    }
    // --- вивід ---
    toString() {
        return `${this._dollarsSum.toFixed(2)} $ (курс: ${this._rate.toFixed(2)} грн: ${(this._dollarsSum * this._rate).toFixed(2)} грн)`;
    }
}
// --- Тестування ---
try {
    const money = new TMoney(100, 40); // 100$, курс 40 грн/$
    document.write(money.toString() + '<br>');
    money.addUAH(800); // додаємо 800 грн
    document.write(money.toString() + '<br>');
    money.subtractUAH(400); // вилучаємо 400 грн
    document.write(money.toString() + '<br>');
    const newRate = money.rateForIncreaseUAH(100); // курс, щоб грн збільшились на 100
    document.write(`Новий курс для +100 грн: ${newRate.toFixed(2)}<br>`);
}
catch (err) {
    document.write("Помилка: " + err.message);
}
