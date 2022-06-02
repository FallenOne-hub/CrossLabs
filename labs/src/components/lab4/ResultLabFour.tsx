import { Van } from '../../classes/van'
import { Vehicle } from '../../classes/vehicle'
import { Car } from '../../classes/car'
import { getRandomInt } from '../../functions/calculations'

const ResultLabFour: React.FC = () => {
	const vehicle: Vehicle[] = []
	const num = parseInt((document.getElementById('vehicleNumber') as HTMLInputElement).value)
	for (let i = 0; i < 2 * num; i++) {
		vehicle.push(new Van('Вантажівка', getRandomInt(50, 80)))
		vehicle.push(new Car('Легковик', getRandomInt(5, 25)))
	}
	let fuel = 0
	vehicle.forEach(e => {
		fuel += e.fuelConsumption()
	})
	return (
		<div>
			{vehicle.map((e, i) => {
				return <p key={i}>{e.show()}</p>
			})}
			<h1>Сумарна витрата пального: {fuel}</h1>
		</div>
	)
}

export default ResultLabFour