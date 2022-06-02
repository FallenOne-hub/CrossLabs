import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonItem,
    IonText
} from "@ionic/react"

interface ParentCompProps {
    childComp: React.ReactNode
    taskNumber: string
    taskText: string
    resultId: string
}

const ContentContainer: React.FC<ParentCompProps> = props => {
    const { childComp, taskNumber, taskText, resultId } = props
    return (
        <IonContent fullscreen>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Завдання {taskNumber}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonText style={{ 'fontSize': '20px' }}>
                        {taskText}
                    </IonText>
                    {childComp}
                    <IonItem id={resultId} />
                </IonCardContent>
            </IonCard>
        </IonContent>
    )
}

export default ContentContainer