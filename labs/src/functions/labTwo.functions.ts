export const tabulate = (xn: number, xk: number, a: number, h: number) => {
	const data: string[] = []
	const xx: string[] = []
	const yy: string[] = []
	let x: number = xn
	let y: number

	while (x < xk) {

		if (x <= 0) {
			y = Math.pow(x + 3, 2) / (Math.pow(Math.abs(x), 1.2) * Math.sin(3 * x))
		}
		else if (x <= a) {
			y = (Math.pow(x, 3) - 4 * x + 2) / (Math.pow(x, 2) + Math.sin(7 * x) - 1)
		}
		else {
			y = (Math.tan(0.1 * Math.PI * Math.pow(x, 2)) + x) / Math.pow(Math.cos(2 * x + 3), 2)
		}

		xx.push(x.toFixed(2))
		yy.push(y.toFixed(2))
		let s: string = `x = ${x.toFixed(2)}  -  y = ${x.toFixed(2)}`
		data.push(s)
		x += h
	}
	return { data, xx, yy }
}