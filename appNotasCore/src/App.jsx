  import { useState } from 'react'
  import './App.css'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NoteForms from './components/NoteForms'
import Filtro from './components/Filtro'
import Note from './components/Note'

  function App() {
    const [listnotes, setlistNotes] = useState([])
    const [filter,setFilter] = useState('')

    const listFiltered = !filter ? listnotes : listnotes.filter(note => note.priority === filter);

    return (
      <div className='card' style={{width:'20rem'}}>
        <div className='card-header'>
              <h1>Notas</h1>
              <NoteForms listnotes={listnotes} setlistNotes= {setlistNotes}/>
        </div>
        <div className='card-body'>
          <Filtro filter={filter} setFilter={setFilter}/>
          {listnotes.map((note,index) => <Note note={note.note} priority = {note.priority} listnotes = {listnotes} setlistNotes={setlistNotes} index={index}/>)}
        </div>
        <div className='card-footer'>
          
        </div>
        </div>
    )
  }

  export default App
