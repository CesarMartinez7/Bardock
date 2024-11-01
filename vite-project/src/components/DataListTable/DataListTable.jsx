import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState } from "react";
import "ag-grid-enterprise";
import { Data } from "../../assets/Logos.jsx"; // Asegúrate de que estas importaciones sean correctas
import { FaSearch } from "react-icons/fa";



const TableOpcion = () => {
  return (
    <section className="section">
      <h1 className="subtitle is-size-4">Tablas Disponibles</h1>
      <div className="grid">
        <div className="cell box subtitle is-size-6 has-text-centered">Acta_Asignacion</div>
        <div className="cell box subtitle is-size-6 has-text-centered">Activo</div>
        <div className="cell box subtitle is-size-6 has-text-centered">Articulo</div>
        <div className="cell box subtitle is-size-6 has-text-centered">Bodega</div>
        <div className="cell box subtitle is-size-6 has-text-centered">Categoria_Articulo</div>
        <div className="cell box subtitle is-size-6 has-text-centered">Centro_costo</div>
        <div className="cell box subtitle is-size-6 has-text-centered">detalle_acta_inventario</div>
        <div className="cell box subtitle is-size-6 has-text-centered">orden_inventario</div>
        <div className="cell box subtitle is-size-6 has-text-centered">perfil</div>
        <div className="cell box subtitle is-size-6 has-text-centered">stock</div>
        <div className="cell box subtitle is-size-6 has-text-centered">tipo_Documento</div>
        <div className="cell box subtitle is-size-6 has-text-centered">Usuario</div>
      </div>
    </section>

  )
}


const Section = () => {
  const styles = {
    backgroundColor: "#6C63FF",
  };

  const handleClickData = () => {
    window.scrollTo({ behavior: "smooth", top: 567 });
  };

  const handleClickBars = () => {
    window.scrollTo({ behavior: "smooth", top: 1284 });
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

const Input = ({ onSearch }) => { 
  const handleSubmit = (e) => {
    e.preventDefault();
    const table = e.target.elements.table.value; 
    console.log(table); 
    onSearch(table); 
  };

  return (
    <div className="container box is-shadowless is-flex is-justify-content-center">
      <form onSubmit={handleSubmit} className="field">
        <div className=" columns">
          <div className="column">
            <input type="text" className="input is-link" name="table"  placeholder="Busca tu tabla..."/>
          </div>
          <div className="column">
          <button className="button is-primary is-outlined" type="submit">
            <span className="icon">
              <FaSearch />
            </span>
            <span>Buscar</span>
          </button>
          </div>
        </div>
      </form>
    </div>
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
    window.console()
    console.log(rowData)
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
      <Input onSearch={fetchData} />
      <div
        className={themeGrid ? "ag-theme-alpine" : "ag-theme-quartz-dark"}
        style={{ height: 500 }}
        id="grid"
      >
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
      <div className="buttons mt-4">
        <button
          onClick={() => gridRef.current.api.exportDataAsCsv()} 
          className="button is-primary is-outlined"
        >
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
