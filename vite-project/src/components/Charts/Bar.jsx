import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas y elementos necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);




// typing = "Avaluo", title = "Avaluo", ejeX = "Producto", dataKey = "Avaluo"

const BarChart = ({ table = "bodega", }) => {
  // TableSearch
  const [tableSearch,setTableSearch] = useState("activo")
  const onSubmitTableSearch = (e) => {
    e.preventDefault()
    const table = e.target.elements.tablesearch.value.toLowerCase()
    console.log(table)
    setTableSearch(e => e = table)
    console.log(tableSearch)
    
  }


  /// Pasar Reglas al los Graficos
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
    if (reglaEncontrada) {
      console.log("Encontrado");
      return [reglaEncontrada.title, reglaEncontrada.ejex, reglaEncontrada.dataKey];
    } else {
      console.log("No encontrado");
      return null;
    }
  };

  // Aqui viene el resultado del reglador que hara que se muestre los atributos que pasaran al Grafico
  const regladorClean = Reglador(tableSearch);
  // regladorClean[0] = "Title"
  // regladorClean[1] = "EjeX"
  // regladorClean[2] = "Datakey o Eje y"


  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: regladorClean[0],
        data: [],
        backgroundColor: "rgba(46, 51, 61,0.8)",
        borderColor: "rgba(46, 51, 61,1)",
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
      console.table(responseData)
      // Usar dataKey para obtener los datos
      setData({
        labels: responseData.map((item) => item[regladorClean[1]]),
        datasets: [
          {
            label: regladorClean[0],
            data: responseData.map((item) => item[regladorClean[2]]),  // Usar dataKey aquí, tiene que se notacion de corchetes por reglas de Js.
            backgroundColor: "rgba(40, 51, 61,0.8)",
            borderColor: "rgba(46, 51, 61,0.1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    if(regladorClean){
      fetchDatos()
    }
  }, [tableSearch]);

  return (
    <div className="container">
      <form onSubmit={onSubmitTableSearch}>
        <input className='input'name='tablesearch'></input>
      </form>
      <h2 className='is-size-6'>Gráfico de la Tabla: {tableSearch.toLocaleUpperCase()}</h2>
      <p className='content is-size-7'>Puedes poner el nombre de la tabla para personalizar la respuesta de ella.</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
