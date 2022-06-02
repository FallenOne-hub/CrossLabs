import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { RenderResultLabSix } from './RenderResultLabSix'

const LabSixContainer: React.FC = () => {
	return (
		<div>
			<IonItem>
				<IonLabel position="floating">Кількість:</IonLabel>
				<IonInput type='number' id='number' value='5' min='5' />
			</IonItem>
			<IonButton expand="block" style={{ marginTop: '25px' }} onClick={RenderResultLabSix}>
				Розрахунок
			</IonButton>
		</div>
	)
}

export default LabSixContainer