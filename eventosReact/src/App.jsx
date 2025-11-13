import './App.css';

function App() {
  const impresion = () =>{
    console.log("impresion")
  }
  return (
    <>
      <h1>OnClick</h1>
      <button onClick={() => console.log("El botón está funcionando")}>OnClick</button>
      <button onClick={() => alert("El botón está funcionando")}>OnClick</button>
      <hr/>
      <h1>OnmouseEnter && OnMouseout</h1>
      <div style={{border: "2px solid white", height: "2rem"}} onMouseEnter={() => console.log('adentro')} onMouseOut={() => console.log('afuera')}></div>
      <hr/>
      <h1>OnChange</h1>
      <label htmlFor='gender'>Genero:</label>
      <select name='gender' id='gender' onChange={(e)=> alert(`Seleccionaste: ${e.target.value}`)}>
        <option value='fame'>Fame</option>
        <option value='famela'>famela</option>
        </select>
        <hr/>
        <h1>Oninput</h1>
        <label htmlFor='nombre'></label>
        <input type='text' name='nombre' id='nombre' onInput={(e) => console.log(e.target.value)}/>
        <hr/>
        <h1>Funcion Propia</h1>
        <button onClick={() => impresion()}>Ejecutar</button>
    </>
  );
}

export default App;
