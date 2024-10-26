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
      class="p-6 has-shadow box "
      id="formulario" style={limitWidth}
    >
      <div class="field is-warning is-rounded">
        <h1 class="title has-text-centered">¡Bienvenido!</h1>
        <label class="label">Nombre</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Juan Pérez"
            id="nombre"
            required
          />
        </div>
      </div>

      <div class="field  ">
        <label class="label ">Email</label>
        <div class="control">
          <input
            class="input "
            type="text"
            placeholder="juan.perez@example.com"
            id="correo"
            required
          />
          
        </div>
        <p class="help is-success" id="email-veri">
          Este email esta disponible
        </p>
      </div>

      <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Jp2024!Segura"
            id="contraseña"
            required
          />  
        </div>
        <p class="help is-danger">Esta contraseña es invalida</p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" id="submit" type="submit">
            Enviar
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

{
  /*Abajo puedes Poner el css para mantener el orden del codigo*/
}


export default Formulario;