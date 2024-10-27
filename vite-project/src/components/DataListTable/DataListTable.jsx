import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import {TableNameContext} from "../../pages/DataList.jsx"

export const DataTableQuery = () => {
    const {nameTable} = useContext(TableNameContext)
    const gridRef = useRef();
    const onExportClick = () => {
        gridRef.current.api.exportDataAsCsv();
    };

    const onPrint = () => {
        setTimeout(()=>{
            const grid = document.getElementById("grid")
            window.print()
            
            

        })
      };

    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        {field: "descripcion_activo", filter: true, floatingFilter: true, flex: 2, editable: true },
        {field: "id_articulo", filter: true, floatingFilter: true },
        {field: "id_activo", filter: true, floatingFilter: true },
        {field: "codigo", filter: true, floatingFilter: true },
        {field: "fecha_compra", filter: true, floatingFilter: true },
        {field: "avaluo", filter: true, floatingFilter: true, valueFormatter:"'$' +  value.toLocaleString()"},
        
    ]);

    const BREAKPOINT = "http://localhost:5174/datos";
    
    useEffect(() => {
        const Fetching = async () => {
            const respuesta = await fetch(BREAKPOINT);
            const data = await respuesta.json();
            setRowData(data);
        };
        Fetching();
    }, []);

    return (
        <div className="container">
            <div className="ag-theme-alpine" style={{ height: 500 }} id='grid'>
                <AgGridReact
                    ref={gridRef} // Asigna la referencia al componente
                    rowData={rowData}
                    columnDefs={colDefs}
/>
            </div>
            <div className="buttons mt-4">
                <button onClick={onExportClick} className="button is-link is-light">Exportar a CSV</button>
                <button onClick={onPrint} className='button'>Imprimir</button>
            </div>
        </div>
    );
};
