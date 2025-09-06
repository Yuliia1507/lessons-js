// Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)



if (confirm('Почати тестування?')) {


	let elementsList = [
		[1, 2, 5, 3, 1, ], 
		[1, 2, 1, 6, 1, ],
		[1, 1, 5, 2, 1, ], 
		[1, 6, 5, 8, 1, ], 
		[1, 2, 23, 2, 1,], 
		[0, 1, 5, 7, 1,], 
	]

	// 1)номери рядків від 0 до половини, стовпці від 0 до половини

	let sum1 = 0

	let rowLimit = Math.floor(elementsList.length / 2)
	let colLimit = Math.floor(elementsList[0].length / 2)

	for (let i = 0; i < rowLimit; i++) {
		for (let j = 0; j < colLimit; j++) {
			sum1 += elementsList[i][j]
		}
	}

	document.write(`sum1 : ${sum1}<br>`)

	// 2)номери рядків від 0 до половини, стовпці від половини до кінця
	let sum2 = 0
	for (let i = 0; i < rowLimit; i++) {
		for (let j = colLimit; j < elementsList[0].length; j++) {
			sum2 += elementsList[i][j]
		}
	}
	document.write(`sum2 : ${sum2}<br>`)

	// 3)номери рядків(від половини до кінця, стовпці від 0 до половини
	let sum3 = 0

	for (let i = rowLimit; i < elementsList.length; i++) {
		for (let j = 0; j <= colLimit; j++) {
			sum3 += elementsList[i][j]
		}
	}
	document.write(`sum3 : ${sum3}<br>`)


	// 4) номери рядків від половини до кінця, стовпці від половини до кінця
	let sum4 = 0

	for (let i = rowLimit; i < elementsList.length; i++) {
		for (let j =colLimit; j < elementsList[0].length; j++) {
			sum4 += elementsList[i][j]
		}
	}
	document.write(`sum4 : ${sum4}<br>`)
	
	// 5) Суму парних рядків

	let sum5 = 0

	for (let i = 0; i < elementsList.length; i++) {
		if (i % 2 === 0) {         
			for (const el of elementsList[i]) {
				sum5 += el
			}
		}
	}

	document.write(`sum5 : ${sum5}<br>`)
	// 6) Суму непарних стовпців

	let sum6 = 0
	for (let j = 0; j < elementsList[0].length; j++) {
		if (j % 2 !== 0) {           // непарні стовпці
			for (const col of elementsList) {
				sum6 += col[j]
			}
		}
	}
	document.write(`sum6 : ${sum6}<br>`)

	// 7) У парних рядках – непарні стовпці, у непарних – парні.
	let sum7 = 0

	for (let i = 0; i < elementsList.length; i++) {
		for (let j = 0; j < elementsList[i].length; j++) {
			if ((i + j) % 2 !== 0) {   
				sum7 += elementsList[i][j]
			}
		}
	}

	document.write(`sum7 : ${sum7}<br>`)

}
