
/*     Задача 1
Знайти суму, добуток та частку двох дійсних чисел. 
Результат вивести у формі таблиці*/

// Вводимо дані

const firstNumber = parseFloat(prompt('First Number', '0'))
const secondNumber = parseFloat(prompt('Second number', '0'))

// Обчислення результату

let resultSum = firstNumber + secondNumber
let resultProduct = firstNumber * secondNumber
let resultDivision = firstNumber / secondNumber

// Виведення результату


document.write(`
<table  >
  <tr>
    <td>Сума</td>
    <td>${resultSum}</td>
  </tr>
  <tr>
    <td>Добуток</td>
    <td>${resultProduct}</td>
  </tr>
  <tr>
    <td>Частка</td>
    <td>${resultDivision}</td>
  </tr>
</table>

`)