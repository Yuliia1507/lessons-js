//	Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

const pricesList = [2000, 4700, 5000, 500, 300]

taxesList = pricesList.map(price => price * 0.2)

document.write(`<p>Масив цін: ${pricesList}</p>
	<p>Масив сплаченого податку: ${taxesList}</p>`)