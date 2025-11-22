import { useState } from 'react'
import './App.css'
import ExtractDataRM from './components/extractDataRM'

function App() {
  const [list, setList] = useState([])


  return (
    <>
      <h1> APis Fetch</h1>
      <ExtractDataRM setList={setList}/>
      {list.map((character,index) => <img src={character.image} alt={character.name}/>)}
    </>
  )
}

export default App
