import { IonPage } from '@ionic/react'
import HeaderContainer from "../../components/HeaderContainer"
import ContentContainer from "../../components/ContentContainer"
import FormThree from "../../components/lab1/FormThree"

const task = 'Згенерувати матрицю розміром NxN. Знайти добуток кожного стовпчику матриці. Виокремити стовпчики за допомогою кольору'

const Tab3: React.FC = () => {
    return (
        <IonPage>
            <HeaderContainer labNumber={'1'} />
            <ContentContainer taskNumber={'3'} taskText={task}
                childComp={<FormThree />} resultId={'resultThree'} />
        </IonPage>
    )
}

export default Tab3