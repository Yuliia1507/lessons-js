// Задача 1. Сяючі зорі.Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.Кожна зірка(це екземпляр
// класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру.Як тільки досягнути
// максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.
class Star {
	constructor(image, minSize, maxSize, step, interval) {
		this.img = document.createElement('img');
		this.img.src = image;
		this.img.classList.add('star');
		document.body.appendChild(this.img);

		this.minSize = minSize;
		this.maxSize = maxSize;
		this.step = step;
		this.interval = interval;
		this.size = this.minSize;

		this.img.style.width = this.size + 'px';
		this.img.style.height = this.size + 'px';
		this.setRandomPosition();
		this.startShining();
	}

	setRandomPosition() {
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * window.innerHeight;
		this.img.style.left = `${x}px`;
		this.img.style.top = `${y}px`;
	}


	startShining() {
		this.timer = setInterval(() => {
			this.size += this.step;
			this.img.style.width = this.size + 'px';
			this.img.style.height = this.size + 'px';

			if (this.size >= this.maxSize) {
				this.size = this.minSize;
				this.setRandomPosition();
			}
		}, this.interval);
	}
}


for (let i = 0; i < 100; i++) {
	const minSize = Math.random() * 10 + 5;
	const maxSize = minSize + Math.random() * 25;
	const step = Math.random() * 0.4 + 0.1;
	const interval = Math.random() * 100 + 50;
	const opacity = Math.random() * 0.5 + 0.5;
	new Star('img/star.png', minSize, maxSize, step, interval);
}