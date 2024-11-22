import React, { createContext, useState } from "react";
import Pastel from "../components/Charts/Pastel";
import BarChart from "../components/Charts/Bar";
import { useContext } from "react";
import ScatterChart from "../components/Charts/ScatterBar";
import AreaChart from "../components/Charts/AreaChart";
import RadarChart from "../components/Charts/RadarChart";
import {Footer} from "../components/Footer/Footer"

const Grid = () => {
  return (
    <div>
      <main className="p-4 md:p-6 xl:p-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
          <div
            className={
              "p-6 border col-span-2 border-md h-fit rounded-tl-[2rem] "
            }
          >
            <BarChart />
          </div>
          <div
            className={
              "p-4 border border-md flex justify-center h-full rounded-tr-[2rem]"
            }
          >
            <RadarChart></RadarChart>
          </div>
          <div
            className={"p-4 border border-md rounded-lg flex justify-center"}
          >
            <Pastel></Pastel>
          </div>
          <div
            className={
              "p-6 border border-md rounded-lg flex justify-center col-span-2 rounded-br-[2rem]"
            }
          >
            <AreaChart></AreaChart>
          </div>
          {/* <div
            className={"p-4 border border-md rounded-lg flex justify-center"}
          ></div> */}
        </div>
      </main>
    </div>
  );
};

const DataContext = createContext();

const Final = () => {
  const [data, setData] = useState("activo");
  return (
    <>
      <DataContext.Provider>
        <div className="p-8 xl:p-32 xl:mt-40 md:mt-32 flex flex-col justify-center items-center">
          <h2 className="text-center font-light text-[12px] border md:text-md lg:text-[1rem] border-gray-100 rounded-2xl pl-4 pr-4 text-gray-600 mb-4 w-fit">Esta pestaña solo esta disponible para Administradores</h2>
          <p className="font-semibold text-7xl text-center p-4 text-wrap text-gray-700 ">
            Charts <strong className="bg-gradient-to-r from-indigo-800 via-indigo-500 font-semibold to-indigo-300 inline-block text-transparent bg-clip-text">Graph</strong>
          </p>
          <p className="text-pretty  font-light xl:text-center  text-gray-500 text-sm 2xl:text-xl xl:text-lg md:pl-10 md:pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, cupiditate facilis quam culpa placeat minus autem aperiam, ex beatae minima hic quas quisquam sapiente dolorum sint. Explicabo repudiandae officiis quidem!</p>
        </div>
        <div className="flex flex-col gap-5" value={data}>
          <Grid></Grid>
        </div>
      </DataContext.Provider>
      <Footer></Footer>
    </>
  );
};

export default Final;
