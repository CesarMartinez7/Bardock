import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState, useContext, createContext } from "react";
import "ag-grid-enterprise";
import { Data } from "../../assets/Logos.jsx";
import { FaSearch } from "react-icons/fa";



const TableOpcion = () => {
  const array = [
    { name: "Acta Asignacion", table: "Acta_Asignacion", description: "Registro de la asignación de un activo." },
    { name: "Activo", table: "Activo", description: "Información sobre los activos de la organización." },
    { name: "Articulo", table: "Articulo", description: "Detalles de los artículos gestionados." },
    { name: "Bodega", table: "Bodega", description: "Información sobre los almacenes o bodegas." },
    { name: "Categoria Articulos", table: "Categoria_Articulos", description: "Clasificación de los artículos por categorías." },
    { name: "Centro de Costo", table: "Centro_de_Costo", description: "Divisiones para el control de costos." },
    { name: "Detalles de acta de inventario", table: "Detalles_de_acta_de_inventario", description: "Información detallada de cada acta de inventario." },
    { name: "Orden de Inventario", table: "Orden_de_Inventario", description: "Registros de las órdenes para realizar inventarios." },
    { name: "Perfil", table: "Perfil", description: "Configuraciones y permisos de usuarios." },
    { name: "Tipo de documentos", table: "Tipo_de_documentos", description: "Clasificación de los diferentes tipos de documentos utilizados." },
    { name: "Stok", table: "Stok", description: "Registro de la cantidad de artículos en inventario." }
  ];
  return (<>
    <h1 className="subtitle is-size-4">Tablas Disponibles</h1>
    <section className="grid ">
      {array.map((value) => (
        <div class="card">
          <div class="card-content">
            <div class="content">
              <p className="subtitle  is-size-5">{value.name}</p>
              <p>{value.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>


  </>

  )
}


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
    <section className="section columns is-desktop mb-5">
      <div className="column is-align-content-center">
        <h1 className="title is-size-1">Soon</h1>
        <h2 className="subtitle">you can see your data here</h2>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          sequi ducimus at ipsa optio quia aliquid voluptate magnam obcaecati,
          saepe nobis quis maxime. Fugiat deleniti perferendis sit distinctio
          facilis maxime..
        </p>
        <div className="buttons">
          <button
            className="button is-dark"
            style={styles}
            onClick={handleClickData}
          >
            Ver Datos
          </button>
          <button className="button" onClick={handleClickBars}>
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
  
  const tableInput = useRef(null)
  
  window.addEventListener("blur",()=>{
    tableInput.current.focus()
  })
  window.addEventListener("offline",() => {
    window.alert("Por favor conectese a internet")
  })
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const table = e.target.elements.table.value;
    console.log(table);
    onSearch(table);
  };

  return (
      <form onSubmit={handleSubmit} className="field container">
        <div className=" columns">
          <div className="column">
            <input type="text" className="input" name="table" placeholder="Busca tu tabla..." ref={tableInput} />
          </div>
          <div className="column">
            <button className="button is-info is-inverted" type="submit" >
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
    console.table(rowData)
  }

  const fetchData = async (table) => {
    const response = await fetch(`http://localhost:3000/api/datos?table=${table}`);
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
      <div className={themeGrid ? "ag-theme-alpine" : "ag-theme-quartz-dark"} style={{ height: 500 }} id="grid">
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
      <div className="buttons mt-4">
        <button onClick={() => gridRef.current.api.exportDataAsCsv()} className="button is-primary is-outlined">
          Exportar a CSV
        </button>
        <button onClick={() => window.print()} className="button is-info is-inverted">
          Imprimir
        </button>
        <button className="button" onClick={mostrarEnCosola}>Mostrar en consola</button>
      </div>
    </div>
  );
};
