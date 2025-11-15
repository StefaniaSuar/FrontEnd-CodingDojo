  import { useState } from 'react'
  import './App.css'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NoteForms from './components/NoteForms'

  function App() {
    const [listnotes, setlistNotes] = useState([])

    return (
      <div className='card' style={{width:'20rem'}}>
        <div className='card-header'>
              <h1>Notas</h1>
              <NoteForms listnotes={listnotes} setlistNotes= {setlistNotes}/>
        </div>
        <div className='card-body'>

        </div>
        <div className='card-footer'>
          
        </div>
        </div>
    )
  }

  export default App
