import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ResultContainerLabTwo from './ResultContainerLabTwo'

const SecondLabForm: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<number>()
    const [secondNumber, setSecondNumber] = useState<number>()
    const [thirdNumber, setThirdNumber] = useState<number>()
    const [fourthNumber, setFourthNumber] = useState<number>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        ReactDOM.render(<ResultContainerLabTwo
            first={firstNumber || 0}
            second={secondNumber || 0}
            third={thirdNumber || 0}
            fourth={fourthNumber || 0} />,
            document.getElementById('resultLabTwo'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <IonItem>
                <IonLabel position="floating">Xn: (2.45)</IonLabel>
                <IonInput type="number" step="0.1" id="first" required value={firstNumber}
                    onIonChange={e => setFirstNumber(parseFloat(e.detail.value!))} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Xk: (25.2)</IonLabel>
                <IonInput type="number" step="0.1" id="second" required value={secondNumber}
                    onIonChange={e => setSecondNumber(parseFloat(e.detail.value!))} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">a: (0.1)</IonLabel>
                <IonInput type="number" step="0.1" id="third" required value={thirdNumber}
                    onIonChange={e => setThirdNumber(parseFloat(e.detail.value!))} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">h: (0.1)</IonLabel>
                <IonInput type="number" step="0.1" id="fourth" required value={fourthNumber}
                    onIonChange={e => setFourthNumber(parseFloat(e.detail.value!))} />
            </IonItem>
            <IonButton expand="block" type="submit">Розрахунок</IonButton>
        </form>
    )
}

export default SecondLabForm