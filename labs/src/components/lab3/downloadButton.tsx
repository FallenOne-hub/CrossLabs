import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import RenderJSON from './renderJSON'

const DownloadButton: React.FC = () => {
	return (
		<div>
			<IonItem>
				<IonLabel position="floating">Число:</IonLabel>
				<IonInput id='lab3Number' />
			</IonItem>
			<IonButton expand="block" style={{ marginTop: '25px' }} onClick={RenderJSON}>
				Завантажити
			</IonButton>
		</div>
	)
}

export default DownloadButton