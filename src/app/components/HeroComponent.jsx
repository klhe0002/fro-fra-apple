//mangler border på a

"use client";

import { useState } from "react";
import Image from "next/image";
import Navy from "../../../public/navy.png";
import SwitchWatchComponent from "./SwitchWatchComponent";
import ColorButtonComponent from "./ColorButtonComponent";

const HeroComponent = () => {
  // State der styrer, hvilket ur der vises
  const [selectedWatch, setSelectedWatch] = useState(Navy);
  const [activeColor, setActiveColor] = useState(null);

  return (
    <section className="grid-cols-auto col-[content] grid py-0 text-white">
      <div className="col-start-1 row-start-2 grid max-w-[700px]">
        <h1>
          <span className="bold">The Perfect Moment</span> Between Past And{" "}
          <br />
          Future.
        </h1>
      </div>
      <Image
        src={selectedWatch}
        alt="Selected watch"
        width={400}
        height={400}
        priority
        className="col-start-2 row-[1/6] grid"
      />
      <ColorButtonComponent
        setSelectedWatch={setSelectedWatch}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />

      <div className="col-[2/3] row-start-5 flex content-center gap-4">
        <SwitchWatchComponent setSelectedWatch={setSelectedWatch} />
      </div>

      <a
        href="#"
        className="pt-[0.6rem] row-start-3 inline-block self-start rounded-3xl border-5 border-solid border-white pl-3 no-underline"
      >
        Buy Now
      </a>
    </section>
  );
};

export default HeroComponent;

//className="hero"
//div className="info"
//className="big-image
//className="watches"
//className="button"
