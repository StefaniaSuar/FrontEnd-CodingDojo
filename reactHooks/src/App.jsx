import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState(0);

  return (
    <>
      <h1>Contador:</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Contar</button>

      <hr />
      <h1>Mensaje:</h1>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje("hola")}>Mensaje</button>
    </>
  );
}

export default App;
