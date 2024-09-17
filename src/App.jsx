import './App.css'
import CustomerAdd from './CustomerAdd'
import CustomerView from './CustomerView'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    
    <Provider store={store}>
      <>
      <h1>React Redux Customer Example</h1>
    <CustomerAdd/>
    <CustomerView/>
    </>
    </Provider>
      
  )
}

export default App
