import { LogService } from './logService'

export class SeriesService {
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

	getSeries(x: number): number {
		let sum = 1, min = .1, n = 1
		while (sum > min) {
			sum += Math.pow(-1, n) * (Math.pow(x, 2 * n) / 2 * this.factorial(n))
			n++
		}
		return sum
	}

	getTab(xn: number, xk: number, h: number): Map<number, number> {
		let x = xn, y = 0
		while (x <= xk) {
			y = this.getSeries(x)
			this.xy.set(x, y)
			this.logService.log('x = ' + x.toFixed(2) + ' y = ' + y.toFixed(2))
			x = x + h
		}
		return this.xy
	}
}