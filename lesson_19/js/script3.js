// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами(кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

window.onload = function () {
	const container = document.getElementById('lists-container');

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	for (let i = 0; i < 5; i++) {
		const ol = document.createElement('ol');
		const itemsCount = getRandomNumber(1, 10);

		for (let j = 0; j < itemsCount; j++) {
			const li = document.createElement('li');
			li.textContent = getRandomNumber(1, 100);
			ol.appendChild(li);
		}

		container.appendChild(ol);
	}

	const btn = document.getElementById('color-btn');

	btn?.addEventListener('click', () => {
		const lists = container.querySelectorAll('ol');

		lists.forEach(list => {
			list.className = list.childElementCount % 2 === 0 ? 'green-bg' : 'red-bg';
		});
	});
};
