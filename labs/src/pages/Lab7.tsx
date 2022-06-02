import { IonPage } from '@ionic/react'
import HeaderContainer from "../components/HeaderContainer"
import ContentContainer from "../components/ContentContainer"
import LabSevenContainer from '../components/lab7/LabSevenContainer'

const task = 'Провести табулювання, обрахувати за допомогою циклу та рекурсії функцію.'

const Lab7: React.FC = () => {
	return (
		<IonPage>
			<HeaderContainer labNumber={'7'} />
			<ContentContainer taskNumber={''} taskText={task}
				childComp={<LabSevenContainer />} resultId={'resultLabSeven'} />
		</IonPage>
	)
}

export default Lab7