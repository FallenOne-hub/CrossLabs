import { LogService } from './logService'

export class RecursionService {
	private xy = new Map()
	private logService: LogService

	constructor() {
		this.logService = new LogService()
	}

	private factorial(num: number): number {
		if (num < 0)
			return -1
		else if (num === 0)
			return 1
		else {
			return (num * this.factorial(num - 1))
		}
	}

	getRecursion(x: number, n: number, sum: number): number {
		let min = .1
		sum += Math.pow(-1, n) * (Math.pow(x, 2 * n) / 2 * this.factorial(n))
		n++
		if (sum > min) return this.getRecursion(x, n, sum)
		return sum
	}

	getTab(xn: number, xk: number, h: number): Map<number, number> {
		let x = xn, y = 1, yy = 0
		while (x <= xk) {
			yy = this.getRecursion(x, 1, y)
			this.xy.set(x, yy)
			this.logService.log('x = ' + x.toFixed(2) + ' y = ' + yy.toFixed(2))
			x = x + h
		}
		return this.xy
	}
}