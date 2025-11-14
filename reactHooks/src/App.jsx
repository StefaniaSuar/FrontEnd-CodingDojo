import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState(0);

  const supersData = [{name: "Flash", description: "I am the fastest man alive"}, {name: "WonderWoman", description: "I am the fastest woman alive"}]

  return (
    <>
      <h1>Contador:</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Contar</button>

      <hr />
      <h1>Mensaje:</h1>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje("hola")}>Mensaje</button>

      <hr/>
      {supersData.map((superx,index)=> <div><p>{superx.name}</p><p>{superx.description}</p></div> )}
    </>
  );
}

export default App;
