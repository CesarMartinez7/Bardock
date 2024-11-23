import React, { useEffect } from "react";
import Descripcion from "../components/DescripcionList/Descripcion.jsx";
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
import image from "../../public/pantallazoxd.png";

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

const Documentacion = ({ carpeta = "Project" }) => {
  useEffect(() => {
    handlerHover();
  }, []);

  return (
    <>
      <section className="p-9 mt-14 lg:p-20 flex flex-col gap-5">
        <div>
          <section className="bg-transparent">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ">
                  Powering innovation at{" "}
                  <span className="font-extrabold">200,000+</span> companies
                  worldwide
                </h2>
                <p className="mb-4 font-light">
                  Track work across the enterprise through an open,
                  collaborative platform. Link issues across Jira and ingest
                  data from other software development tools, so your IT support
                  and operations teams have richer contextual information to
                  rapidly respond to requests, incidents, and changes.
                </p>
                <p className="mb-4 font-medium">
                  Después de clonar el repositorio de GitHub, sigue estos pasos
                  para instalar las dependencias: navega a la carpeta donde
                  clonaste el repositorio usando el comando{" "}
                  <code className="bg-gray-900 rounded-md p-1">
                    <span className="text-indigo-600">cd</span>{" "}
                    <span className="text-emerald-500">{carpeta}</span>
                  </code>
                  , luego ejecuta npm install desde la ruta actual para instalar
                  todas las dependencias necesarias.
                </p>
                <pre className="codeBar">
                  <code>
                    1 <span className="text-emerald-400">npm</span>{" "}
                    <span className="text-white">install</span>
                  </code>
                  <code className="block">
                    2 <span className="text-indigo-600">yarn</span>{" "}
                    <span className="text-white">install</span>
                  </code>
                </pre>
                <p className="mt-5">
                  Si quieres correr el servidor de forma local puedes ejecutar
                  los siguientes comando dependiendo de que gestor de paquetes
                  utilices{" "}
                </p>
                <pre className="codeBar">
                  <code>
                    1 <span className="text-yellow-400">npm</span>{" "}
                    <span className="text-emerald-500">run</span>{" "}
                    <span className="text-white">dev</span>
                  </code>
                  <code className="block">
                    1 <span className="text-yellow-400">yarn</span>{" "}
                    <span className="text-emerald-500">run</span>{" "}
                    <span className="text-white">dev</span>
                  </code>
                </pre>
                <p>
                  Tendras la pestaña de tu servidor abierta en tu navegador en
                  el puerto:{" "}
                  <code className="bg-gray-900 p-1 rounded-md">
                    <span className="text-cyan-400">5173</span>
                  </code>
                </p>
                <div className="">
                  <img
                    src={image}
                    alt=""
                    className="object-cover rounded-xl m-2"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-4xl mt-4 text-gray-800 mb-2">
                    ¡Excelente, estás avanzando! 👨‍🚀
                  </h2>
                  <p className="font-light">
                    Ahora tienes tu servidor lanzado en un puerto en tu
                    navegador.
                  </p>
                  <p className="text-indigo-500">
                    Lo siguiente a configurar será tu servidor de Express para
                    que puedas visualizar tus datos.
                  </p>
                  <p>
                    Para esto, abre una nueva pestaña de la terminal en tu
                    editor y ejecuta el siguiente comando:
                  </p>
                  <pre className="codeBar ">
                    <code className="text-gray-500 block text-wrap">
                      // Lanzamiento del Servidor de forma estatica.
                    </code>
                    <code className="block">
                      <span className="text-emerald-500 ">node</span>{" "}
                      <span className="text-yellow-400">server.cjs</span>
                    </code>
                    <code className="text-gray-500 block text-wrap">
                      // Lanzamiento con Restarting automatico.
                    </code>
                    <code>
                      <span className="text-emerald-500">node </span>--watch{" "}
                      <span className="text-yellow-400">server.cjs</span>
                    </code>
                  </pre>
                  <h1 className="font-bold text-4xl mt-4 mb-5 text-gray-800 ">
                    ¿Qué pasó aquí? 🤒
                  </h1>
                  <p>
                    Es posible que hayas encontrado un error como este porque no
                    configuraste correctamente las credenciales de tu servidor
                    de Express con tu{" "}
                    <span className="text-blue-600">MySQL</span>.
                  </p>
                  <pre className="codeBar">
                    <code className="text-red-600 text-wrap">
                      code: 'ER_ACCESS_DENIED_ERROR', errno: 1045, sqlState:
                      '28000', sqlMessage: "Access denied for user
                      'root'@'localhost' (using password: YES), sql: undefined,
                      fatal: true Node.js v22.11.0
                    </code>
                  </pre>
                  <p>Para corregir este error, desde tu editor o block de notas entra al archivo <span className="bg-gray-900 p-1 rounded-md text-yellow-200">server.cjs</span> y configura esto a tus credenciales</p>
                  <pre className="codeBar">
                    <code className="block">const dataServerDB =</code>
                    <code className="block text-indigo-400">host: "localhost",</code> 
                    <code className="block text-blue-400">user: "root",</code>
                    <code className="block text-cyan-400">password: "oyasumipunpuns",</code>
                    <code className="block text-green-500">database: "nodomobiliario",;</code>
                  </pre>
                </div>
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
        <section>
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                We didn't reinvent the wheel
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                doloribus asperiores facilis velit, perspiciatis provident non
                ducimus exercitationem cumque aliquid amet recusandae,
                laudantium, nisi expedita est officiis? Odit, aperiam! Sit ipsam
                corporis quis sint minus sapiente vitae eum commodi? Ab!
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="
              https://i.pinimg.com/originals/70/84/c6/7084c682f10716fcaf0469b550a92b6a.gif"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://i.pinimg.com/736x/b0/bd/b0/b0bdb034e64cf9c8354611b1c88b0ead.jpg"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <div className="lg:p-20">
          <h1 className="pb-5 font-extrabold text-balance text-4xl text-gray-800 mb-4 ">
            Lorem ipsum dolor sit amet
          </h1>
          <p className=" text-gray-700 font-extralight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
            culpa, odio eaque voluptates cupiditate mollitia aliquid porro
            magnam cumque omnis nulla totam sunt officia iusto laboriosam sint
            quia ratione veniam, rem, iste ex? Veniam similique, autem
            distinctio rem eaque qui doloribus! Maiores, quis earum suscipit
            praesentium corporis sint consequuntur harum magni fugit, enim dicta
            architecto perferendis, vel explicabo vero quod fugiat nihil sunt.
          </p>
          <Descripcion></Descripcion>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Documentacion;
