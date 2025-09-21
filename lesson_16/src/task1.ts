
// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями.Реалізувати методи збільшення / зменшення дати на певну кількість днів, місяців чи років.Введення та виведення дати реалізувати за допомогою методу  toString.

class TDate {
	private _day: number;
	private _month: number;
	private _year: number;

	constructor(day: number, month: number, year: number) {
		this._day = day;
		this._month = month;
		this._year = year;
	}

	public get Day(): number {
		return this._day;
	}
	public set Day(value: number) {
		if (value < 1 || value > 30) throw new Error("День має бути від 1 до 30");
		this._day = value;
	}
	public get Month(): number {
		return this._month;
	}
	public set Month(value: number) {
		if (value < 1 || value > 12) throw new Error("Місяць має бути від 1 до 12");
		this._month = value;
	}
	public get Year(): number {
		return this._year;
	}

	public set Year(value: number) {
		if (value < 1) throw new Error("Рік має бути > 0");
		this._year = value;
	}

	// методи зміни дати 
	public addDays(n: number) {
		this._day += n;
		while (this._day > 30) { this._day -= 30; this.addMonths(1); }
		while (this._day < 1) { this._day += 30; this.subtractMonths(1); }
	}

	public subtractDays(n: number) {
		this.addDays(-n);
	}

	public addMonths(n: number) {
		this._month += n;
		while (this._month > 12) { this._month -= 12; this.addYears(1); }
		while (this._month < 1) { this._month += 12; this.subtractYears(1); }
	}

	public subtractMonths(n: number) {
		this.addMonths(-n);
	}

	public addYears(n: number) {
		this._year += n;
	}

	public subtractYears(n: number) {
		this._year -= n;
	}

	// вивід дати 
	public toString() {
		return `${this.Day}.${this.Month}.${this.Year}`;
	}
}

// тестування
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

} catch (err: any) {
	document.write("Помилка: " + err.message);
}
