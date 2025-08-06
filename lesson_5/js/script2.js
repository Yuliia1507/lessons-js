
//  Створити 10 елементів для введення цін продуктів

//productPriceElement - елемент для введення цін продуктів

if (confirm('Почати тестування?')) {

	for (let productPriceElement = 1; productPriceElement <= 10; productPriceElement++) {
		document.write(`Product № ${productPriceElement} <input type="number" class="product-input"><br>`)
	}
} 
