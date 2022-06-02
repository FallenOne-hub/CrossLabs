import { generateMatrix } from "../../functions/calculations"
import '../../pages/tabs/Tab1.css'
import { IonCol, IonGrid, IonRow } from "@ionic/react"

interface ContainerProps {
    first: number
}

const ResultContainerThree: React.FC<ContainerProps> = ({ first }) => {
    const { matrix, arr } = generateMatrix(first)
    return (
        <IonGrid className="result-container">
            {matrix.map((row, i) => (
                <IonRow key={i}>
                    {row.map((col, j) => {
                        if (j % 2 === 0) return <IonCol key={j} style={{ backgroundColor: 'red' }}>{col}</IonCol>
                        return <IonCol key={j} style={{ backgroundColor: 'yellow' }}>{col}</IonCol>
                    })}
                </IonRow>
            ))}
            <p style={{ marginTop: '10px' }}>Добуток кожного стовпчика: {arr.toString()}</p>
        </IonGrid>
    )
}

export default ResultContainerThree