import React from "react";
import { GatoIcon } from "../assets/Logos";


const Documentacion = () => {

    const data = window.navigator;

    return(
        <section className="section has-text-centered has-text-left-mobile is-flex is-justify-content-center is-flex-wrap-wrap is-flex-direction-column">
            <h1 className="title content">Documentacion</h1>
            <p className="content has-text-justified">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint amet dicta! Consequuntur dolores molestiae, voluptas, eaque nulla, tenetur distinctio similique quaerat officiis at numquam laborum nesciunt nihil? Accusamus pariatur sapiente explicabo nostrum, iste distinctio sit sunt eos omnis odit ut doloribus illum nisi, ipsum nobis. Qui totam sit voluptate itaque numquam, placeat ab eos suscipit, molestias labore ipsum sint.</p>
            <div className="container is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <GatoIcon width={300} height={300}></GatoIcon>
            </div>
            
        </section>
    )
}


export default Documentacion;