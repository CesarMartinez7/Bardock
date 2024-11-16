import React, { useEffect, useState } from "react";

const Login = () => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("")
  const [fetchingUser,setFetchingUser] = useState([])
  // Pasar los datos por un filtro con estados y despues hacer las peticiones por el useEffect y el evento submit de REACT
  const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`http://localhost:3000/api/login?name=${name}&password=${password}`)
      .then((respuesta) => respuesta.json())
      .then(data => setFetchingUser(data)) 
      fetchingUser.forEach((user)=>{
        console.log(user.nombre)
        console.log(user.password)
        /// Hacer un retorno de  true o false en caso que exista o no exista, la solucion mas facil que se me ocurre es pasarlo por un useContext y entrar el en un renderizado condicional EN el main.jsx 
        if(user.nombre === name && user.password === password){
          window.alert("El Usuario y la Contraseña son correctas")
            return true
        }else{
          window.alert("No existe el Usuario con esas credenciales")
          return false
        }
        
      }
    )  
  }



  return (
    <main className=" w-screen md:w-screen h-screen mt-28 p-6 flex justify-center">
      <div className="sm:w-full  xl:p-9 xl:w-96 rounded-md  ">
        <div className="mt-4 mb-4">
          <h1 className="font-bold text-3xl  text-gray-700 text-center">
            Sign in to your account
          </h1>
        </div>
        <div className="">
          <form action="/api/login" method="get" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm/6  text-gray-700 font-bold">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e)=>{
                    console.log(name)
                    setName(e.target.value)}}
                  required
                  placeholder="Goku"
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
                onChange={(e)=>setPassword(e.target.value)}
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
