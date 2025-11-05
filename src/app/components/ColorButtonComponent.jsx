
//mindre dynamisk, men nemmere at forstå
import SingleButtonComponent from "./SingleButtonComponent";
import bigWatch1 from "../../../public/bigWatch1.png";
import bigWatch2 from "../../../public/bigWatch2.png";
import bigWatch3 from "../../../public/bigWatch3.png";

const ColorButtonComponent = ({ setSelectedWatch, activeColor, setActiveColor }) => {
  return (
    <div className="grid gap-5 col-start-3 row-start-2 content-center">
      <SingleButtonComponent color="blue" image={bigWatch1} setSelectedWatch={setSelectedWatch} isActive={activeColor === "blue"} onClick={setActiveColor} />
      <SingleButtonComponent color="green" image={bigWatch2} setSelectedWatch={setSelectedWatch} isActive={activeColor === "green"} onClick={setActiveColor} />
      <SingleButtonComponent color="pink" image={bigWatch3} setSelectedWatch={setSelectedWatch} isActive={activeColor === "pink"} onClick={setActiveColor} />
    </div>
  );
};

export default ColorButtonComponent;

// <div className="">