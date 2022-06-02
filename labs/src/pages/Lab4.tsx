import { IonPage } from '@ionic/react'
import HeaderContainer from "../components/HeaderContainer"
import ContentContainer from "../components/ContentContainer"
import VehicleContainer from '../components/lab4/vehicleContainer'

const task = 'Скласти програму з абстрактним батьківським класом і двома обєктами – нащадками.\n' +
	'Реалізувати циклічне виведення параметрів обєктів,\n' +
	'використовуючи поліморфний контейнер - масив обєктів базового класу(кількість обєктів > = 5).\n' +
	'Організувати обчислення сумарної витрати пального.'

const Lab4: React.FC = () => {
	return (
		<IonPage>
			<HeaderContainer labNumber={'4'} />
			<ContentContainer taskNumber={'1 | 2'} taskText={task}
				childComp={<VehicleContainer />} resultId={'resultLabFour'} />
		</IonPage>
	)
}

export default Lab4