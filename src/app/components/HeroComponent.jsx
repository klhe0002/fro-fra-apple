// "use client"; // This is a client component, as it uses state

// import { useState } from "react";

// import Imgae from "next/image";
// import Navy from "../../../public/navy.png";
// import SwitchWatchComponent from "./SwitchWatchComponent";

// const HeroComponent = () => {
//   const [isChosen, setIsChosen] = useState(false);

//   return (
//     !isChosen && (
//       <section className="hero">
//         <div className="info">
//           <h1>
//             <span className="bold">The Perfect Moment</span> Between Past And <br />
//             Future.
//           </h1>
//         </div>
//         {/* <Imgae src={Navy} /> */}
//         <SwitchWatchComponent isChosen={isChosen} setIsChosen={setIsChosen} />
//         <a href="#">Buy Now</a>
//       </section>
//     )
//   );
// };

// export default HeroComponent;

"use client";

import { useState } from "react";
import Image from "next/image";

import Navy from "../../../public/navy.png";
// import watch1 from "../../../public/watch1.png";
// import watch2 from "../../../public/watch2.png";
// import watch3 from "../../../public/watch3.png";

import SwitchWatchComponent from "./SwitchWatchComponent";
import ColorButtonComponent from "./ColorButtonComponent";

const HeroComponent = () => {
  // State der styrer, hvilket ur der vises
  const [selectedWatch, setSelectedWatch] = useState(Navy);
const [activeColor, setActiveColor] = useState(null);

  return (
    <section className="hero">
      <div className="info">
        <h1>
          <span className="bold">The Perfect Moment</span> Between Past And <br />
          Future.
        </h1>
      </div>

      {/* Det store billede */}

      <Image src={selectedWatch} alt="Selected watch" width={400} height={400} priority className="big-image" />

      {/* De små ure sendes som props */}

      {/* <ColorButtonComponent setSelectedWatch={setSelectedWatch} /> */}
      <ColorButtonComponent setSelectedWatch={setSelectedWatch} activeColor={activeColor} setActiveColor={setActiveColor} />

      <div className="watches">
        <SwitchWatchComponent setSelectedWatch={setSelectedWatch} />
      </div>
      <a href="#" className="button">
        Buy Now
      </a>
    </section>
  );
};

export default HeroComponent;
