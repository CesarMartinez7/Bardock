import { createRoot } from "react-dom/client";
import React, { createContext, useState } from "react";
import "./main.css";
import { App } from "./App.jsx";
import useUser from "../hook/useUser.jsx";
import { Server } from "./components/Icons/Logos.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useNavigation } from "react-router-dom";
import useUserPrueba from "../hook/userPrueba.jsx";
import { AppAdmin } from "./auth/admin.jsx";
import { AppUser } from "./auth/UserPublic.jsx";

const root = createRoot(document.getElementById("root"));

const handleNavigate = () => {
 window.open("https://github.com/CesarMartinez7/DataFast/tree/tailwind","","width:200px")
}

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
        <div className="inline-flex gap-2">
          <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 duration-500 font-semibold" onClick={handleNavigate}>Go to Github</button>
          <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 duration-500 font-semibold" onClick={()=>{
            location.reload()
          }}>Restart</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};



/// Totality render final con las petciones finales,  es decir render de que si es admin o user normal, se hara con el hook en userPrueba.jsx o algo asi.
export const UserContext = createContext()

const RenderFinal = () => {
  const [password,setPassword] = useState("user")
  const [name,setName] = useState("user")
  const {rool} = useUserPrueba({password,name});
  if (rool === "A") {
    return (
      <UserContext.Provider value={{password,setPassword,name,setName,rool}}>
        <AppAdmin></AppAdmin>
      </UserContext.Provider>
    )
  }
  else if (rool !== "A") {
    return (
      <UserContext.Provider value={{password,setPassword,name,setName,rool}}>
        <AppUser></AppUser>
      </UserContext.Provider>
    )
  }
};

root.render(
  <>
    <RenderFinal/>
  </>
);
