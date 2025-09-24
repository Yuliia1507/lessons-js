// Задача 2. Створити клас TMoney для роботи з грошовими сумами.Сума повинна зберігатися у вигляді доларового еквіваленту.Реалізувати методи додавання / вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

class TMoney {
	private _dollarsSum: number = 0; // сума в доларах
	private _rate: number = 0;       // курс долара 

	constructor(initialDollars: number, rate: number) {
		this.setDollars(initialDollars);
		this.setRate(rate);
	}

	public get Dollars(): number {
		return this._dollarsSum;
	}

	public get UAH(): number {
		return this._dollarsSum * this._rate;
	}

	// встановити курс 
	public setRate(newRate: number) {
		if (newRate <= 0) throw new Error("Невірний курс");
		this._rate = newRate;
	}

	// приватний метод для встановлення суми доларів
	private setDollars(amount: number) {
		if (amount < 0) throw new Error("Сума не може бути від'ємною");
		this._dollarsSum = amount;
	}

	//  додати суму в гривнях 
	public addUAH(amountUAH: number) {
		if (amountUAH < 0) throw new Error("Недостатня сума");
		this._dollarsSum += amountUAH / this._rate;
	}

	//  вилучити суму в гривнях 
	public subtractUAH(amountUAH: number) {
		if (amountUAH < 0) throw new Error("Невірна сума");
		const dollarsToSubtract = amountUAH / this._rate;
		if (dollarsToSubtract > this._dollarsSum) throw new Error("Недостатньо грошей");
		this._dollarsSum -= dollarsToSubtract;
	}

	public rateForIncreaseUAH(increaseUAH: number): number {
		if (increaseUAH <= 0) throw new Error("Невірна сума");
		return (this._dollarsSum * this._rate + increaseUAH) / this._dollarsSum;
	}

	// вивід 
	public toString() {
		return `${this._dollarsSum.toFixed(2)} $ (курс: ${this._rate.toFixed(2)} грн: ${(this._dollarsSum * this._rate).toFixed(2)} грн)`;
	}
}

// Тестування
try {
	const money = new TMoney(100, 40);
	document.write(money.toString() + '<br>');

	money.addUAH(800);
	document.write(money.toString() + '<br>');

	money.subtractUAH(400);
	document.write(money.toString() + '<br>');

	const newRate = money.rateForIncreaseUAH(100);
	document.write(`Новий курс для +100 грн: ${newRate.toFixed(2)}<br>`);
} catch (err: any) {
	document.write("Помилка: " + err.message);
}

