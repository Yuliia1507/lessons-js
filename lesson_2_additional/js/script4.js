
/*  Задача 4
З клавіатури вводиться вік дитини. Вивести на екран через скільки років вона буде відвідувати садочок, піде у школу, закінчить школу, вступить і закінчить 
 */

// Ведення даних

let childAge = parseInt(prompt('Child Age','0'))

// Обчислення

const kindergartenAge = 3

const schoolAge = 6

const schoolStudy = 11

const  universityStudy = 5

let goToKindergarten = kindergartenAge - childAge

let goToSchoolAge = schoolAge - childAge

let finishSchool = (schoolAge + schoolStudy) - childAge

let enterUniversity = finishSchool

let finishUniversity = enterUniversity + universityStudy


//Виведення 
document.write (`
<p class="text">Якщо дитині ${childAge} роки(рік), то через ${goToKindergarten} роки вона буде відвідувати садок, через ${goToSchoolAge} роки(років) піде в школу, через ${finishSchool} років закінчить школу, через ${enterUniversity} років вступить до університету та через ${finishUniversity} років закінчить університет.</p>

`)
