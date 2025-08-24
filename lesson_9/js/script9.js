//		Дано масив імен. Сформувати масив з перших літер цих імен.

const namesList = ["Yuliia", "Olena", "Dmytro", "Ivan", "Sofiia"]

const firstLettersList = namesList.map(name => name[0])

document.write(`<p>Масив імен: ${namesList}</p>
	<p>Масив літер: ${firstLettersList}</p>`)

