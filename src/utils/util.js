function convertMillionToCrore(number) {
	const convertToNumber = Math.ceil(number * 1000000);
	return convertToCrore(convertToNumber);
}

function convertBillionToCrore(number) {
	const convertToNumber = Math.ceil(number * 1000000000);
	return convertToCrore(convertToNumber);
}

function convertToCrore(number) {
	return `${number / 10000000} Crore`;
}

export function convertMillionToCroreByExchangeRate(amount, exchageRate) {
	return convertMillionToCrore(amount * exchageRate);
}

export function convertBillionToCroreByExchangeRate(amount, exchageRate) {
	return convertBillionToCrore(amount * exchageRate);
}
