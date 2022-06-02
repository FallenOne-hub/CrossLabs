import { IonPage } from '@ionic/react'
import HeaderContainer from "../../components/HeaderContainer"
import ContentContainer from "../../components/ContentContainer"
import FormTwo from '../../components/lab1/FormTwo'

const task = 'Підрахуйте добуток цілих чисел на заданому проміжку чисел[a, b], парних і кратних 8.'

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <HeaderContainer labNumber={'1'} />
            <ContentContainer taskNumber={'2'} taskText={task}
                childComp={<FormTwo />} resultId={'resultTwo'} />
        </IonPage>
    )
}

export default Tab2

