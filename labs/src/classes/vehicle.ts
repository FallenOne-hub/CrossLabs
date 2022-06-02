export abstract class Vehicle {
	abstract name: string

	abstract fuelConsumption(): number

	show() {
		return 'Автомобіль: ' + this.name + ' | Витрата пального: ' + this.fuelConsumption().toFixed(2)
	}
}