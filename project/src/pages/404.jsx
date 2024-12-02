import React from "react";
import { NotFound } from "../components/Icons/Logos.jsx";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const toHome = useNavigate()
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24  mt-12 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Página no encontrada
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Lo sentimos, no pudimos encontrar la página que estás buscando o no tienes acceso como Administrador.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              onClick={()=> toHome("/")}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold hover:cursor-pointer text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
  )
}

export default NotFoundPage;