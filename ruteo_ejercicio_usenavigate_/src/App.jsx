import { useState } from 'react'
import './App.css'
import {Routes,Route, Link, NavLink} from 'react-router-dom' 
import Card from './components/Card'
import Pokemons from './components/Pokemons'
import Notefound from './components/Notefound'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
    <header>
      <h1>use navigate</h1>
      <Link to="/welcome">Welcome</Link>
      <Link to="/">Raiz</Link>
      <NavLink to="/welcome" className={({ isActive }) => (isActive ? "active" : "")}>active</NavLink>


    </header>
    <main>
      < Routes >
          <Route path='/' element = {<h2>Esta es la second pagina</h2>}></Route>
          <Route path='/welcome' element = {<h2>holas bienvenido</h2>}></Route>
          <Route path='*' element={<Notefound/>}></Route>
          <Route path='/Pokemons' element={<Pokemons/>}></Route>
      </Routes>
    </main>

    </>
  )
}

export default App
