import React from "react";



const limitWidth = {
  maxWidth: "370px",
  margin: "auto",
  width: "400px"
}




const Register = () => {
  return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-10">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-700">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="/registrer" method="POST" className="space-y-6">
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

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 text-gray-700 font-bold">
              Email
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="dragonballz@hotmail.com"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400  sm:text-sm/6 pl-4"
            />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-gray-700 font-bold text-sm/6">Contraseña</label>
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
        
        

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
          </button>
        </div>
      </form>

      
    </div>
  </div>
  )
}



export default Register;