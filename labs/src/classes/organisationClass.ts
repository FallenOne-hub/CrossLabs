import IOrganisation from './interfaces/organisation'

export default class Organisation implements IOrganisation {
	constructor(public name: string) {}

	organise(): void {
		console.log(this.name + 'organising smth')
	}
	show() {
		return this.name + ' was created'
	}
}