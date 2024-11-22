import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ScatterChart = ({ table = "bodega" }) => {
  const [tableSearch, setTableSearch] = useState("activo");

  const onSubmitTableSearch = (e) => {
    e.preventDefault();
    const table = e.target.elements.tablesearch.value.toLowerCase();
    setTableSearch(table);
  };

  const Reglas = [
    { table: "activo", title: "Avaluo", ejex: "descripcion_activo", dataKey: "avaluo" },
    { table: "articulo", title: "Avaluo", ejex: "descripcion", dataKey: "estado" },
    { table: "acta_asignacion", title: "Fecha Acta", ejex: "observacion", dataKey: "fecha_registro" },
    { table: "bodega", title: "Bodega", ejex: "descripcion", dataKey: "prefijo" },
    { table: "Categoria_Articulo", title: "Categoria", ejex: "descripcion", dataKey: "estado" },
    { table: "centro_costo", title: "centro_Costo", ejex: "descripcion", dataKey: "Estado" },
  ];

  const Reglador = (tabla) => {
    const reglaEncontrada = Reglas.find((value) => value.table === tabla);
    return reglaEncontrada ? [reglaEncontrada.title, reglaEncontrada.ejex, reglaEncontrada.dataKey] : null;
  };

  const regladorClean = Reglador(tableSearch);

  const [data, setData] = useState({
    datasets: [
      {
        label: regladorClean ? regladorClean[0] : "Sin datos",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  });

  const fetchDatos = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/datos?table=${tableSearch}`);
      const responseData = await respuesta.json();
      setData({
        datasets: [
          {
            label: regladorClean[0],
            data: responseData.map((item) => ({
              x: item[regladorClean[1]], // Eje X
              y: item[regladorClean[2]], // Eje Y
            })),
            backgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    if (regladorClean) {
      fetchDatos();
    }
  }, [tableSearch]);

  return (
    <div className="container">
      <form onSubmit={onSubmitTableSearch}>
        <input className='border p-2 focus:outline-none rounded-md' name='tablesearch' placeholder="Buscar tabla" />
      </form>
      <h2 className='font-light'>Gráfico de Dispersión <span className="font-light">{tableSearch.toUpperCase()}</span></h2>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;
