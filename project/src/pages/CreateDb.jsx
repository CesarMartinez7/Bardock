import React, { useState, useRef } from 'react';

const ArrayDeTablas = [
    { 
        name: "centro_costo",
        columns:["id_centro_costo","descripcion","estado"]},
    { 
        name: "activo",
        columns:["id_activo","id_articulo","descripcion_activo","codigo,serial","fecha_compra","fecha_garantia","avaluo","requiere_matenimiento","periocidad_mantenimiento","id_usuario_registra","fecha_registro","id_usuario_actualiza","fecha_actualiza","asignado_a"]
    },
    { 
        name: "perfil",
        columns:["id_perfil","tipo_usuario","id_usuario"]
     },
    { 
        name: "orden_inventario",
        columns:["id_orden_inventario","id_tipo_movimiento","id_bodega","id_usuario_registra","fecha_registro","orden_no","id_bodega_destino","observacion"]
     },
    {
        name: "bodega",
        columns: ["id_bodega", "descripcion", "estado", "prefijo"],
    },
    {
        name: "bodega",
        columns: ["id_bodega", "descripcion", "estado", "prefijo"],
    },
    {
        name: "bodega",
        columns: ["id_bodega", "descripcion", "estado", "prefijo"],
    },
];

const Create = () => {
    const [selectedTable, setSelectedTable] = useState(null || "");
    const popoverDiv = useRef(null);

    const handleClickPopover = (tabla) => {
        setSelectedTable(tabla);
        popoverDiv.current.classList.toggle("hidden");
    };

    return (
        <>
            <main className="p-[2vw] grid grid-cols-2 gap-3 2xl:grid-cols-6">
                {ArrayDeTablas.map((tabla, key) => (
                    <div key={key}className="p-10 border border-gray-100 rounded-md" onClick={() => handleClickPopover(tabla)}>
                        <h1 className='text-sm font-light text-wrap 2xl:text-xl'>{tabla.name.toLocaleUpperCase()}</h1>
                    </div>
                ))}
                <div className={`z-[999] w-[90vw] 2xl:w-2/6 h-fit bg-white shadow-md p-9 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${!selectedTable ? 'hidden' : ''}`} ref={popoverDiv}>
                    <h1 className='font-light text-center text-2xl'>Crear Registros {selectedTable && <span className='block text-sm mt-3'>{selectedTable.name.toUpperCase()}</span>}</h1>
                    <form action="/create" method='POST'>
                    <div className="flex flex-col gap-4">
                        <input type="text" value={selectedTable.name} name='tableName'/>
                        {selectedTable && selectedTable.columns ? (
                            selectedTable.columns.map((column, index) => (
                                <input type="text"  className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required key={index} placeholder={column} name={column} />
                                
                            ))
                        ) : (
                            <input type="text" placeholder="Ingrese datos" />
                        )}
                    </div>
                    <input type="submit" value={"Enviar"} className='bg-indigo-600 p-2 rounded-md w-full mt-4 text-white font-semibold' />
                    </form>
                </div>
            </main>
        </>
    );
};


export default Create;
