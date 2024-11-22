import React from "react";
import Register from "../components/Register/RegistrerComp";
import { Footer } from "../components/Footer/Footer"




const FormularioPage = () =>{
    return (
        <>
        <div className="hero mb-6 mt-3">
            <Register></Register>
        </div>
        <Footer></Footer>
        </>
        
    )
}


export default FormularioPage;
