import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ResultContainerOne from "./ResultContainerOne"

const FormOne: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<number>()
    const [secondNumber, setSecondNumber] = useState<number>()
    const [thirdNumber, setThirdNumber] = useState<number>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        ReactDOM.render(<ResultContainerOne
            first={firstNumber || 0}
            second={secondNumber || 0}
            third={thirdNumber || 0} />,
            document.getElementById('resultOne'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <IonItem>
                <IonLabel position="floating">Перше число:</IonLabel>
                <IonInput type="number" id="first" required value={firstNumber}
                    onIonChange={e => setFirstNumber(parseInt(e.detail.value!, 10))} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Друге число:</IonLabel>
                <IonInput type="number" id="second" required value={secondNumber}
                    onIonChange={e => setSecondNumber(parseInt(e.detail.value!, 10))} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Третє число:</IonLabel>
                <IonInput type="number" id="third" required value={thirdNumber}
                    onIonChange={e => setThirdNumber(parseInt(e.detail.value!, 10))} />
            </IonItem>
            <IonButton expand="block" type="submit">Розрахунок</IonButton>
        </form>
    )
}

export default FormOne