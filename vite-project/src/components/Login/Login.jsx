import React, { useRef, useState } from "react";
import useUserPrueba from "../../../hook/userPrueba";
import { Footer } from "../Footer/Footer";
import { useContext } from "react";
import { UserContext } from "../../main";

const Login = ({ }) => {
  const { password, setPassword, name, setName } = useContext(UserContext);
  // Tratando de implementar el contexto desde aqui para despues cambiarlo en todo, CONTEXTO FUNCIONO 👌
  const { rool } = useUserPrueba({ name, password });

  const inputPasswordRef = useRef(null)
  const inputNameRef = useRef(null)

  // Aquí es donde se maneja la solicitud con useRef porque anteriormente mandama muchas peticiones y tuve que hacer el formulario de manera menos controlada,TOTALMENTE FUNCIONAL 👍🏼,Faltaria buscar como funciona el localStorage para guardar, o buscar la implementacion en useMemo para ver 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setName(inputNameRef.current.value) 
    setPassword(inputPasswordRef.current.value)
    fetch(`http://localhost:3000/api/login?name=${name}&password=${password}`)
      .then((respuesta) => respuesta.json())
      .then(data => console.log(data))
  }


  return (
    <>
      <main className="w-screen h-screen mt-28 p-6 flex justify-center">
        <div className="sm:w-full xl:p-9 xl:w-96 rounded-md md:w-96">
          <div className="mt-4 mb-4">
            <h1 className="font-bold text-3xl text-gray-700 text-center">
              Sign in to your account
            </h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-700 font-bold">
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    ref={inputNameRef}
                    name="name"
                    type="text"
                    required
                    placeholder="Goku"
                    className="block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm pl-4"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="text-gray-700 font-bold text-sm"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={inputPasswordRef}  
                  required
                  placeholder="dragonballzGokunoleganaavegeta"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm pl-4"
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="bg-indigo-600 w-full text-white p-2 rounded-md focus:outline-none"
                >
                  Enviar
                </button>
                {/* Se comprobo con este boton y si sirve para cambiar de usuario,El usuario por default es user, osea que no tiene acesso a la barra de charts, pero despues que presiona el boton este cambia enseguida a admin y le deja ver la ventana de charts,es Boton sigue funcionando como prueba y esta hecho con async y await */}
                <button
                  className="bg-indigo-600 mt-3 p-2 w-full rounded-md text-white font-bold"
                  onClick={async () => {
                    await setName("");
                    await setPassword("");
                    await setName("admin");
                    await setPassword("admin");
                  }}
                >
                  Presiona para cambiar a admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Login;
