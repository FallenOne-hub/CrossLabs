import {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar
} from "@ionic/react"

interface Props {
    labNumber: string
}

const HeaderContainer: React.FC<Props> = ({ labNumber }) => {
    return (
        <IonHeader>
            <IonToolbar style={{ 'color': 'red' }}>
                <IonTitle>Лабораторна робота №{labNumber}</IonTitle>
                <IonTitle>Виконав студент Удоденко Олександр | група КН-32</IonTitle>
            </IonToolbar>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonMenuButton color="light" menu="first" />
                </IonButtons>
                <IonTitle>Лабораторні роботи</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderContainer