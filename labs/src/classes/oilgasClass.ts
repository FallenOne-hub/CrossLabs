import IOilGasCompany from './interfaces/oilgas'
import IOrganisation from './interfaces/organisation'

export default class OilGasCompany implements IOrganisation, IOilGasCompany {
	constructor(public name: string) {}

	getOil(): void {
		console.log(this.name + 'is getting oil')
	}
	getGas(): void {
		console.log(this.name + 'is getting gas')
	}
	organise(): void {
		console.log(this.name + 'is organising smth')
	}
	show() {
		return this.name + ' was created'
	}
}