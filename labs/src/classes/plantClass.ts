import InsuranceCompany from './InsuranceClass'
import IOrganisation from './interfaces/organisation'
import IPlant from './interfaces/plant'

export default class Plant implements IOrganisation, IPlant {
	public insurance: InsuranceCompany
	constructor(public name: string) {
		this.insurance = new InsuranceCompany(name + ' insurance')
	}
	manufacture(): void {
		console.log(this.name + 'manufacturing smth')
	}
	organise(): void {
		console.log(this.name + 'organising smth')
	}
	workerInsurance() {
		this.insurance.giveInsurance()
	}
	show() {
		return this.name + ' was created'
	}
}