// import Image from "next/image";
// import Navy from "../../../public/navy.png";
// import watch1 from "../../../public/watch1.png";
// import watch2 from "../../../public/watch2.png";
// import watch3 from "../../../public/watch3.png";

// const switchWatchComponent = ({ setIsChosen, isChosen }) => {
//   return (
//     <div className="switch-watch">
//       <Image src={Navy} />
//       <div className="watches">
//         <Image src={watch1} onClick={() => setIsChosen(!isChosen)} />
//         <Image src={watch2} />
//         <Image src={watch3} />
//       </div>
//     </div>
//   );
// };

// export default switchWatchComponent;

import Image from "next/image";
import watch1 from "../../../public/watch1.png";
import watch2 from "../../../public/watch2.png";
import watch3 from "../../../public/watch3.png";
import bigWatch1 from "../../../public/bigWatch1.png";
import bigWatch2 from "../../../public/bigWatch2.png";
import bigWatch3 from "../../../public/bigWatch3.png";

const SwitchWatchComponent = ({ setSelectedWatch }) => {
  return (
    <div className="align-center grid col-[content] justify-center  col-start-2 row-span-[1/6]">
      <div className="grid-span-2/3 2-[100px] row-start-5 flex justify-center gap-4">
        <Image
          src={watch1}
          alt="Watch 1"
          onClick={() => setSelectedWatch(bigWatch1)}
          className="w-[100px]"
        />
        <Image
          src={watch2}
          alt="Watch 2"
          onClick={() => setSelectedWatch(bigWatch2)}
          className="w-[100px]"
        />
        <Image
          src={watch3}
          alt="Watch 3"
          onClick={() => setSelectedWatch(bigWatch3)}
          className="w-[100px]"
        />
      </div>
    </div>
  );
};

export default SwitchWatchComponent;

//className="switch-watch"

//div className="watches"
