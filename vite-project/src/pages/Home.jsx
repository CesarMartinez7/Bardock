import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Women, Worker } from "../assets/Logos";
import { FaAndroid, FaFileExcel, FaFileCsv, FaReact, FaFileAlt, FaFileExport } from "react-icons/fa"
import Main from "../components/Main/Main";
import { useNavigate } from "react-router-dom";





const HomePage = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/datosv2")
  }
  return (
    <>
      <Main />
      <section className="columns section is-desktop">
        <div className="column is-flex-direction-column is-justify-content-center is-align-content-center p-3">
          <h1 className="title is-size-2 is-size-2-mobile">Hello Tu,👋</h1>
          <h3 className="subtitle is-size-5-mobile">This is the place when you can </h3>
          <p className="content is-size-6-mobile">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae culpa voluptates sunt fugit aliquam assumenda iure alias sint accusantium laboriosam. Magni aliquid dolores quia natus eaque. Quo corporis, ea commodi odio repellat perferendis tenetur culpa autem unde suscipit nostrum maxime !</p>
        </div>
        <div className="column is-justify-content-center is-flex column is-flex-grow-1 is-flex-shrink-5">
          <Women width={400} height={528.58115}></Women>
        </div>

      </section>
      <section className="columns section is-desktop">
        <div className="column is-flex-direction-column is-justify-content-center is-align-content-center p-3">
          <h1 className="title is-size-2">Our website is made with</h1>
          <h3 className="subtitle is-size-5-mobile ">This is the place when you can </h3>
          <p className="content is-size-6-mobile ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae culpa voluptates sunt fugit aliquam assumenda iure alias sint accusantium laboriosam. Magni aliquid dolores quia natus eaque. Quo corporis, ea commodi odio repellat perferendis tenetur culpa autem unde suscipit nostrum maxime !</p>
          <div className="buttons">
            <button className="button">
              <FaFileExcel fontSize={"2em"}></FaFileExcel>
            </button>
            <button className="button" onClick={handleNavigate}>
            <FaFileExport fontSize={"2em"}></FaFileExport>
            

            </button>
          </div>
        </div>
        <div className="column has-text-centered is-flex is-justify-content-center is-align-items-center is-align-content-center is-align-self-center">
          <Worker width={400}
            eight={528.58115}></Worker>
        </div>

      </section>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
