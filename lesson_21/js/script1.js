// Користувач задає місяць навчання учня(перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку
// (перевіряти чи є числом, чи від 1 до 100).Вивести чи зможе він виправити оцінку(якщо оцінка погана і це не останній	місяць у семестрі).Обробку усіх помилок зробити з використанням відповідних класів.	

class InvalidMonthError extends Error {
	constructor(value) {
		super(`Неправильний місяць: "${value}". Місяць повинен бути числом від 1 до 12.`);
		this.name = 'InvalidMonthError';
	}
}
class VacationMonthError extends Error {
	constructor(month) {
		super(`Місяць ${month} — канікули. Відпочивай ! :).`);
		this.name = 'VacationMonthError';
	}
}
class InvalidScoreError extends Error {
	constructor(value) {
		super(`Неправильна оцінка: "${value}". Оцінка повинна бути числом від 1 до 100.`);
		this.name = 'InvalidScoreError';
	}
}

const VACATION_MONTHS = [6, 7, 8];
const FIRST_SEMESTER = [9, 10, 11, 12, 1];
const SECOND_SEMESTER = [2, 3, 4, 5];
const LAST_MONTH_FIRST = 1;
const LAST_MONTH_SECOND = 5;
const BAD_SCORE_THRESHOLD = 60;

function toIntLikeNumber(value) {
	const num = Number(value);
	if (Number.isNaN(num)) return null;
	return num;
}

function validateMonth(monthRaw) {
	const month = toIntLikeNumber(monthRaw);
	if (month === null || !Number.isInteger(month) || month < 1 || month > 12) throw new InvalidMonthError(monthRaw);
	if (VACATION_MONTHS.includes(month)) throw new VacationMonthError(month);
	return month;
}

function validateScore(scoreRaw) {
	const score = toIntLikeNumber(scoreRaw);
	if (score === null || score < 1 || score > 100) throw new InvalidScoreError(scoreRaw);
	return score;
}

function canImprove(monthRaw, scoreRaw) {
	const month = validateMonth(monthRaw);
	const score = validateScore(scoreRaw);

	const isBad = score < BAD_SCORE_THRESHOLD;

	let lastMonthOfSemester;
	if (FIRST_SEMESTER.includes(month)) lastMonthOfSemester = LAST_MONTH_FIRST;
	else if (SECOND_SEMESTER.includes(month)) lastMonthOfSemester = LAST_MONTH_SECOND;
	else {
		throw new Error('Неможливо визначити семестр для місяця: ' + month);
	}

	if (!isBad) {
		return `Оцінка ${score} — хороша(>= ${BAD_SCORE_THRESHOLD}). Нічого виправляти.`;
	}

	if (month === lastMonthOfSemester) {
		return `Оцінка ${score} — погана, але ${month} — останній місяць семестру (немає часу на виправлення).`;
	} else {
		return `Оцінка ${score} — погана і це не останній місяць семестру (${month}), тому все ще можна виправити оцінку.`;
	}
}

try {
	const monthInput = prompt('Введіть місяць навчання (1–12):');
	const scoreInput = prompt('Введіть оцінку учня (1–100):');

	const resultMessage = canImprove(monthInput, scoreInput);
	alert(resultMessage);
} catch (err) {
	alert(`Помилка: [${err.name}] ${err.message}`);
}
