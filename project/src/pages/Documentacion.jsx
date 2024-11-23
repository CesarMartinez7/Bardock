import React, { useEffect } from "react";
import {
  MySQL,
  Vite,
  Nodejs,
  Expressjs,
  Chartjs,
  JavaScript,
  ReactCon,
  Firefox,
  VisualStudioCode,
  Yarn,
  Git,
  Prettier,
  Python,
  GitHub,
} from "../components/Icons/Logos.jsx";
import { Footer } from "../components/Footer/Footer";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaJsSquare,
  FaGit,
  FaGithub,
} from "react-icons/fa";

const handlerHover = () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    let color = item.getAttribute("data-color");
    item.addEventListener("mouseenter", (e) => {
      e.target.style.filter = `drop-shadow(${color} 0px 8px 24px)`;
      e.target.style.colot = "red";
    });
    item.addEventListener("mouseleave", (e) => {
      e.target.style.filter = "";
    });
    console.log(color);
  });
};

const Documentacion = () => {
  useEffect(() => {
    handlerHover();
  }, []);

  return (
    <>
      <section className="p-9 mt-14 lg:p-20 flex flex-col gap-5">
        <div >
          <section className="bg-transparent">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ">Powering innovation at <span className="font-extrabold">200,000+</span> companies worldwide</h2>
                <p className="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p className="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Learn more
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            <section className="bg-transparent p-20">
              <div className="logos-items h-screen xl:h-2/4">
                <Expressjs className="item" />
                <Vite className="item" />
                <ReactCon className="item"></ReactCon>
                <GitHub className="item"></GitHub>
                <VisualStudioCode className="item"></VisualStudioCode>
                <Python className="item"></Python>
                <MySQL className="item" />
                <JavaScript className="item" />
                <Yarn className="item"></Yarn>
                <Chartjs className="item" />
                <Firefox className="item"></Firefox>
                <Git className="item"></Git>
                <Prettier className="item"></Prettier>
              </div>
            </section>
          </section>
        </div>
        <section >
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">We didn't reinvent the wheel</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus asperiores facilis velit, perspiciatis provident non ducimus exercitationem cumque aliquid amet recusandae, laudantium, nisi expedita est officiis? Odit, aperiam! Sit ipsam corporis quis sint minus sapiente vitae eum commodi? Ab!</p>
              <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="
              https://i.pinimg.com/originals/70/84/c6/7084c682f10716fcaf0469b550a92b6a.gif" alt="office content 1" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.pinimg.com/736x/b0/bd/b0/b0bdb034e64cf9c8354611b1c88b0ead.jpg" alt="office content 2" />
            </div>
          </div>
        </section>
        <div className="lg:p-20">
          <h1 className="pb-5 font-extrabold text-balance text-4xl text-gray-800 mb-4 ">
            Lorem ipsum dolor sit amet
          </h1>
          <p className=" text-gray-700 font-extralight " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
            culpa, odio eaque voluptates cupiditate mollitia aliquid porro
            magnam cumque omnis nulla totam sunt officia iusto laboriosam sint
            quia ratione veniam, rem, iste ex? Veniam similique, autem
            distinctio rem eaque qui doloribus! Maiores, quis earum suscipit
            praesentium corporis sint consequuntur harum magni fugit, enim dicta
            architecto perferendis, vel explicabo vero quod fugiat nihil sunt.
          </p>
          
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Documentacion;
