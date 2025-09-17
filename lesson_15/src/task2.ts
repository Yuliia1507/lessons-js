// Задача 2. Створити об’єкт «Авто».
// Авто

// Поля(властивості)

// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів

// Методи(дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

if (confirm('Почати тестування')) {

	class Car {
		brand: string
		tankSize: number
		currentFuel: number
		seats: number
		passengers: number

		constructor(brand: string, tankSize: number, currentFuel: number, seats: number, passengers: number) {
			this.brand = brand;
			this.tankSize = tankSize;
			this.currentFuel = currentFuel;
			this.seats = seats;
			this.passengers = passengers;
		}

		// Методи(дії)

		// Заправка на вказану кількість літрів
		refuel(liters: number) {
			this.currentFuel += liters;
			if (this.currentFuel > this.tankSize) this.currentFuel = this.tankSize;
		}


		// Виведення кількості пасажирів

		showPassengers() {
			return this.passengers
		}
		// Додавання пасажирів

		addPassenger(count: number) {
			this.passengers = Math.min(this.passengers + count, this.seats);
		}
		// Висадка пасажирів
		removePassenger(count: number) {
			this.passengers -= count;
			if (this.passengers < 0) this.passengers = 0;
		}

	}
	const myCar = new Car("Toyota", 50, 20, 5, 2);
	console.log("Пасажири:", myCar.showPassengers());

	myCar.addPassenger(3);
	console.log("Пасажири після додавання:", myCar.showPassengers());

	myCar.removePassenger(2);
	console.log("Пасажири після висадки:", myCar.showPassengers());

	myCar.refuel(10);
	console.log("Пальне в баку:", myCar.currentFuel);
} 
