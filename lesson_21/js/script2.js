// Створити клас Bank, у якому зберігається масив клієнтів.Виконати такі операції
// Вивести всіх простих клієнтів;
// Вивести всіх клієнтів GoldenClient;
// Знайти сумарну кількість грошей на рахунку;

class Client {
	#id;
	#name;
	#balance;

	constructor(id, name, balance) {
		this.#id = id;
		this.#name = name;
		this.#balance = balance;
	}

	get id() {
		return this.#id;
	}

	get name() {
		return this.#name;
	}

	set name(newName) {
		if (!newName) throw new Error("Ім'я не може бути порожнім");
		this.#name = newName;
	}

	get balance() {
		return this.#balance;
	}

	set balance(newBalance) {
		if (typeof newBalance !== "number" || newBalance < 0) {
			throw new Error("Баланс має бути числом >= 0");
		}
		this.#balance = newBalance;
	}

	toString() {
		return `${this.name} (Client) - Баланс: ${this.balance.toFixed(2)}`;
	}
}

class GoldenClient extends Client {
	#creditLimit;
	#interestPercent;

	constructor(id, name, balance, creditLimit = 100000, interestPercent = 0.1) {
		super(id, name, balance);
		this.#creditLimit = creditLimit;
		this.#interestPercent = interestPercent;
	}

	get creditLimit() {
		return this.#creditLimit;
	}

	set creditLimit(newLimit) {
		if (typeof newLimit !== "number" || newLimit < 0) {
			throw new Error("Кредитний ліміт має бути числом >= 0");
		}
		this.#creditLimit = newLimit;
	}

	get interestPercent() {
		return this.#interestPercent;
	}

	set interestPercent(newPercent) {
		if (typeof newPercent !== "number" || newPercent < 0) {
			throw new Error("Відсоток має бути числом >= 0");
		}
		this.#interestPercent = newPercent;
	}

	applyInterest() {
		this.balance += this.balance * this.#interestPercent;
	}

	toString() {
		return `${this.name} (GoldenClient) - Баланс: ${this.balance.toFixed(2)}, Ліміт: ${this.#creditLimit}, Відсотки: ${this.#interestPercent}`;
	}
}

class Bank {
	constructor() {
		this.clients = [];
	}

	addClient(client) {
		this.clients.push(client);
	}

	getSimpleClients() {
		return this.clients.filter(client => !(client instanceof GoldenClient));
	}

	getGoldenClients() {
		return this.clients.filter(client => client instanceof GoldenClient);
	}

	getTotalBalance() {
		return this.clients.reduce((sum, client) => sum + client.balance, 0);
	}
}

const bank = new Bank();

bank.addClient(new Client(1, "Олег Петренко", 1200));
bank.addClient(new Client(2, "Марія Степаненко", 800));
bank.addClient(new GoldenClient(3, "Іван Василенко", 3000));
bank.addClient(new GoldenClient(4, "Анна Яровенко", 5000));

const simpleClientsDiv = document.getElementById("simpleClients");
simpleClientsDiv.innerHTML = bank.getSimpleClients()
	.map(client => client.toString())
	.join("<br>");

const goldenClientsDiv = document.getElementById("goldenClients");
goldenClientsDiv.innerHTML = bank.getGoldenClients()
	.map(client => client.toString())
	.join("<br>");

const totalBalanceDiv = document.getElementById("totalBalance");
totalBalanceDiv.textContent = bank.getTotalBalance();
