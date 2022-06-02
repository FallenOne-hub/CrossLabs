import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ResultContainerThree from "./ResultContainerThree"

const FormThree: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<number>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        ReactDOM.render(<ResultContainerThree
            first={firstNumber || 0} />,
            document.getElementById('resultThree'))
    }

    return (
        <form onSubmit={handleSubmit}>
            <IonItem>
                <IonLabel position="floating">Розмірність матриці:</IonLabel>
                <IonInput type="number" id="first" required value={firstNumber}
                    onIonChange={e => setFirstNumber(parseInt(e.detail.value!, 10))} />
            </IonItem>
            <IonButton expand="block" type="submit">Розрахунок</IonButton>
        </form>
    )
}

export default FormThree