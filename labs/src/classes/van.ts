import { Vehicle } from './vehicle'
export class Van extends Vehicle {
	constructor(public name: string, public loadCapacity: number) {
		super()
	}

	fuelConsumption(): number {
		return 100 * this.loadCapacity
	}
}