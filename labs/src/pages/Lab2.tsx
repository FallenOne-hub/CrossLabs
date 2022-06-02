import { IonPage } from '@ionic/react'
import HeaderContainer from "../components/HeaderContainer"
import ContentContainer from "../components/ContentContainer"
import SecondLabForm from '../components/lab2/SecondLabForm'

const task = 'Створити додаток для табулювання і виведення на екран значення функції, ' +
    'також побудувати графік функції.'

const Lab2: React.FC = () => {
    return (
        <IonPage>
            <HeaderContainer labNumber={'2'} />
            <ContentContainer taskNumber={' '} taskText={task}
                childComp={<SecondLabForm />} resultId={'resultLabTwo'} />
        </IonPage>
    )
}

export default Lab2