import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const Pastel = ({ table = "bodega" }) => {
  const [tableSearch, setTableSearch] = useState("activo");

  const onSubmitTableSearch = (e) => {
    e.preventDefault();
    const table = e.target.elements.tablesearch.value.toLowerCase();
    setTableSearch(table);
  };

  const Reglas = [
    {
      table: "activo",
      title: "Avaluo",
      ejex: "descripcion_activo",
      dataKey: "avaluo",
    },
    {
      table: "articulo",
      title: "Avaluo",
      ejex: "descripcion",
      dataKey: "estado",
    },
    {
      table: "acta_asignacion",
      title: "Fecha Acta",
      ejex: "observacion",
      dataKey: "fecha_registro",
    },
    {
      table: "bodega",
      title: "Bodega",
      ejex: "descripcion",
      dataKey: "prefijo",
    },
    {
      table: "Categoria_Articulo",
      title: "Categoria",
      ejex: "descripcion",
      dataKey: "estado",
    },
    {
      table: "centro_costo",
      title: "centro_Costo",
      ejex: "descripcion",
      dataKey: "Estado",
    },
  ];

  const Reglador = (tabla) => {
    const reglaEncontrada = Reglas.find((value) => value.table === tabla);
    return reglaEncontrada
        ? [reglaEncontrada.title, reglaEncontrada.ejex, reglaEncontrada.dataKey]
        : null;
  };

  const regladorClean = Reglador(tableSearch);

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: regladorClean ? regladorClean[0] : "Datos",
        data: [],
        backgroundColor: [
          "rgba(0, 136, 254, 0.7)", // Azul con opacidad
          "rgba(0, 196, 159, 0.7)", // Verde con opacidad
          "rgba(255, 187, 40, 0.7)", // Amarillo con opacidad
          "rgba(255, 128, 66, 0.7)", // Naranja con opacidad
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)", // Color del borde
          "rgba(255, 255, 255, 1)", // Color del borde
          "rgba(255, 255, 255, 1)", // Color del borde
          "rgba(255, 255, 255, 1)", // Color del borde
        ],
        borderWidth: 2, // Ancho del borde
      },
    ],
  });

  const fetchDatos = async () => {
    try {
      const respuesta = await fetch(
          `http://localhost:3000/api/datos?table=${tableSearch}`
      );
      const responseData = await respuesta.json();
      setData({
        labels: responseData.map((item) => item[regladorClean[1]]),
        datasets: [
          {
            label: regladorClean[0],
            data: responseData.map((item) => item[regladorClean[2]]),
            backgroundColor: [
              "rgba(0, 136, 254, 0.7)", // Azul con opacidad
              "rgba(0, 196, 159, 0.7)", // Verde con opacidad
              "rgba(255, 187, 40, 0.7)", // Amarillo con opacidad
              "rgba(255, 128, 66, 0.7)", // Naranja con opacidad
            ],
            borderColor: [
              "rgba(255, 255, 255, 1)", // Color del borde
              "rgba(255, 255, 255, 1)", // Color del borde
              "rgba(255, 255, 255, 1)", // Color del borde
              "rgba(255, 255, 255, 1)", // Color del borde
            ],
            borderWidth: 2, // Ancho del borde
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
      <div className="flex flex-col gap-2">
        <h2 className="font-light">Graph</h2>
        <form onSubmit={onSubmitTableSearch}>
          <input
              className="outline-none pl-3 rounded-md w-full pt-2 pb-2 border transition-shadow duration-100"
              name="tablesearch"
              placeholder="Search table"
          />
        </form>
        <div className="w-80 h-80 p-4">
          <Pie
              data={data}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                cutout: '70%',
              }}
          />
        </div>
      </div>
  );
};

export default Pastel;
