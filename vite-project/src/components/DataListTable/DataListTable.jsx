import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { DropButton, TableNameContext } from "../../pages/DataList.jsx";
import { Data } from "../../assets/Logos.jsx";

export const DataTableQuery = () => {
  const { nameTable } = useContext(TableNameContext);
  const gridRef = useRef();
  const onExportClick = () => {
    gridRef.current.api.exportDataAsCsv();
    // Para detectar el esquema de color preferido
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    if (prefersDarkScheme) {
      console.log("El usuario prefiere un esquema oscuro.");
    } else {
      console.log("El usuario prefiere un esquema claro.");
    }
  };

  const onPrint = () => {
    setTimeout(() => {
      const gridRef = document.getElementById("grid");
      window.print();
    }, 1000);
  };

  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "descripcion_activo", filter: true, floatingFilter: true, flex: 2, editable: true, width: 20, },
    { field: "id_articulo", filter: true, floatingFilter: true, rowGroup: true, hide: true, },
    { field: "id_activo", filter: true, floatingFilter: true },
    { field: "codigo", filter: true, floatingFilter: true },
    { field: "fecha_compra", filter: true, floatingFilter: true },
    {
      field: "avaluo",
      filter: true,
      floatingFilter: true,
      valueFormatter: "'$' +  value.toLocaleString()",
    },
  ]);

  const BREAKPOINT = "http://localhost:3000/datos";

  useEffect(() => {
    const Fetching = async () => {
      const respuesta = await fetch(BREAKPOINT);
      const data = await respuesta.json();
      setRowData(data);
    };
    Fetching();
  }, []);
  const [themeGrid, setThemeGrid] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );
  return (
    <div className="container mb-6">
      <section className="section columns is-desktop mb-5">
        <div className="column is-align-content-center">
          <h1 className="title">Soon<h2>you can see your data here</h2></h1>
          <p className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sequi ducimus at ipsa optio quia aliquid voluptate magnam obcaecati, saepe nobis quis maxime. Fugiat deleniti perferendis sit distinctio facilis maxime..</p>
        </div>
        <div className="column has-text-centered is-align-content-center">
          <Data width={350} height={350}></Data>
        </div>
      </section>
      <div
        className={themeGrid ? "ag-theme-alpine" : "ag-theme-quartz-dark"}
        style={{ height: 500 }}
        id="grid"
      >
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
      <div className="buttons mt-4">
        <button onClick={onExportClick} className="button is-primary is-outlined ">
          Exportar a CSV
        </button>
        <button onClick={onPrint} className="button is-info is-inverted">
          Imprimir
        </button>
        <DropButton></DropButton>
      </div>
    </div>
  );
};
