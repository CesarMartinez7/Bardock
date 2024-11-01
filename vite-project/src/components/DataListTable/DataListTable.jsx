import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState } from "react";
import "ag-grid-enterprise";
import { DropButton, TableNameContext } from "../../pages/DataList.jsx";
import { Data } from "../../assets/Logos.jsx";
import { FaSearch } from "react-icons/fa";

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
        <h2 className="subtitle  ">you can see your data here</h2>
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
          <button className="button " onClick={handleClickBars}>
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

const Input = () => {
  return (
    <div className="container">
      <form action="/datosv2" method="GET">
      <label className="label">Tablas</label>
        <input type="text" className="input" />
        <div className="buttons mt-3 mb-4">
          <button className="button is-success is-dark" type="submit">
            <span className="icon">
              <FaSearch></FaSearch>
            </span>
            <span>Buscar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export const DataTableQuery = () => {
  const gridRef = useRef();
  const onExportClick = () => {
    gridRef.current.api.exportDataAsCsv();
    // Para detectar el esquema de color preferido
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
  };

  const onPrint = () => {
    setTimeout(() => {
      const gridRef = document.getElementById("grid");
      window.print();
    }, 1000);
  };

  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    {
      field: "descripcion_activo",
      filter: true,
      floatingFilter: true,
      flex: 2,
      editable: true,
    },
    {
      field: "id_articulo",
      filter: true,
      floatingFilter: true,
      rowGroup: true,
      hide: true,
    },
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

  const BREAKPOINT = "http://localhost:3000/api/datos";
  const [themeGrid, setThemeGrid] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );
  useEffect(() => {
    const Fetching = async () => {
      const respuesta = await fetch(BREAKPOINT);
      const data = await respuesta.json();
      setRowData(data);
    };
    Fetching();
  }, [BREAKPOINT, themeGrid]);

  return (
    <div className="container mb-6">
      <Section></Section>
      <Input></Input>
      <div
        className={themeGrid ? "ag-theme-alpine" : "ag-theme-quartz-dark"}
        style={{ height: 500 }}
        id="grid"
      >
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
      <div className="buttons mt-4">
        <button
          onClick={onExportClick}
          className="button is-primary is-outlined "
        >
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
