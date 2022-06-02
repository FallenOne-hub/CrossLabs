import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ResultContainerTwo from "./ResultContainerTwo"

const FormTwo: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<number>()
    const [secondNumber, setSecondNumber] = useState<number>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        ReactDOM.render(<ResultContainerTwo
            first={firstNumber || 0}
            second={secondNumber || 0} />,
            document.getElementById('resultTwo'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <IonItem>
                <IonLabel position="floating">Початок проміжку:</IonLabel>
                <IonInput type="number" id="first" required value={firstNumber}
                    onIonChange={e => setFirstNumber(parseInt(e.detail.value!, 10))} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Кінець проміжку:</IonLabel>
                <IonInput type="number" id="second" required value={secondNumber}
                    onIonChange={e => setSecondNumber(parseInt(e.detail.value!, 10))} />
            </IonItem>
            <IonButton expand="block" type="submit">Розрахунок</IonButton>
        </form>
    )
}

export default FormTwo