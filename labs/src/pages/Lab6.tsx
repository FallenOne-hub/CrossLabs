import { IonPage } from '@ionic/react'
import HeaderContainer from "../components/HeaderContainer"
import ContentContainer from "../components/ContentContainer"
import LabSixContainer from '../components/lab6/LabSixContainer'

const task = 'Організація, страхова компанія, нафтогазова компанія, завод.'

const Lab6: React.FC = () => {
	return (
		<IonPage>
			<HeaderContainer labNumber={'6'} />
			<ContentContainer taskNumber={''} taskText={task}
				childComp={<LabSixContainer />} resultId={'resultLabSix'} />
		</IonPage>
	)
}

export default Lab6