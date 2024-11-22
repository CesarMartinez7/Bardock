import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AreaChart = ({ table = "bodega" }) => {
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
    labels: [],
    datasets: [
      {
        label: regladorClean ? regladorClean[0] : "Sin datos",
        data: [],
        fill: true, // Llenar el área
        backgroundColor: "rgba(75, 192, 192, 0.5)", // Color de fondo
        borderColor: "rgba(75, 192, 192, 1)", // Color de línea
        borderWidth: 2,
      },
    ],
  });

  const fetchDatos = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/datos?table=${tableSearch}`);
      const responseData = await respuesta.json();
      setData({
        labels: responseData.map((item) => item[regladorClean[1]]),
        datasets: [
          {
            label: regladorClean[0],
            data: responseData.map((item) => item[regladorClean[2]]),
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
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
      <h2 className='font-light'>Gráfico de Área <span className="font-light">{tableSearch.toUpperCase()}</span></h2>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default AreaChart;
