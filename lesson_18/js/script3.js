// Користувач задає рік народження.Визначити кількість років користувача.

window.onload = function () {
	document.querySelector('#checkAge').onclick = getAge
}

function getAge() {
	const birthYear = parseInt(document.getElementById('year').value)
	const currentYear = 2025
	const age = currentYear - birthYear
	document.getElementById('age').value = age
}