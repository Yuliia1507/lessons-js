
/*На складі зберігається певна кількість ящиків з яблуками (наприклад, 15). Коли під’їде машина для завантаження, попросити користувача ввести, скільки ящиків завантажити у першу машину, у другу і т. д., поки на складі не закінчаться ящики з яблуками. Передбачити той випадок, коли користувач вводить кількість, що перевищує поточну кількість ящиків на складі.
 */

//boxesLeft - ящиків на складі
//loadingBoxes - ящиків завантажено
//machineNumber - номер машини



if (confirm('Почати тестування?')) {
	let boxesLeft = 15
	let machineNumber = 1
	let loadingBoxes


	do {
		loadingBoxes = parseInt(
			prompt(`Скільки ящиків завантажити у ${machineNumber}-у машину? На складі ${boxesLeft} ящиків`)
		)

		if (loadingBoxes <= 0 || loadingBoxes > boxesLeft) {
			alert(`Ящиків на складі : ${boxesLeft}`)
			continue
		}

		boxesLeft -= loadingBoxes
		machineNumber++

	} while (boxesLeft > 0)

	document.write("Ящиків не залишилось.")
}

