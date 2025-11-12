import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './componentes/Saludo';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola, <Saludo nombre="Ale" />!</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
      </header>
    </div>
  )
}

export default App
