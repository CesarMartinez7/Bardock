import React, { useState, useRef } from 'react';
import { FaX } from 'react-icons/fa6';

const ArrayDeTablas = [
    { 
        name: "Centro Costo",
        columns:["id_centro_costo","descripcion","estado"]},
    { 
        name: "Activo",
        columns:["id_activo","id_articulo","descripcion_activo","codigo","serial","fecha_compra","fecha_garantia","avaluo","requiere_matenimiento","periodicidad_mantenimiento","id_usuario_registra","fecha_registro","id_usuario_actualiza","fecha_actualiza","asignado_a"]
    },
    { 
        name: "Perfil",
        columns:["id_perfil","tipo_usuario","id_usuario"]
     },
    { 
        name: "Orden_Inventario",
        columns:["id_orden_inventario","id_tipo_movimiento","id_bodega","id_usuario_registra","fecha_registro","orden_no","id_bodega_destino","observacion"]
     },
    {
        name: "Bodega",
        columns: ["id_bodega", "descripcion", "estado", "prefijo"],
    },
    {
        name:"Acta_asignacion",
        columns:["id_acta_asignacion","id_usuario_asignado","fecha_acta","id_usuario_elabora","fecha_registro","observacion"]
    },
    {
        name:"Articulo",
        columns:["id_articulo","id_categoria","descripcion","estado"]
    },
    {
        name:"Categoria Articulo",
        columns:["id_categoria","descripcion","estado"]
    },
    {
        name:"Detalle Acta Asignacion",
        columns:["id_detalle_asignacion","id_acta_asignacion","id_activo"]
    },
    {
        name:"Detalle Orden Inventario",
        columns:["id_detalle_orden_inventario","id_orden_inventario","id_centro_costo","id_articulo","descripcion_articulo","cantidad"]
    },
    {
        name:"Orden Inventario",
        columns:["id_orden_inventario","id_tipo_movimiento","id_bodega","id_usuario_registra","fecha_registro","orden_no","id_bodega_destino","observacion"]
    },
    {
        name:"Stock",
        columns:["id_articulo","id_centro_costo","id_bodega","cantidad"]
    },
    {
        name:"Tipo Documento",
        columns:["id_tipo_documento","descripcion"]
    },
    {
        name:"Tipo Movimiento",
        columns:["id_tipo_movimiento","descripcion","signo"]
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
        <main className='p-10 mt-[2vh]'>
            <h1 className="font-bold text-gray-600 text-4xl text-center">Crear Registros</h1>
            <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 grid-rows-3 place-content-center place-items-center p-1 xl:p-8 ">
                {ArrayDeTablas.map((tabla, key) => (
                    <div key={key} className="w-full h-full sm:max-w-sm shadow-gray-200 p-12 rounded-lg shadow-lg hover:scale-110 duration-150 hover:bg-white " onClick={() => handleClickPopover(tabla)}>
                        <h1 className='text-sm  text-wrap 2xl:text-xl text-gray-500'>{tabla.name}</h1>
                    </div>
                ))}
                <div className={`z-[999] w-[90vw] 2xl:w-3/12 h-fit bg-white shadow-xl rounded-md border-gray-100 border-[1px] p-9 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${!selectedTable ? 'hidden' : ''}`} ref={popoverDiv}>
                <div className='inline-flex justify-end w-full text-gray-500'>
                    <FaX onClick={() => {
                        popoverDiv.current.classList.add("hidden")
                    }}></FaX>
                </div>
                    <h1 className=' text-center text-2xl text-gray-600'>Crear Registros {selectedTable && <span className='block text-sm mt-3'>{selectedTable.name.toUpperCase()}</span>}</h1>
                    <form action="/create" method='POST'>
                    <div className="flex flex-col gap-4">
                        <input type="text" value={selectedTable.name} name='tableName' className='text-gray-500'/>
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
            </section>
        </main>
    );
};


export default Create;
