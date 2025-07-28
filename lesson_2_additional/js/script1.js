
/*     Задача 1
Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину елементів, які повинні бути відображені у цьому рядку. 
*/

// Вводимо дані

const screenWidth = parseFloat(prompt('Screen width', '0'))
const elementsNumber = parseInt(prompt('Number of elements', '0'))

// Обчислення результату

let elementWidth = screenWidth / elementsNumber

// Виведення результату


document.write(`
<p>На екрані шириною ${screenWidth} вміститься ${elementsNumber} елементів шириною ${elementWidth}</p>
`)