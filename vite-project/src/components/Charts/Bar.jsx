import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas y elementos necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ table = "bodega" }) => {
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
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)", // Indigo-600
          "rgba(255, 99, 132, 0.7)", // Rojo
          "rgba(54, 162, 235, 0.7)", // Azul
          "rgba(255, 206, 86, 0.7)", // Amarillo
          "rgba(75, 192, 192, 0.7)", // Verde claro
          "rgba(153, 102, 255, 0.7)", // Violeta
        ],
        borderColor: "rgba(0, 0, 0, 1)", // Color del borde
        borderWidth: 1,
      },
    ],
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
            backgroundColor: [
              "rgba(99, 102, 241, 0.7)", // Indigo-600
              "rgba(255, 99, 132, 0.7)", // Rojo
              "rgba(54, 162, 235, 0.7)", // Azul
              "rgba(255, 206, 86, 0.7)", // Amarillo
              "rgba(75, 192, 192, 0.7)", // Verde claro
              "rgba(153, 102, 255, 0.7)", // Violeta
            ],
            borderColor: "rgba(0, 0, 0, 1)", // Color del borde
            borderWidth: 1,
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
          <input className='input' name='tablesearch' placeholder="Buscar tabla" />
        </form>
        <h2 className='font-light'>Gráfico <span className="font-light">{tableSearch.toLocaleUpperCase()}</span></h2>
        <Bar data={data} options={options} />
      </div>
  );
};

export default BarChart;
