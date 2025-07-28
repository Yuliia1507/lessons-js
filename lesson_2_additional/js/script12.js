/*З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп, 50 коп). Визначити скільки гривень і копійок є у даній сумі. */

//Введенння даних

let coinsNumber = parseInt(prompt('Кільксть монет номіналом 2 коп','0'))


//Обчислення результату

let totalCoins = coinsNumber *2

let hryvnas = Math.trunc(totalCoins / 100)  

let coins = totalCoins % 100

//Виведення даних

document.write(`${hryvnas} грн ${coins} копійок`)
