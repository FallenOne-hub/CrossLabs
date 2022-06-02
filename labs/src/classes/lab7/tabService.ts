import { LogService } from './logService'

export class TabService {
	private xy = new Map()
	private logService: LogService

	constructor() {
		this.logService = new LogService()
	}

	getTab(xn: number, xk: number, h: number): Map<number, number> {
		let x = xn, y = 0
		while (x <= xk) {
			y = Math.cos(x)
			this.xy.set(x, y)
			this.logService.log('x = ' + x.toFixed(2) + ' y = ' + y.toFixed(2))
			x = x + h
		}
		return this.xy
	}
}