import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ResultLabSeven from './ResultLabSeven'

const LabSevenContainer: React.FC = () => {
	const [firstNumber, setFirstNumber] = useState<number>()
	const [secondNumber, setSecondNumber] = useState<number>()
	const [thirdNumber, setThirdNumber] = useState<number>()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		ReactDOM.render(<ResultLabSeven
			first={firstNumber || 0}
			second={secondNumber || 0}
			third={thirdNumber || 0} />,
			document.getElementById('resultLabSeven'))
	}

	return (
		<form onSubmit={handleSubmit}>
			<IonItem>
				<IonLabel position="floating">Xn:</IonLabel>
				<IonInput type="number" step="0.1" id="xn" required value={firstNumber}
					onIonChange={e => setFirstNumber(parseFloat(e.detail.value!))} />
			</IonItem>
			<IonItem>
				<IonLabel position="floating">Xk:</IonLabel>
				<IonInput type="number" step="0.1" id="xk" required value={secondNumber}
					onIonChange={e => setSecondNumber(parseFloat(e.detail.value!))} />
			</IonItem>
			<IonItem>
				<IonLabel position="floating">h:</IonLabel>
				<IonInput type="number" step="0.1" id="h" required value={thirdNumber}
					onIonChange={e => setThirdNumber(parseFloat(e.detail.value!))} />
			</IonItem>
			<IonButton expand="block" type="submit">Розрахунок</IonButton>
		</form>
	)
}

export default LabSevenContainer