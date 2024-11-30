import React, { useState, useRef } from 'react';

const ArrayDeTablas = [
    { 
        name: "centro_costo",
        columns:["id_centro_costo","descripcion","estado"]},
    { name: "activo" },
    { name: "perfil" },
    { name: "orden_inventario" },
    {
        name: "bodega",
        columns: ["id_bodega", "descripcion", "estado", "prefijo"],
    },
];

const Create = () => {
    const [selectedTable, setSelectedTable] = useState(null);
    const popoverDiv = useRef(null);

    const handleClickPopover = (tabla) => {
        setSelectedTable(tabla);
        popoverDiv.current.classList.toggle("hidden");
    };

    return (
        <>
            <main className="p-[2vw]">
                {ArrayDeTablas.map((tabla, key) => (
                    <div
                        key={key}
                        className="p-10 border border-gray-100"
                        onClick={() => handleClickPopover(tabla)}
                    >
                        <h1>{tabla.name}</h1>
                    </div>
                ))}

                {/* Popover */}
                <div className={`z-100 w-2/6 h-fit bg-white shadow-md p-9 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${!selectedTable ? 'hidden' : ''}`} ref={popoverDiv}>
                    <h1 className='font-light text-center text-2xl'>Crear Registros {selectedTable && <span className='block text-sm mt-3'>{selectedTable.name.toUpperCase()}</span>}</h1>
                    <form action="/create" >
                    <div className="flex flex-col gap-4">
                        <input type="text" className='hidden' disabled={true} name={selectedTable.name} />
                        {selectedTable && selectedTable.columns ? (
                            selectedTable.columns.map((column, index) => (
                                <input key={index} className='outline-none p-2 rounded-md border-gray-100 border' type="text" placeholder={column} name={column}/>
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
