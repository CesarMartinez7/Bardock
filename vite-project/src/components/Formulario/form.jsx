import React from "react";

{
  /* Aqui va el FORMULARIO*/
}

const limitWidth = {
  maxWidth:"370px",
  margin:"auto",
  width:"400px"
}

const Formulario = () => {
  return (
    <div
      className="p-6 has-shadow box "
      id="formulario" style={limitWidth}
    >
      <div className="field is-warning is-rounded">
        <h1 className="title has-text-centered">¡Bienvenido!</h1>
        <label className="label">Nombre</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Juan Pérez"
            id="nombre"
            required
          />
        </div>
      </div>

      <div className="field  ">
        <label className="label ">Email</label>
        <div className="control">
          <input
            className="input "
            type="text"
            placeholder="juan.perez@example.com"
            id="correo"
            required
          />
          
        </div>
        
      </div>

      <div className="field">
        <label className="label">Contraseña</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Jp2024!Segura"
            id="contraseña"
            required
          />  
        </div>
        {/* <p className="help is-danger">Esta contraseña es invalida</p> */}
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" id="submit" type="submit">
            Enviar
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

{
  /*Abajo puedes Poner el css para mantener el orden del codigo*/
}


export default Formulario;