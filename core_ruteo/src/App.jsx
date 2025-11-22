import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Art from './components/Art'
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // optional,

function App() {
  const listagaleria =[
    {name: 'Fuera de este mundo', autor:'Shira',img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGs4OWFzbDRhMGh6OWgzaGM3eGpzazFmanFya2t2NWF5Y2QwY3d6ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4y6DqPvlICp5S/giphy.gif'},
    {name: 'Pacientes holograficos', autor:'Titi',img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmx0NXFoaTVrM2liZWZsN25xNnl4eXV3a28zMXdwNHMzczBwaW5jOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYSryDg63YEmXVS/giphy.gif'},
    {name: 'Lo alto del dinero', autor:'Obama',img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW4zZ3RkZDJtYW81M250NnoxNG41dHE5d2RnZzA1MGQ1c2E5MDRjaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HWLa2UnmEsc2qpYu8f/giphy.gif'},
    {name: 'Nada como la privacidad del hogar', autor:'Pantera',img:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW4zZ3RkZDJtYW81M250NnoxNG41dHE5d2RnZzA1MGQ1c2E5MDRjaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hQu3aAkP2I0bn3k1hl/giphy.gif'},
    {name: 'Moverse en la ciudad', autor:'Yuki',img:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXljM3FrcjhjZnptbnowMWpucHZ6dG9sdnVueTF6a3pqZDRtcGpuayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YBkTzzyNewWtUANTso/giphy.gif'},
    {name: 'Diversion de otro planeta', autor:'Martin',img:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bXcxYTk3aDZ0bmRmaWd2NHBrNTYyeWs2c3ZrOGZrMmU0ZTMyanNpaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LSjCd8Lce6QwvU1vL5/giphy.gif'},
    {name: 'Espectaculo de la galaxia', autor:'Stefi',img:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aXRveW50MHZqODVia2hjcWF1bHJsYndlOXI0ajJ3aWM2ZXExNnY1aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vNFh05X0h31pPjCMSP/giphy.gif'},
    {name: 'Taxistas', autor:'Julia',img:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dXp6dnNmeXVjc2dua3JmbGM2dG90cGVjcGdiNjJuN3BjYWF3ZGIxNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bKypbxqGQZNq9RoXmQ/giphy.gif'},
  ]

  return (
    <>
      <Routes>
        <Route 
          path="/home" 
          element={<Home listagaleria={listagaleria} />} 
        />
      <Route 
        path="/art/:id" 
        element={<Art listagaleria={listagaleria} />} 
      />
      </Routes>
    </>
  )
}

export default App
