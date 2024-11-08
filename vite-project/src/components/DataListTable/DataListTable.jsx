import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState, useContext, createContext } from "react";
import "ag-grid-enterprise";
import { Data } from "../Icons/Logos.jsx";
import { FaSearch } from "react-icons/fa";

const TableOpcion = () => {
  const array = [
    {
      name: "Acta Asignacion",
      table: "Acta_Asignacion",
      description: "Registro de la asignación de un activo.",
    },
    {
      name: "Activo",
      table: "Activo",
      description: "Información sobre los activos de la organización.",
    },
    {
      name: "Articulo",
      table: "Articulo",
      description: "Detalles de los artículos gestionados.",
    },
    {
      name: "Bodega",
      table: "Bodega",
      description: "Información sobre los almacenes o bodegas.",
    },
    {
      name: "Categoria Articulos",
      table: "Categoria_Articulos",
      description: "Clasificación de los artículos por categorías.",
    },
    {
      name: "Centro de Costo",
      table: "Centro_de_Costo",
      description: "Divisiones para el control de costos.",
    },
    {
      name: "Detalles de acta de inventario",
      table: "Detalles_de_acta_de_inventario",
      description: "Información detallada de cada acta de inventario.",
    },
    {
      name: "Orden de Inventario",
      table: "Orden_de_Inventario",
      description: "Registros de las órdenes para realizar inventarios.",
    },
    {
      name: "Perfil",
      table: "Perfil",
      description: "Configuraciones y permisos de usuarios.",
    },
    {
      name: "Tipo de documentos",
      table: "Tipo_de_documentos",
      description:
        "Clasificación de los diferentes tipos de documentos utilizados.",
    },
    {
      name: "Stok",
      table: "Stok",
      description: "Registro de la cantidad de artículos en inventario.",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 grid-rows-3 place-content-center place-items-center p-1">
        {array.map((value, key) => (
          <article
            key={key}
            className="flex flex-col gap-1 border h-full w-full hover:bg-gray-50  border-gray-200 p-5 hover:z-50 transition duration-500 ease-out hover:shadow-md rounded-lg"
          >
            <h3 className="font-semibold text-2xl text-gray-800">{value.name}</h3>
            <p className="text-gray-600">{value.description}</p>
          </article>
        ))}
      </section>
    </>
  );
};

const Section = () => {
  const styles = {
    backgroundColor: "#6C63FF",
  };

  const handleClickData = () => {
    window.scrollTo({ behavior: "smooth", top: 1284 });
  };

  const handleClickBars = () => {
    window.scrollTo({ behavior: "smooth", top: 1966 });
  };

  return (
    <section className="flex flex-col md:flex-row gap-3 mt-14 p-0 lg:p-0">
      <div className=" content-center p-6">
        <h1 className="font-extrabold font-1 text-4xl">Soon</h1>
        <h2 className="font-light">you can see your data here</h2>
        <p className="w-4/5 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          sequi ducimus at ipsa optio quia aliquid voluptate magnam obcaecati,
          saepe nobis quis maxime. Fugiat deleniti perferendis sit distinctio
          facilis maxime..
        </p>
        <div className="flex gap-4 text-white mt-5">
          <button
            className="p-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-500 hover:shadow-lg "
            onClick={handleClickData}
          >
            Ver Datos
          </button>
          <button className="border-gray-200 hover:bg-gray-100 duration-500 hover:shadow-lg text-black border  p-2 rounded-md" onClick={handleClickBars}>
            Ver Graficos
          </button>
        </div>
      </div>
      <div className="column has-text-centered is-align-content-center">
        <Data width={350} height={350}></Data>
      </div>
    </section>
  );
};

const Search = ({ onSearch }) => {
  const tableInput = useRef(null);

  window.addEventListener("blur", () => {
    tableInput.current.focus();
  });
  window.addEventListener("offline", () => {
    window.alert("Por favor conectese a internet");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const table = e.target.elements.table.value;
    console.log(table);
    onSearch(table);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="flex justify-center content-center gap-3" >
        <div className="">
          <input
            type="text"
            className=" text-[#2f2f2f] p-2 border overline-none shadow-md focus:border-gray-200 border-gray-100 rounded-md outline-none w-full"
            name="table"
            placeholder="Busca tu tabla..."
            ref={tableInput}
          />
        </div>
        <div className="column">
          <button className="p-2 flex content-center text-center items-center gap-2 justify-center rounded-md bg-gray-800 text-white is-info border" type="submit">
            <span className="icon">
              <FaSearch />
            </span>
            <span>Buscar</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export const DataTableQuery = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);

  useEffect(() => {
    if (rowData.length > 0) {
      const keys = Object.keys(rowData[0]); // Obtenemos las claves del primer objeto de rowData
      const columns = keys.map((key) => ({
        field: key, // Aqui se inyecta la key que sera practicamente cada cada clave del objeto.
        filter: true, // Atributos de todas estas columnas
        floatingFilter: true,
        flex: 1,
        editable: true,
      }));
      setColDefs(columns); // Actualizamos colDefs con las columnas dinámicas que tiene cada tabla.
    }
  }, [rowData]);

  const mostrarEnCosola = () => {
    console.table(rowData);
  };

  const fetchData = async (table) => {
    const response = await fetch(
      `http://localhost:3000/api/datos?table=${table}`
    );
    const data = await response.json();
    setRowData(data);
  };

  const [themeGrid, setThemeGrid] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  return (
    <div className="container mb-6">
      <Section />
      <TableOpcion></TableOpcion>
      <Search onSearch={fetchData} />
      <div
        className={themeGrid ? "ag-theme-alpine" : "ag-theme-quartz-dark"}
        style={{ height: 500 }}
        id="grid"
      >
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
      <div className="flex flex-shrink-0 gap-2 mt-4">
  <button
    onClick={() => gridRef.current.api.exportDataAsCsv()}
    className="text-nowrap text-xs bg-indigo-600 text-white px-2 py-1 rounded" // Cambié pl-2 pr-2 a px-2 py-1 para reducir el tamaño
  >
    Exportar a CSV
  </button>
  <button
    onClick={() => window.print()}
    className="p-1 bg-gray-50 rounded-md text-gray-950 border hover:shadow-md duration-150 md:p-2" // Ajusté el padding a p-1
  >
    Imprimir
  </button>
  <button
    className="p-1 bg-gray-50 rounded-md text-gray-950 border hover:shadow-md duration-150"
    onClick={mostrarEnCosola}
  >
    Mostrar en consola
  </button>
</div>

    </div>
  );
};
