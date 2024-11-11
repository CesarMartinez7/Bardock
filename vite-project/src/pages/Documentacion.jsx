import React, { useEffect } from "react";
import { MySQL,Vite,Nodejs,Expressjs,Chartjs,JavaScript,ReactCon,Firefox, VisualStudioCode,Yarn,Git, Prettier, Python, GitHub} from "../components/Icons/Logos.jsx";
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
    items.forEach((item)=>{
        let color = item.getAttribute("data-color")
        item.addEventListener("mouseenter",(e)=>{
            e.target.style.filter = `drop-shadow(${color} 0px 8px 24px)`;
            e.target.style.colot = "red"
        })
        item.addEventListener("mouseleave", (e) => {
            e.target.style.filter = ""
        })
        console.log(color);
})
}



const Documentacion = () => {

    useEffect(()=>{
        handlerHover()
    },[])

  return (
    <>
      <section className="p-9 mt-14 lg:p-20 flex flex-col gap-5">
        <div className="">
          <h1 className="font-extrabold text-balance text-4xl  text-gray-800 mb-4 ">Herramientas Utilizadas </h1>
          <p className=" text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint
            amet dicta! Consequuntur dolores molestiae, voluptas, eaque nulla,
            tenetur distinctio similique quaerat officiis at numquam laborum
            nesciunt nihil? Accusamus pariatur sapiente explicabo nostrum, iste
            distinctio sit sunt eos omnis odit ut doloribus illum nisi, ipsum
            nobis. Qui totam sit voluptate itaque numquam, placeat ab eos
            suscipit, molestias labore ipsum sint.
          </p>

          <section className="bg-gray-800 ">
            <div className="logos-items h-screen xl:h-2/4">
              <Expressjs className="item"/>
              <Vite className="item"/>
              <ReactCon className="item"></ReactCon>
              <GitHub className="item"></GitHub>
              <VisualStudioCode className="item"></VisualStudioCode>
              <Python className="item"></Python>
              <MySQL className="item"/>
              <JavaScript className="item" />
              <Yarn className="item" ></Yarn>
              <Chartjs className="item"/>
              <Firefox className="item"></Firefox>
              <Git className="item"></Git>
              <Prettier className="item"></Prettier>
            </div>
          </section>
          
        </div>
        <div className="content is-size-6 is-size-6-mobile">
          <h1 className="font-extrabold text-balance text-4xl  text-gray-800 mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus placeat odio officia iste illum rem nulla, in voluptatum voluptatem dignissimos? Provident dicta distinctio quo modi doloribus quisquam, sunt deserunt excepturi earum eum commodi minima cumque! Reprehenderit, deserunt voluptatum velit debitis, tenetur aperiam tempora optio ad exercitationem dolorum, eveniet cumque ullam!
          </p>
          <figure class="image is-128x128">
  <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
</figure>
        </div>
        <div className="content is-size-6 is-size-7-mobile">
          <h1 className="font-extrabold text-balance text-4xl  text-gray-800 mb-4 ">Lorem ipsum dolor sit amet</h1>
          <p className=" text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus culpa, odio eaque voluptates cupiditate mollitia aliquid porro magnam cumque omnis nulla totam sunt officia iusto laboriosam sint quia ratione veniam, rem, iste ex? Veniam similique, autem distinctio rem eaque qui doloribus! Maiores, quis earum suscipit praesentium corporis sint consequuntur harum magni fugit, enim dicta quisquam consectetur sunt optio labore eaque nulla quaerat nemo cumque vero qui. Totam, alias suscipit similique minus voluptatem, tempora ea vero nemo dolorum amet consectetur sequi quasi, odio quaerat! Inventore nostrum distinctio aperiam repellat a assumenda architecto perferendis, vel explicabo vero quod fugiat nihil sunt.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Documentacion;
