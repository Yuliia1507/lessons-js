//6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2


const elementsList = [5, 4, 7, 5, 3, 8, 2, 6]

const firstElement = elementsList[0]

for (let i = 0; i < elementsList.length; i++) {
	if (elementsList[i] > firstElement) {
		elementsList[i] *= 2
	}
}

document.write(`	<p>Новий масив: ${elementsList}</p>`)
