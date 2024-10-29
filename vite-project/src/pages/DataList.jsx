import { createContext, useState } from "react";
import { DataTableQuery } from "../components/DataListTable/DataListTable";
import { Link, Outlet } from "react-router-dom";
import { FaBug, FaFileCode, FaTable, FaPrint } from "react-icons/fa";

export const DropButton = () => {
  const changeActive = () => {
    const dropDown = document.getElementById("dropdown");
    dropDown.classList.toggle("is-active");
  };
  return (
    <div className="buttons container">
      <div class="dropdown" id="dropdown" onClick={changeActive}>
        <div class="dropdown-trigger">
          <button
            class=" button is-info is-dark"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Tables</span>
            <span class="icon is-small">
              <FaTable></FaTable>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
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
    <TableNameContext.Provider value={nameTable}>
      <DropButton></DropButton>
      <DataTableQuery></DataTableQuery>
    </TableNameContext.Provider>
  );
};

export default DataTablePage;
