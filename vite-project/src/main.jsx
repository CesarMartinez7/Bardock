import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import "./main.css";
import { App } from "./App.jsx";
import useUser from "../hook/useUser.jsx";
import { Server } from "./components/Icons/Logos.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const root = createRoot(document.getElementById("root"));

const UserNotFound = () => {
  return (
    <>
      <div className="flex p-1flex-shrink pl-1 pr-1 justify-center h-lvh items-center w-full flex-col gap-3">
        <main className="w-5/6 md:w-2/4">
          <h1 className="font-semibold text-2xl w-fit text-gray-800 mb-3 text-left ">
            Porfavor Inicie el servidor, o Digite los credenciales
            correctamente.
          </h1>
          <p className="text-wrap text-sm text-gray-700">
            La principal razon por la cual obtiene este Render es porque no
            tiene acesso a la DB como usuario root, o porque no ejecuta el
            server de <span className="font-semibold"> NodeJS.</span>
          </p>
        </main>
        <div className="">
          <Server w={"200px"} h={"200px"} />
        </div>
        <div>
          <button className="bg-bulmaColor text-white p-2 rounded hover:bg-bulmaColorHover font-semibold">Restart</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

const Totality = () => {
  const [rool] = useUser();
  if (rool === "A") {
    return <App></App>;
  }
  if (rool !== "A ") {
    return <UserNotFound />;
  }
};

root.render(
  <>
    <Totality></Totality>
  </>
);
