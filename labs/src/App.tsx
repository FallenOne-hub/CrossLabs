import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { flash, flower, triangle } from 'ionicons/icons'
import Tab1 from './pages/tabs/Tab1'
import Tab2 from './pages/tabs/Tab2'
import Tab3 from './pages/tabs/Tab3'
import Menu from './components/Menu'
import Lab2 from './pages/Lab2'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Lab3 from './pages/Lab3'
import Lab4 from './pages/Lab4'
import Lab6 from './pages/Lab6'
import Lab7 from './pages/Lab7'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu />
      <IonRouterOutlet id="main">
        <Route exact path="/lab1/tab1" component={Tab1} />
        <Route exact path="/lab2" component={Lab2} />
        <Route exact path="/lab3" component={Lab3} />
        <Route exact path="/lab4" component={Lab4} />
        <Route exact path="/lab6" component={Lab6} />
        <Route exact path="/lab7" component={Lab7} />
        <Route exact path="/lab1/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/lab1/tab2">
          <Tab2 />
        </Route>
        <Route exact path="/lab1/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/lab1/tab1" />
        </Route>
        <Route exact path="">
          <Redirect to="/lab1/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App