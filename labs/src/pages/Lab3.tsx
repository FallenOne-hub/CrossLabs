import { IonPage } from '@ionic/react'
import HeaderContainer from "../components/HeaderContainer"
import ContentContainer from "../components/ContentContainer"
import DownloadButton from '../components/lab3/downloadButton'

const task = 'Читання даних з JSON файлу.'

const Lab3: React.FC = () => {
	return (
		<IonPage>
			<HeaderContainer labNumber={'3'} />
			<ContentContainer taskNumber={''} taskText={task}
				childComp={<DownloadButton />} resultId={'resultLabThree'} />
		</IonPage>
	)
}

export default Lab3