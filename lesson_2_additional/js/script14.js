/*З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде день тижня через N днів. */

//

let dayNumber = parseInt(prompt('Номер дня тижня від 1 до 7','0'))

let addDays = parseInt(	prompt('Додати днів','0'))

//

let newDayNumber = ((dayNumber + addDays - 1) % 7) + 1

//

document.write(`Зараз ${dayNumber} день тижня, через ${addDays} днів це буде ${newDayNumber} день тижня.`)