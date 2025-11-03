

//Det mest dynamiske
// import SingleButtonComponent from "./SingleButtonComponent";
// import bigWatch1 from "../../../public/bigWatch1.png";
// import bigWatch2 from "../../../public/bigWatch2.png";
// import bigWatch3 from "../../../public/bigWatch3.png";

// const ColorButtonComponent = ({ setSelectedWatch, activeColor, setActiveColor }) => {
//   const buttons = [
//     { color: "blue", image: bigWatch1 },
//     { color: "green", image: bigWatch2 },
//     { color: "pink", image: bigWatch3 },
//   ];

//   return (
//     <div className="color-button-group">
//       {buttons.map((btn) => (
//         <SingleButtonComponent key={btn.color} color={btn.color} image={btn.image} setSelectedWatch={setSelectedWatch} isActive={activeColor === btn.color} onClick={setActiveColor} />
//       ))}
//     </div>
//   );
// };

// export default ColorButtonComponent;

//mindre dynamisk, men nemmere at forstå
import SingleButtonComponent from "./SingleButtonComponent";
import bigWatch1 from "../../../public/bigWatch1.png";
import bigWatch2 from "../../../public/bigWatch2.png";
import bigWatch3 from "../../../public/bigWatch3.png";

const ColorButtonComponent = ({ setSelectedWatch, activeColor, setActiveColor }) => {
  return (
    <div className="color-button-group">
      <SingleButtonComponent color="blue" image={bigWatch1} setSelectedWatch={setSelectedWatch} isActive={activeColor === "blue"} onClick={setActiveColor} />
      <SingleButtonComponent color="green" image={bigWatch2} setSelectedWatch={setSelectedWatch} isActive={activeColor === "green"} onClick={setActiveColor} />
      <SingleButtonComponent color="pink" image={bigWatch3} setSelectedWatch={setSelectedWatch} isActive={activeColor === "pink"} onClick={setActiveColor} />
    </div>
  );
};

export default ColorButtonComponent;
