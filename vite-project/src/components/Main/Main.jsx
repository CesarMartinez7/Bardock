import React from "react";
import { FaAndroid, FaCode } from "react-icons/fa";






const Main = () => {
  const Styles = {
    height: "60vh",
    paddingTop: "5vh"
  };

  return (
    <main className="is-size-6 is-justify-content-center is-gap-1 is-flex is-flex-direction-column is-align-items-center" style={Styles}>
      <h1 className="title is-size-1 is-size-1-mobile title-animate has-text-centered-mobile">Welcome to FastData</h1>
      <p className="is-size-7-mobile has-text-centered-mobile"><strong>FastData</strong> es una webapp diseñada para la lectura de datos de forma web.</p>
      <div className="buttons mt-5 is-justify-content-center is-align-content-center">
        <button className="button is-dark">
          <span>
            Getting Start
          </span>
          <span className="icon is-medium">
            <FaCode />
          </span>
        </button>
        <button className="button">
          <span className="icon"><FaAndroid /></span>
          <span>Try Android</span>
        </button>
      </div>
    </main>
  );
};

export default Main;
