import { IonPage } from '@ionic/react'
import HeaderContainer from "../../components/HeaderContainer"
import ContentContainer from "../../components/ContentContainer"
import FormOne from "../../components/lab1/FormOne"

const task = 'Задано три числа. Якщо всі вони парні, то знайти їх добуток. В іншому випадку – квадрат суми.'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <HeaderContainer labNumber={'1'} />
      <ContentContainer taskNumber={'1'} taskText={task}
        childComp={<FormOne />} resultId={'resultOne'} />
    </IonPage>
  )
}

export default Tab1
