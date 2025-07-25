
/*  Задача 4
Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів. */

// Ведення даних

let lengthCm = parseFloat(prompt('Довжина у сантиметрах'))

// Обчислення

let lengthM = lengthCm / 100

let lengthKm = lengthM / 1000

//Виведення 
document.write (`
<p> Довжина в метрах = ${lengthM}</p>
<p>Довжина в кілометрах= ${lengthKm}</p>

`)
