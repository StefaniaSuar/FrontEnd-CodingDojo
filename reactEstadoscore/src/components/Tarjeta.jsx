import styles from "./../css/Tarjeta.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

const Tarjeta = ({ name, price, description, stock }) => {
  const [stockc, setStockc] = useState(stock);

  const contadorStock = () => {
    if (stockc > 0) {
      setStockc(stockc - 1);
    }
  };
  return (
    <div className={`card shadow-sm bg-light ${styles.Tarjeta}`}>
      <div className="card-body">
        <strong>{name}</strong>
        <p className={styles.price}>$ {price}</p>
        <p>{description}</p>

        {stockc > 0 ? (
          <p className={styles.stock}>En stock {stockc} </p>
        ) : (
          <p className={styles.agotado}>Agotado</p>
        )}
        <button
          onClick={contadorStock}
          disabled={stockc === 0}
          className="btn btn-primary"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Tarjeta;
