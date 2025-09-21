"use strict";
// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями.Реалізувати методи збільшення / зменшення дати на певну кількість днів, місяців чи років.Введення та виведення дати реалізувати за допомогою методу  toString.
class TDate {
	constructor(day, month, year) {
		this._day = day;
		this._month = month;
		this._year = year;
	}
	get Day() {
		return this._day;
	}
	set Day(value) {
		if (value < 1 || value > 30)
			throw new Error("День має бути від 1 до 30");
		this._day = value;
	}
	get Month() {
		return this._month;
	}
	set Month(value) {
		if (value < 1 || value > 12)
			throw new Error("Місяць має бути від 1 до 12");
		this._month = value;
	}
	get Year() {
		return this._year;
	}
	set Year(value) {
		if (value < 1)
			throw new Error("Рік має бути > 0");
		this._year = value;
	}
	// --- методи зміни дати ---
	addDays(n) {
		this._day += n;
		while (this._day > 30) {
			this._day -= 30;
			this.addMonths(1);
		}
		while (this._day < 1) {
			this._day += 30;
			this.subtractMonths(1);
		}
	}
	subtractDays(n) {
		this.addDays(-n);
	}
	addMonths(n) {
		this._month += n;
		while (this._month > 12) {
			this._month -= 12;
			this.addYears(1);
		}
		while (this._month < 1) {
			this._month += 12;
			this.subtractYears(1);
		}
	}
	subtractMonths(n) {
		this.addMonths(-n);
	}
	addYears(n) {
		this._year += n;
	}
	subtractYears(n) {
		this._year -= n;
	}
	// --- вивід дати ---
	toString() {
		return `${this.Day}.${this.Month}.${this.Year}`;
	}
}
// --- Тестування ---
try {
	const date1 = new TDate(12, 5, 2025);
	document.write(date1.toString() + '<br>'); // 12.5.2025
	date1.addDays(20);
	document.write(date1.toString() + '<br>'); // 2.6.2025
	date1.subtractDays(40);
	document.write(date1.toString() + '<br>'); // 23.4.2025
	date1.addMonths(10);
	document.write(date1.toString() + '<br>'); // 23.2.2026
	date1.subtractYears(2);
	document.write(date1.toString() + '<br>'); // 23.2.2024
}
catch (err) {
	document.write("Помилка: " + err.message);
}
