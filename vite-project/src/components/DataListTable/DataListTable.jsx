import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useRef, useState } from 'react';

export const DataTableQuery = () => {
    const gridRef = useRef();

    const onExportClick = () => {
        gridRef.current.api.exportDataAsCsv();
    };

    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        {field: "id_articulo", filter: true, floatingFilter: true },
        {field: "id_activo", filter: true, floatingFilter: true },
        {field: "descripcion_activo", filter: true, floatingFilter: true, flex: 1, editable: true },
        {field: "codigo", filter: true, floatingFilter: true },
        {field: "fecha_garantia", filter: true, floatingFilter: true }
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
            <div className="ag-theme-alpine-dark" style={{ height: 500 }}>
                <AgGridReact
                    ref={gridRef} // Asigna la referencia al componente
                    rowData={rowData}
                    columnDefs={colDefs}
                    pagination={true}
                />
            </div>
            <div className="buttons mt-4">
                <button onClick={onExportClick} className="button is-link is-light">Exportar a CSV</button>
            </div>
        </div>
    );
};
