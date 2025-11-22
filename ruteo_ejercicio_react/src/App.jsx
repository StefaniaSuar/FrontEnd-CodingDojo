import { useState } from 'react'
import './App.css'
import {Routes,Route, Link, NavLink} from 'react-router-dom' 
import Card from './components/Card'
import Pokemons from './components/Pokemons'
import Notefound from './components/Notefound'

function App() {

  return (
    <>
    <header>
      <h1>mi primera web con react router</h1>
      <Link to="/welcome">Welcome</Link>
      <Link to="/">Raiz</Link>
      <Link to="/Card">Card</Link>
      <Link to="/pokemons">Pokemons</Link>
      <NavLink to="/welcome" className={({ isActive }) => (isActive ? "active" : "")}>active</NavLink>


    </header>
    <main>
      < Routes >
          <Route path='/' element = {<h2>Esta es la pagina raiz</h2>}></Route>
          <Route path='/welcome' element = {<h2>holas bienvenido</h2>}></Route>
          <Route path='/Card' element = {<Card/>}></Route>
          <Route path='/pokemons/:name' element={<Pokemons/>}>
            <Route path=':type' element={<Pokemons/>}></Route>
          </Route>
          <Route path='*' element={<Notefound/>}></Route>
      </Routes>
    </main>

    </>
  )
}

export default App
