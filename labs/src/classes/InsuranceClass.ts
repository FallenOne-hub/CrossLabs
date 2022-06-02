import IInsuranceCompany from './interfaces/insuranceCompany'
import IOrganisation from './interfaces/organisation'

export default class InsuranceCompany implements IOrganisation, IInsuranceCompany {
	constructor(public name: string) {}

	giveInsurance(): void {
		console.log(this.name + 'is giving insurance')
	}
	organise(): void {
		console.log(this.name + 'is organising smth')
	}

	show() {
		return this.name + ' was created'
	}
}