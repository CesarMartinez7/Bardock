import React, { createContext, useState } from "react";
import Pastel from "../components/Charts/Pastel";
import BarChart from "../components/Charts/Bar";
import { useContext } from "react";



const Grid = () => {
  return (
    <div>
      <main className={"p-10"}>
        <div className="grid grid-cols-3 gap-4">
          <div className={"p-4 border col-span-2 border-md rounded-lg h-fit"}>
            <BarChart/>
          </div>
          <div className={"p-4 border border-md rounded-lg flex justify-center h-fit"}>
            <Pastel></Pastel>
          </div>
          <div className={"p-4 border border-md rounded-lg flex justify-center"}>
            <Pastel></Pastel>
          </div>
          <div className={"p-4 border border-md rounded-lg flex justify-center"}>
            <Pastel></Pastel>
          </div>
          <div className={"p-4 border border-md rounded-lg flex justify-center"}>
            <Pastel></Pastel>
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
