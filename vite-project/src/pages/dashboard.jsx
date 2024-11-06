import React, { createContext } from "react";
import Pastel from "../components/Charts/Pastel";
import BarChart from "../components/Charts/Bar";
import { useContext } from "react";

const DashGrid = () => {
  return (
    <div className="container">
      <div className="fixed-grid has-5-cols">
        <div className="grid">
          <div className="cell is-col-span-3 box">
            <BarChart />
          </div>
          <div className="cell box is-col-span-2">
            <Pastel />
          </div>
        </div>
      </div>
    </div>
  );
};

const Cont = () => {
  return (
    <div className="container">
      <div className="fixed-grid has-4-cols">
        <div className="grid">
          <div className="cell box has-text-dark has-background-dark has-text-white">
            <h1 className="has-text-white title is-4">Total Sales</h1>
            <p className="has-text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              ducimus deleniti ex, dolorum ad culpa quo? Quis velit ut
              repellendus!
            </p>
          </div>
          <div className="cell box">
            <h1 className="title is-size-4">Total money</h1>
            <h1 className="title ">$ 2000,0003</h1>
          </div>
          <div className="cell box">
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              earum!
            </p>
          </div>
          <div className="box ">
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              earum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataContext = createContext();

const Final = () => {
  return (
    <>
      <DataContext.Provider>
        <div className="section">
          <Cont />
          <DashGrid />
        </div>
      </DataContext.Provider>
    </>
  );
};

export default Final;
