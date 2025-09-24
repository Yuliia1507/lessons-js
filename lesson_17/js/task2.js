"use strict";
// Задача 2. Створити службове авто(водій, марка, номер).Створити клас таким чином, щоб можна було створити тільки один екземпляр
// цього класу.
class CompanyAuto {
    constructor(driver, brand, number) {
        this.driver = '';
        this.brand = '';
        this.number = '';
        if (CompanyAuto.objCompanyAuto)
            return CompanyAuto.objCompanyAuto;
        this.driver = driver;
        this.brand = brand;
        this.number = number;
        CompanyAuto.objCompanyAuto = this;
    }
    toString() {
        return `<div>Водій: ${this.driver}, марка:${this.brand}, номер:${this.number}</div>`;
    }
}
const car1 = new CompanyAuto('Марія Іваненко', 'Honda Civic', 'XY9876ZT');
document.write(car1.toString());
const car2 = new CompanyAuto('Сергій Коваленко', 'Nissan Leaf', 'LM5432OP');
document.write(car2.toString());
