import React, { useEffect } from "react";
import { useState } from "react";

function FetchingData() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/datos")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setDatos(data);
        console.table(data)
      });
  }, []);
  return (
    <div className="grid">
      {datos.map((dataClean, index) => (
        <div className="cell box" key={index}>
          <h1 className="title">{dataClean.descripcion_activo.toUpperCase()}</h1>
          <p>{dataClean.periodicidad_mantenimiento}</p>
          <p>{dataClean.fecha_compra}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchingData;
