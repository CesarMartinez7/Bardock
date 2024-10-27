import React, { useEffect, useState } from "react";

function FetchingData() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Definir una función async para manejar la llamada a la API
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch("http://localhost:5174/datos");
        const data = await respuesta.json();
        setDatos(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="grid">
      {datos.map((dataClean, index) => (
        <div className="cell box" key={index}>
          <h1 className="title">
            {dataClean.descripcion_activo.toUpperCase()}
          </h1>
          <p>{dataClean.periodicidad_mantenimiento}</p>
          <p>{dataClean.fecha_compra}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchingData;
