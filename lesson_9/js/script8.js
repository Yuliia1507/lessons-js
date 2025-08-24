//Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

const carNumbers = ['AB1234', 'BC5678', 'AA9999', 'AC4321', 'BD8765']

const numbersStartingWithA = []

for (i = 0; i < carNumbers.length; i++) {
	if (carNumbers[i][0] === 'A')
		numbersStartingWithA.push(carNumbers[i])
}
document.write(`<p>Масив номерів: ${carNumbers}</p>
	<p>Номери, що починаються на A: ${numbersStartingWithA}</p>`)