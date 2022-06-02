import {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
} from "@ionic/react"

const Menu: React.FC = () => {
    return (
        <IonMenu menuId="first" contentId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Меню</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem href="lab1/tab1">Лабораторна робота №1</IonItem>
                    <IonItem href="/lab2">Лабораторна робота №2</IonItem>
                    <IonItem href="/lab3">Лабораторна робота №3</IonItem>
                    <IonItem href="/lab4">Лабораторна робота №4</IonItem>
                    <IonItem href="/lab6">Лабораторна робота №6</IonItem>
                    <IonItem href="/lab7">Лабораторна робота №7</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}
export default Menu