import { createContext, useRef, useState } from "react";
import { DataTableQuery } from "../components/DataListTable/DataListTable";
import { Link, Outlet } from "react-router-dom";
import {Footer} from "../components/Footer/Footer"
import {FaTable} from "react-icons/fa";
import BarChart from "../components/Charts/Bar";
import Pastel from "../components/Charts/Pastel";


export const DropButton = () => {
  const useRefdropDown = useRef(null);
  const changeActive = () => {
    useRefdropDown.current.classList.toggle("is-active");
  };
  return (
    <div className="buttons ">
      <div className="dropdown" id="dropdown" ref={useRefdropDown} onClick={changeActive}>
        <div className="dropdown-trigger">
          <button
            className="button is-info is-inverted "
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Tables</span>
            <span className="icon is-small">
              <FaTable></FaTable>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <Link className="dropdown-item">Acta_Asignacion</Link>
            <Link className="dropdown-item">Activo</Link>
            <Link className="dropdown-item">Articulos</Link>
            <Link className="dropdown-item">Bodega</Link>
            <Link className="dropdown-item">Categoria Articulo</Link>
            <Link className="dropdown-item">Centro Costo</Link>
            <Link className="dropdown-item">Perfil</Link>
            <Link className="dropdown-item">Stock</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TableNameContext = createContext();

const DataTablePage = () => {
  const [nameTable, setNameTable] = useState("");
  const [inputnameTable, setinputNameTable] = useState("");

  const hableChangeInput = (e) => {
    inputnameTable(e.target.value);
    console.log(inputnameTable);
  };

  const handleSubmitData = (e) => {
    console.log("Mandado");
    console.log(e.elementChilds());
    setNameTable(e.target.value);
    alert("Mandado formulario");
  };

  return (
    <TableNameContext.Provider value={nameTable} >
      <main className="p-12">
      <DataTableQuery/>
      <Footer></Footer>

      </main>
    </TableNameContext.Provider>
  );
};

export default DataTablePage;
