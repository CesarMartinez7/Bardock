import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas y elementos necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Reglas = [
  { table: "activo", title: "Avaluo", ejex: "Producto", dataKey: "avaluo" },
  { table: "articulo", title: "Avaluo", ejex: "descripcion", dataKey: "estado" },
];

const reglador = (tabla) => {
  const reglaEncontrada = Reglas.find((value) => value.table === tabla);
  if (reglaEncontrada) {
    console.log("Encontrado");
    console.log(reglaEncontrada.title, reglaEncontrada.ejex, reglaEncontrada.dataKey);
    return [reglaEncontrada.title, reglaEncontrada.ejex, reglaEncontrada.dataKey];
  } else {
    console.log("No encontrado");
    return null;
  }
};

const final = reglador("activo");



const BarChart = ({ table = reglador(table) ,typing = table[0], title =table[0] , ejeX = table[1], dataKey = table[2] }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: title,
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
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
      const respuesta = await fetch("http://localhost:3000/api/datos");
      const responseData = await respuesta.json();

      // Usar dataKey para obtener los datos
      setData({
        labels: responseData.map((item) => item[ejeX]),
        datasets: [
          {
            label: title,
            data: responseData.map((item) => item[dataKey]),  // Usar dataKey aquí, tiene que se notacion de corchetes por reglas de Js.
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchDatos();
  }, []);

  return (
    <div className="container">
      <h2 className='is-size-6'>Gráfico de {typing}</h2>
      <p className='content is-size-7'>Puedes poner el nombre de la tabla para personalizar la respuesta de ella.</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
