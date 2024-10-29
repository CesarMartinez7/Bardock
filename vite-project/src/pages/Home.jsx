import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Women } from "../assets/Logos";

const HomePage = () => {
  return (
    <>
      <section className="columns is-desktop">
        <div className="column is-flex-direction-column is-justify-content-center is-align-content-center p-4">
          <h1 className="title">Hello Tu,👋</h1>
          <p className="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae culpa voluptates sunt fugit aliquam assumenda iure alias sint accusantium laboriosam. Magni aliquid dolores quia natus eaque. Quo corporis, ea commodi odio repellat perferendis tenetur culpa autem unde suscipit nostrum maxime molestiae provident explicabo quisquam dolores fuga? Vitae fugiat non voluptatibus molestiae, minus, possimus quasi reiciendis nisi voluptatem praesentium id eaque!</p>
        </div>
        <div className="column is-justify-content-center is-flex column is-flex-grow-1 is-flex-shrink-5">
            <Women width={400} height={528.58115}></Women>
        </div>

      </section>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
