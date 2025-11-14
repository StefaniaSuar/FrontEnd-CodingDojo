import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
import Texto from "./components/Texto";

function App() {
  return (
    <>
      <Texto />

      <div className="tarjetas-container">
        <Tarjeta
          name="Laptop"
          price={1500}
          description="Una potente laptop para trabajar y jugar."
          stock={10}
        />

        <Tarjeta
          name="Smartphone"
          price={800}
          description="Un smartphone de última generación con una de las mejores cámaras."
          stock={0}
        />

        <Tarjeta
          name="Auriculares"
          price={200}
          description="Auriculares con cancelación de ruido. No escucharás nada a tu alrededor."
          stock={5}
        />

        <Tarjeta
          name="Monitor"
          price={300}
          description="Monitor 4K para una experiencia visual increíble."
          stock={7}
        />
      </div>
    </>
  );
}

export default App;
