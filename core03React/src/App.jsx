import "./App.css";
import DetalleLista from "./components/DetalleLista";
import DetalleListaProps from "./components/DetalleListaProps";

function App() {
  let persona = {
    nombre: "Emilia",
    apellido: "Mernes",
    edad: 50,
  };

  return (
    <>
      <ul>
        <DetalleLista nombre="stefo" apellido="suarez" />
        <DetalleListaProps nombre="chira" apellido="suarez" edad={50} />
        <DetalleListaProps
          nombre={persona.nombre}
          apellido={persona.apellido}
          edad={persona.edad}
        />
      </ul>
    </>
  );
}

export default App;
