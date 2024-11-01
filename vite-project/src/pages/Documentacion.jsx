import React from "react";
import { GatoIcon } from "../assets/Logos";
import { Footer } from "../components/Footer/Footer";


const Documentacion = () => {

    return(
        <>
        
        <section className="section is-flex is-justify-content-center  is-gap-1 is-flex-wrap-wrap is-flex-direction-column mt-2">
            <h1 className="title content ">Documentacion</h1>
            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint amet dicta! Consequuntur dolores molestiae, voluptas, eaque nulla, tenetur distinctio similique quaerat officiis at numquam laborum nesciunt nihil? Accusamus pariatur sapiente explicabo nostrum, iste distinctio sit sunt eos omnis odit ut doloribus illum nisi, ipsum nobis. Qui totam sit voluptate itaque numquam, placeat ab eos suscipit, molestias labore ipsum sint.</p>
            <div className="container is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <GatoIcon width={300} height={300}></GatoIcon>
            </div>
        </section>
            <Footer></Footer>
        </>
    )
}


export default Documentacion;