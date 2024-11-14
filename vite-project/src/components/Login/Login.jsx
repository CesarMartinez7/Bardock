import React from "react";

const Login = () => {
  return (
    <main className=" w-screen md:w-screen h-screen mt-28 p-6 flex justify-center">
      <div className="sm:w-full  xl:p-9 xl:w-96 rounded-md  ">
        <div className="mt-4 mb-4">
          <h1 className="font-bold text-3xl  text-gray-700 text-center">
            Sign in to your account
          </h1>
        </div>
        <div className="">
          <form action="" method="get">
            <div>
              <label className="block text-sm/6  text-gray-700 font-bold">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="name"
                  type="text"
                  required
                  placeholder="Goku"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm/6 pl-4"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="" className="text-gray-700 font-bold text-sm/6">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="dragonballzGokunoleganaavegeta"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400sm:text-sm/6 pl-4"
              />
            </div>
            <div className="mt-5">
              <button
                typeof="submit"
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
