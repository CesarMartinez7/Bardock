import React from "react";
import Formulario from "../components/Formulario/form";
import { Footer } from "../components/Footer/Footer"




const FormularioPage = () =>{
    return (
        <>
        <div className="hero mb-6 mt-3">
            <Formulario></Formulario>
        </div>
        <Footer></Footer>
        </>
        
    )
}


export default FormularioPage;
