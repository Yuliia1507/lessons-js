// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div.При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

window.onload = function () {
	const items = document.querySelectorAll('.item');

	items.forEach((item, index) => {
		item.addEventListener('click', () => {
			for (let i = index + 1; i < items.length; i++) {
				items[i].classList.add('red-bg');
			}
		});
	});
};