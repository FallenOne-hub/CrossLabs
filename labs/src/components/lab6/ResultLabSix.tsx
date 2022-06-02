import InsuranceCompany from '../../classes/InsuranceClass'
import OilGasCompany from '../../classes/oilgasClass'
import Organisation from '../../classes/organisationClass'
import Plant from '../../classes/plantClass'

const ResultLabSix: React.FC = () => {
	const container: any = []
	const num = parseInt((document.getElementById('number') as HTMLInputElement).value)
	for (let i = 0; i < num; i++) {
		container.push(new Organisation('Organisation ' + i))
		container.push(new OilGasCompany('Oil and Gas Company ' + i))
		container.push(new InsuranceCompany('Insurance Company ' + i))
		container.push(new Plant('Plant ' + i))
	}
	return (
		<div>
			{container.map((e: any, i: any) => {
				return <h2 key={i}>{e.show()}</h2>
			})}
		</div>
	)
}

export default ResultLabSix