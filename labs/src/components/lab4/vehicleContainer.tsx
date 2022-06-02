import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { renderResultLabFour } from './renderResultLabFour'

const VehicleContainer: React.FC = () => {
	return (
		<div>
			<IonItem>
				<IonLabel position="floating">Кількість:</IonLabel>
				<IonInput type='number' id='vehicleNumber' value='5' min='5' />
			</IonItem>
			<IonButton expand="block" style={{ marginTop: '25px' }} onClick={renderResultLabFour}>
				Розрахунок
			</IonButton>
		</div>
	)
}

export default VehicleContainer