import { Van } from './classes/van'
import { Car } from './classes/car'

describe('testing classes', () => {
	let van: Van
	let car: Car

	beforeAll(() => {
		van = new Van('Грузовик', 100)
		car = new Car('Легковик', 12)
	})

	// Lab 4
	it('checks instance of a class Van is defined', () => {
		expect(van).toBeInstanceOf(Van)
	})

	it('checks instance of a class Village is defined', () => {
		expect(car).toBeInstanceOf(Car)
	})

	it('checks van fuel consumption', () => {
		expect(van.fuelConsumption()).toBe(van.loadCapacity * 100)
	})

	it('checks car fuel consumption', () => {
		expect(car.fuelConsumption()).toBe(car.V * 2.5)
	})
})