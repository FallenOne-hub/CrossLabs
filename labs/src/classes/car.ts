import { Vehicle } from './vehicle'

export class Car extends Vehicle {
	constructor(public name: string, public V: number) {
		super()
	}

	fuelConsumption(): number {
		return 2.5 * this.V
	}
}