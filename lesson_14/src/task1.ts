// Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості------
// 					назва компанії на час розробки(назву періодично змінюють)
// 					власник компанії
// споснсори(масив спонсорів)
// 	-прізвище спонсора
// 	-ім’я спонсора
// 	-сума вкладень спонсора
// 	рік випуску
// 	вартість сайту

// companyName – назва компанії на час розробки

// owner – власник компанії

// sponsors – масив спонсорів, де кожен спонсор має lastName, firstName, investment

// year – рік випуску сайту

// price – вартість сайту

type Sponsor = {
	lastName: string
	firstName: string
	investment: number
}

type Website = {
	companyName: string
	owner: string
	sponsors: Sponsor[]
	year: number
	price: number
}

const websites: Website[] = [
	{
		companyName: "WebSolutions",
		owner: "Іван Петренко",
		sponsors: [{ lastName: "Коваль", firstName: "Олег", investment: 5000 }],
		year: 2008,
		price: 8000
	},
	{
		companyName: "CreativeDev",
		owner: "Ігор Коваленко",
		sponsors: [{
			lastName: "Мельник", firstName: "Анна", investment: 120000
		},
		{
			lastName: "Іваненко", firstName: "Микола", investment: 10000
		}],
		year: 2024,
		price: 9000
	},
	{
		companyName: "WebCreative",
		owner: "Степан Степаненко",
		sponsors: [{
			lastName: "Гриценко", firstName: "Інна", investment: 130000
		}],
		year: 2022,
		price: 11000
	},
	{
		companyName: "WebDev",
		owner: "Анна Власенко",
		sponsors: [{ lastName: "Сидоренко", firstName: "Петро", investment: 7000 }],
		year: 2001,
		price: 20000
	}
]

// Знайти:
// 1) загальну вартість усіх сайтів

function getTotalPrice(websites: Website[]): number {
	const totalPrice = websites.reduce((prevPrice, website) => prevPrice + website.price, 0)

	return totalPrice
}

const price = getTotalPrice(websites)

document.write(`1) загальна вартість усіх сайтів: ${price}<br>`)

// let totalPrice = 0

// for (const website of websites) {
// 	totalPrice += website.price
// }
// document.write(`${totalPrice}`)



// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

function getWebsitesCountBetweenYears(websites: Website[], start: number, end: number): number {
	return websites.filter(website => website.year >= start && website.year <= end).length
}

const websitesNum = getWebsitesCountBetweenYears(websites, 2000, 2009)

document.write(`2) кількість сайтів, що було зроблено між 2000 та 2009 рр: ${websitesNum}<br>`)

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

function getWebsitesCountSponsor(websites: Website[]): number {
	return websites.filter(website => {
		const totalInvestment = website.sponsors.reduce(
			(sum, sponsor) => sum + sponsor.investment,
			0
		)
		return totalInvestment > 100000
	}).length
}

const websitesCount = getWebsitesCountSponsor(websites)

document.write(
	`3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${websitesCount}<br>`
)


// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)

function getSponsorsList(websites: Website[]): Sponsor[] {
	const sponsorsList: Sponsor[] = []

	websites.forEach(website => {
		website.sponsors.forEach(sponsor => {
			sponsorsList.push(sponsor)
		})
	})

	return sponsorsList
}

const arrList = getSponsorsList(websites)

document.write(
	`4) створити загальний список усіх спонсорів: ${arrList
		.map(sponsor => `${sponsor.firstName} ${sponsor.lastName}`)
		.join(", ")}<br>`
)


// 5) знайти рік, коли прибуток був найбільшим
function getYearOfMaxInvestment(websites: Website[]): number {

	let maxInvestment = -Infinity
	let yearOfMax = 0

	websites.forEach(website => {
		const totalInvestment = website.sponsors.reduce((sum, sponsor) => sum + sponsor.investment, 0)
		if (totalInvestment > maxInvestment) {
			maxInvestment = totalInvestment
			yearOfMax = website.year
		}
	})

	return yearOfMax
}

const yearMaxInvestment = getYearOfMaxInvestment(websites)

document.write(`5)Рік найбільшого інвестування: ${yearMaxInvestment}<br>`)


// 6) функція: впорядкувати список сайтів за спаданням прибутку
function sortWebsitesByProfit(websites: Website[]): Website[] {
	return websites.slice().sort((a, b) =>
		b.sponsors.reduce((sum, s) => sum + s.investment, 0) -
		a.sponsors.reduce((sum, s) => sum + s.investment, 0)
	)
}

const sortedWebsites = sortWebsitesByProfit(websites)

document.write("6) Список сайтів за спаданням прибутку:<br>")
sortedWebsites.forEach(website => {
	document.write(`${website.companyName} (${website.year})<br>`)
})

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
function splitWebsitesByPrice(websites: Website[]) {
	const cheap = websites.filter(site => site.price <= 10000).map(site => ({ ...site }))
	const expensive = websites.filter(site => site.price > 10000).map(site => ({ ...site }))
	return { cheap, expensive }
}

const { cheap, expensive } = splitWebsitesByPrice(websites)

document.write("7) Сайти з вартістю до 10000:<br>")
cheap.forEach(site => document.write(`${site.companyName} (${site.price})<br>`))

document.write("<br>Сайти з вартістю більше 10000:<br>")
expensive.forEach(site => document.write(`${site.companyName} (${site.price})<br>`))
