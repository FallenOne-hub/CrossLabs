import { fetchJSON } from '../../functions/fetchJSON'

type Obj = {
	'cafedra'?: string,
	'PIB'?: string,
	'quantity'?: number,
	'address'?: string,
}

const JSON_URL = 'https://api.jsonbin.io/b/62983225402a5b3802196503'

const ResultContainerLabThree = async () => {
	let data = await fetchJSON(JSON_URL)
	console.log(data)
	const num = parseInt((document.getElementById('lab3Number') as HTMLInputElement).value)
	let styleProperty = ''
	if (num) {
		styleProperty = 'style="color:blue"'
	}
	return `<div>${data.map((element: Obj) => {
		if (!element.quantity) element.quantity = 1
		return `<p>Кафедра: ${element.cafedra}</p>
				<p>ПІБ: ${element.PIB}</p>
				<p ${element.quantity > num ? styleProperty : ''}>Кількість викладачів: ${element.quantity}</p>
				<p>Адреса: ${element.address}</p>
				<br>`
	})}</div> `.replaceAll(',', '')
}

export default ResultContainerLabThree