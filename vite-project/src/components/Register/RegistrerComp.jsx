import React from "react";



const limitWidth = {
  maxWidth: "370px",
  margin: "auto",
  width: "400px"
}

const Register = () => {
  return (
    <form action="/registrer" method="POST">
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
              name="name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label ">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="juan.perez@example.com"
              id="correo"
              required
              name="email"
            />

          </div>

        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Jp2024!Segura"
              id="contraseña"
              required
              name="password"
            />
          </div>
          {/* <p className="help is-danger">Esta contraseña es invalida</p> */}
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-dark" id="submit" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>

  );
};




export default Register;