import React, { useState } from "react";
import useUserPrueba from "../../../hook/userPrueba";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const { rool} = useUserPrueba({ name, password });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica después de la petición
    if (rool) {
      window.alert(`Tu rol de la petición es ${rool}`);
    }
  };

  return (
    <main className="w-screen h-screen mt-28 p-6 flex justify-center">
      <div className="sm:w-full xl:p-9 xl:w-96 rounded-md">
        <div className="mt-4 mb-4">
          <h1 className="font-bold text-3xl text-gray-700 text-center">
            Inicia sesión en tu cuenta
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 font-bold">Nombre</label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Goku"
                  className="block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm pl-4"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="text-gray-700 font-bold text-sm">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
