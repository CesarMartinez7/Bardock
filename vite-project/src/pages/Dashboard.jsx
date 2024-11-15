import React, { createContext, useState } from "react";
import Pastel from "../components/Charts/Pastel";
import BarChart from "../components/Charts/Bar";
import { useContext } from "react";
import ScatterChart from "../components/Charts/ScatterBar";
import AreaChart from "../components/Charts/AreaChart";
import RadarChart from "../components/Charts/RadarChart";



const Grid = () => {
  return (
    <div>
      <main className="p-4 md:p-6 xl:p-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
          <div className={"p-6 border col-span-2 border-md h-fit rounded-tl-[2rem] "}>
            <BarChart/>
          </div>
          <div className={"p-4 border border-md flex justify-center h-full rounded-tr-[2rem]" }>
            <RadarChart></RadarChart>
          </div>
          <div className={"p-4 border border-md rounded-lg flex justify-center"}>
            <Pastel></Pastel> 
          </div>
          <div className={"p-6 border border-md rounded-lg flex justify-center col-span-2 rounded-br-[2rem]"}>
            <AreaChart></AreaChart>
          </div>
          <div className={"p-4 border border-md rounded-lg flex justify-center"}>
          </div>
        </div>
      </main>
    </div>
  )
}


const DataContext = createContext();

const Final = () => {
  const [data, setData] = useState("activo");
  return (
    <>
      <DataContext.Provider>
        <div className="flex flex-col gap-5" value={data}>
          <Grid></Grid>
        </div>
      </DataContext.Provider>
    </>
  );
};

export default Final;
