
/*Задача 0. Обчислити значення виразів
1) S1=a+12+b 
2) S2=Math.sqrt((a+b) / (2*a))
3) S3=Math.cbrt((a+b)*c)
4)  S4 = Math.sin(a / -b);
*/

// Вводимо дані

const givenNumber = 12
let a = parseFloat(prompt('a', '0'))
let b = parseFloat(prompt('b', '0'))
let c = parseFloat(prompt('c', '0'))

// Обчислення результату 

let S1 = a + givenNumber + b
let S2 = Math.sqrt((a + b) / (2 * a))
let S3 = Math.cbrt((a + b) * c)
let S4 = Math.sin(a / (-b))

// Виведення результату

document.write( `
<p>S1 = ${S1.toFixed(1)}</p>
<p>S2 = ${S2.toFixed(1)}</p>
<p>S3 = ${S3.toFixed(2)}</p>
<p>S4 = ${S4.toFixed(2)}</p>
`)