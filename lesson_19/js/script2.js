// Задача 2. Дано 5 елементів input.При введенні значення у якийсь із них необхідно автоматично заповнювати інші(усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше(кожен наступне на 1 більше за попереднього)


window.onload = function () {
	const container = document.querySelector('.inputs-container');

	container.addEventListener('input', function (e) {
		const input = e.target;
		let value = input.value;

		input.value = value;

		let prev = input.previousElementSibling;
		let counter = value - 1;
		while (prev) {
			prev.value = counter--;
			prev = prev.previousElementSibling;
		}

		let next = input.nextElementSibling;
		counter = parseInt(value) + 1;
		while (next) {
			next.value = counter++;
			next = next.nextElementSibling;
		}
	});
};
