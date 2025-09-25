// Розробити калькулятор


window.onload = function () {
	document.querySelector('#add').onclick = () => calculate(add)
	document.querySelector('#subtract').onclick = () => calculate(subtract)
	document.querySelector('#multiply').onclick = () => calculate(multiply)
	document.querySelector('#divide').onclick = () => calculate(divide)
}

function add(a, b) {
	return a + b
}
function subtract(a, b) {
	return a - b
}
function multiply(a, b) {
	return a * b
}
function divide(a, b) {
	return a / b
}

function calculate(operation) {
	const num1 = parseFloat(document.getElementById('first-number').value)
	const num2 = parseFloat(document.getElementById('second-number').value)
	const result = operation(num1, num2)
	document.getElementById('result').value = result
}